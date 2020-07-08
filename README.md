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
    - data 
      - unit 
      - world
      - city 
      - ...
    - network
      - WebSocket
      - WebRTC
    - lib
    - tool 
      - batchSetting 
      - mapSetting 
      - mapUnitSetting // include all object info setting 

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

# Webpack -> Rollup
- https://medium.com/naver-fe-platform/webpack%EC%97%90%EC%84%9C-rollup%EC%A0%84%ED%99%98%EA%B8%B0-137dc45cbc38
