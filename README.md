# WebRTC (Web Real-Time Communication)
- WebRTC 는 웹 브라우저 간에 플러그인의 도움 없이(No Plugin!) 서로 통신할 수 있도록 설계된 API이다. 
- W3C에서 제시된 초안이며, 음성 통화, 영상 통화, P2P 파일 공유 등으로 활용될 수 있다. 
- Real-time communication with WebRTC: Google I/O 2013 발표 
- appr.tc 
- https://www.html5rocks.com/ko/tutorials/webrtc/basics/
- Dev
  - WebRTC + WebRTC Server (coturn, janus, ...)
  - MediaStream: 사용자의 카메라와 마이크 같은 곳의 데이터 스트림에 접근합니다.
  - RTCPeerConnection: 암호화 및 대역폭 관리를 하는 기능을 가지고 있고, 오디오 또는 비디오 연결을 합니다.
    - 시그널링(Signaling) : RTCPeerConnection들이 적절하게 데이터를 교환할 수 있게 처리하는 과정을 시그널링(Signaling)이라고 한다.
    - 콜러(caller) / 콜리(callee) : PeerConnection은 두 명의 유저가 스트림을 주고 받는 것이므로 연결을 요청한 콜러(caller)와 연결을 받는 콜리(callee)가 존재한다. 
    - SessionDescription : 콜러와 콜리가 통신을 하기 위해서는 중간 역할을 하는 서버가 필요하고 서버를 통해서 SessionDescription을 서로 주고 받아야 한다.
  - RTCDataChannel: 일반적인 데이터 P2P통신
    - https://velog.io/@ehdrms2034/WebRTC-%EC%9B%B9%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EB%A1%9C-%ED%99%94%EC%83%81-%EC%B1%84%ED%8C%85%EC%9D%84-%EB%A7%8C%EB%93%A4-%EC%88%98-%EC%9E%88%EB%8B%A4%EA%B3%A0
  - STUN / TURN
    - STUN (Session Traversal Utilities for NAT)
      - STUN 은 IETF RFC 5389에 정의된 네트워크 프로토콜/패킷 포맷으로, 네트워크 환경에 대한 Discovery 를 위한 것이다. 
      - 메신저들끼리 통신하기 위하여 STUN 패킷을 이용한다.
    - TURN (Traversal Using Relays around NAT)
      - Peer간 직접 통신이 실패할 경우 종단점들 사이에 데이터 릴레이를 수행하는 TURN 서버들을 사용한다. 
      - TURN 은 Peer 들간의 미디어 스트리밍을 릴레이하기 위해 사용된다. 
      - TURN은 공용 주소들을 가지고 있으며 미디어를 릴레이 하기 때문에 네트워크와 컴퓨팅 자원이 소모될 수 있다.
    - https://alnova2.tistory.com/1110

# rollup.js
- output format : iife, cjs, umd, es 
  - iife : immediately-invoked function expression 
    - For browsers
    - compile to a <script> containing a self-executing function ('iife')
  - cjs
    - For Node.js
    - compile to a CommonJS module ('cjs')
  - umd
    - For both browsers and Node.js
    - UMD format requires a bundle name
- plugins 
  - rollup-plugin-copy-assets
  - https://www.npmjs.com/package/rollup-plugin-copy-assets
  
# Dev 
- npm install -g http-server
- http-server
- or 
- yarn dev

# Dev File Structure
- /
  - src
    - scene 
      - lobbyScene
      - gameScene
        - loading
        - map
        - action 
        - result 
        - ... 
    - data // binary, CDN? patch?
      - unit 
      - world
      - city 
      - ...
    - lib
      - network
        - WebSocket
        - WebRTC
      - ...
    - tool  
      - mapUnitSetting // one button upload, include all object info setting 

- ----------------------------------------
- [ Remark ]
- scene : container => 1 : 1 (x)
- data 
  - local : game rule (local file)
  - server : game result, history
- ----------------------------------------
- Ref
- https://github.com/Zyie/Pixi.js-Game/tree/master/PixiJS%20-%20SnowFall
- https://github.com/Coder2012/containers
- https://github.com/pixijs/pixi.js/wiki/Boilerplate

# pixijs
- 2d game dev webGL
- https://github.com/pixijs/pixi.js
- https://pixijs.io/examples/#/demos-basic/container.js
- https://github.com/kittykatattack/learningPixi#using-a-particlecontainer-to-group-sprites
- https://www.youtube.com/watch?v=zhybw6rE_QU&t=219s
- https://ko.madworldmmo.com/about

# pixi-ui
- https://pixijs.io/pixi-ui/

# ui for pixijs 
- EZGUI
- https://github.com/Ezelia/EZGUI
- dat.GUI
- http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
- react pixi
- https://reactpixi.org/

# pixi game 
- https://www.pixijs.com/gallery
- https://tooncup.cartoonnetwork.co.uk/home/
- https://www.sido.fr/#/qui-suis-je
- http://work.goodboydigital.com/dangermouse/ultimate/
- https://hypnoticowl.com/games/the-wizard/play/
- http://case-study.goodboydigital.com/spicy-mcbites/
- https://www.goodboydigital.com/pixijs/pixilights/
- https://cavalierchallenge.com/

# other game 
- http://m.inven.co.kr/webzine/wznews.php?site=indie&p=3&idx=194689

# WebGL (Web Graphics Library)
- a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins 

# CDN (Content Delivery Network, 콘텐츠 전송 네트워크) URL vs NPM
- CDN : 콘텐츠를 효율적으로 전달하기 위해 여러 노드를 가진 네트워크에 데이터를 저장하여 제공하는 시스템을 말한다. 
- <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"></script>
- NPM 
- import * as PIXI from 'pixi.js'

# GUI (Graphical User Interface, 그래픽 사용자 인터페이스)

# ES6+
- 함수형 프로그래밍 
- https://velog.io/@kyusung/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%9A%94%EC%95%BD
- Class, 객체지향 
- https://poiemaweb.com/es6-class
- import, export
- https://www.daleseo.com/js-module-import/

# Bundler, 번들러
- Webpack -> Rollup
- https://medium.com/naver-fe-platform/webpack%EC%97%90%EC%84%9C-rollup%EC%A0%84%ED%99%98%EA%B8%B0-137dc45cbc38

# Tool 
- Storybook 
  - https://storybook.js.org/
  - https://ideveloper2.dev/blog/2020-05-17--rollup-ts-%EB%A1%9C-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0/
