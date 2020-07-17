"use strict";

let localVideo = document.getElementById("localVideo");
let remoteVideo = document.getElementById("remoteVideo");

let isInitiator = false;
let isChannelReady = false;
let isStarted = false;

let localStream;
let remoteStream;

let pc; // peer connection 
let sendChannel;
var dataChannelSend = document.querySelector('textarea#dataChannelSend');
var dataChannelReceive = document.querySelector('textarea#dataChannelReceive');
var sendButton = document.querySelector('button#sendButton');

sendButton.onclick = sendData;

let pcConfig = {
    'iceServers': [{
        'url': 'stun:stun.l.google.com:19302'
      }]
}

let room = 'foo';

let socket = io.connect('13.124.185.161:8080');
//let socket = io.connect('https://chat.onifts.com/test');

if(room !==''){

    console.log('[1] socket - Attempted to create or join Room',room);
    
    socket.emit('create or join',room);
    
} // end if 

// var constraints = { audio: true, video: { width: 1280, height: 720 } };
var constraints = { audio: false, video: true };

// navigator.mediaDevices.getUserMedia(constraints)
navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch((error) => {});

function gotStream(stream) {

    console.log("[3] gotStream :: Adding local stream", isInitiator);

    dataChannelSend.placeholder = '';

    localStream = stream;
    localVideo.srcObject = stream;
    
    sendMessage("got user media"); // [S]
    
    // create : true
    // join   : false 
    if (isInitiator) {   
        maybeStart('gotStream');
    }

} // end gotStream

function maybeStart( who ) {

    // false, MediaStream, false 
    console.log("[F1] maybeStart :: >> MaybeStart() : ", who, isStarted, localStream, isChannelReady); 
    
    if (!isStarted && typeof localStream !== "undefined" && isChannelReady) {
        
        console.log("[F2] maybeStart :: >>>>> creating peer connection");
        
        createPeerConnection();
        
        console.log("[P4] RTCPeerConnection - addStream");
        pc.addStream(localStream);
        
        isStarted = true;
        
        console.log("[F3] maybeStart :: isInitiator : ", isInitiator);
        
        if (isInitiator) { doCall(); }

    }
    else { console.error('[F4] maybeStart :: not Started!'); } // end if 

} // end maybeStart

function createPeerConnection() {

    console.log("[F5] createPeerConnection :: ");

    try {
        
        //pc = new RTCPeerConnection(null);

        console.log("[P1] RTCPeerConnection");
        pc = new RTCPeerConnection(pcConfig);
        
        sendChannel = pc.createDataChannel( 'sendDataChannel', null );
        sendChannel.onopen = onSendChannelStateChange;
        pc.ondatachannel = receiveChannelCallback;

        console.log("[P2] RTCPeerConnection - onicecandidate");
        pc.onicecandidate = handleIceCandidate;
        
        console.log("[P3] RTCPeerConnection - onaddstream");
        pc.onaddstream = handleRemoteStreamAdded;
        
        

    } 
    catch (e) {
        
        alert("[F6] createPeerConnection :: connot create RTCPeerConnection object");
        return;

    } // end try 

} // end createPeerConnection

function onSendChannelStateChange() {
    
    console.log("[T1] createDataChannel - onSendChannelStateChange",sendChannel.readyState);

    if (sendChannel.readyState === 'open') { 
        
        sendChannel.onmessage = onReceiveMessageCallback; 
    
    } 
    else {} // end if 

} // end onSendChannelStateChange

function receiveChannelCallback(event) {

    console.log("[T2] createDataChannel - receiveChannelCallback",event.channel);

    sendChannel = event.channel;
    sendChannel.onmessage = onReceiveMessageCallback;

} // end receiveChannelCallback

function sendData() {
    
    var data = dataChannelSend.value;

    console.log('>>>>>>>>>>>>>>>>> sendData :: ',data)
    
    sendChannel.send(data);

} // end sendData

function onReceiveMessageCallback(event) {
    
    console.log('>>>>>>>>>>>>>>>>> receiveData :: ',event.data)

    dataChannelReceive.value = event.data;

} // end onReceiveMessageCallback

function handleIceCandidate(event) {

    if (event.candidate) {
      
        console.log("[H1] handleIceCandidate :: iceCandidateEvent", event);

        sendMessage({

            type      : "candidate",
            id        : event.candidate.sdpMid,
            label     : event.candidate.sdpMLineIndex,
            candidate : event.candidate.candidate,

        });
  
    } 
    else { console.log("[H2] handleIceCandidate :: end of candidates"); }

} // end handleIceCandidate

function handleRemoteStreamAdded(event) {

  console.log("[H3] handleRemoteStreamAdded :: remote stream added", event);

  remoteStream = event.stream;
  remoteVideo.srcObject = remoteStream;

} // end handleRemoteStreamAdded

function doCall() {

    console.log("[P5-1] RTCPeerConnection - createOffer");
    pc.createOffer( setLocalAndSendMessage, handleCreateOfferError );

} // end doCall

function doAnswer() {

    console.log("[P5-2] RTCPeerConnection - createAnswer");
    pc.createAnswer().then( setLocalAndSendMessage, onCreateSessionDescriptionError );

} // end doAnswer

function setLocalAndSendMessage(sessionDescription) {
  
    console.log("[P6] RTCPeerConnection - setLocalDescription");
    pc.setLocalDescription(sessionDescription);
    
    sendMessage(sessionDescription);

} // end setLocalAndSendMessage

function handleCreateOfferError(event) { console.log("createOffer() error: ", event); }
function onCreateSessionDescriptionError(error) { console.error("Falied to create session Description", error); }

function sendMessage(message){
    
  console.log('[S] sendMessage :: Client sending message : ',message);
  
  socket.emit('message',message);

} // end sendMessage

/*
  
    ------------------------------------------------------ [ Socket ] 

*/

socket.on('created', (room,id)=>{
    
    console.log('[2] socket - created :: room : ' + room+', socket ID : '+id);

    isInitiator = true;

});

socket.on('join',room=>{
  
    console.log('[J1] socket - join :: Another peer made a request to join room : ' + room);

    console.log('[J1] socket - join :: This peer is the initiator of room : ' + room + '!');
    
    isChannelReady = true;

});

socket.on('joined',room=>{
  
    console.log('[J2] socket - joined :: '+ room );
    
    isChannelReady = true;

});

socket.on('message', (message)=>{

    console.log('[M] socket - message :: Client received message : ', message.type, message);

    if(message === 'got user media'){ maybeStart('message-1'); }
    else if(message.type === 'offer'){

        if(!isInitiator && !isStarted){ maybeStart('message-2'); }

        console.log('[P7-2] RTCPeerConnection - setRemoteDescription ');
        pc.setRemoteDescription(new RTCSessionDescription(message));

        doAnswer();

    }
    else if(message.type ==='answer' && isStarted){

        console.log('[P7-1] RTCPeerConnection - setRemoteDescription ');
        pc.setRemoteDescription(new RTCSessionDescription(message));

    }
    else if(message.type ==='candidate' && isStarted){

        const candidate = new RTCIceCandidate({ 
            
            sdpMLineIndex : message.label,
            candidate     : message.candidate 
        
        });

        console.log('[P8] RTCPeerConnection - addIceCandidate ');
        pc.addIceCandidate(candidate); // 후보자 
    
    } // end if 

});

socket.on('log', array=>{ 

    console.log( '--------------------------------- [S] ' );
    console.log.apply( console,array ); 
    console.log( '--------------------------------- [E] ' );
    
});

socket.on('full', room=>{ console.log('[F] socket - full :: Room '+room+'is full'); });
