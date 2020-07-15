# WebRTC (Web Real-Time Communication)
- WebRTC 는 웹 브라우저 간에 플러그인의 도움 없이 서로 통신할 수 있도록 설계된 API이다. 
- W3C에서 제시된 초안이며, 음성 통화, 영상 통화, P2P 파일 공유 등으로 활용될 수 있다. 
- Real-time communication with WebRTC: Google I/O 2013 발표 
- appr.tc 
- https://www.html5rocks.com/ko/tutorials/webrtc/basics/
- Dev
  - MediaStream: 사용자의 카메라와 마이크 같은 곳의 데이터 스트림에 접근합니다.
  - RTCPeerConnection: 암호화 및 대역폭 관리를 하는 기능을 가지고 있고, 오디오 또는 비디오 연결을 합니다.
  - RTCDataChannel: 일반적인 데이터 P2P통신

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
