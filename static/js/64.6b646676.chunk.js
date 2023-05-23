"use strict";(self.webpackChunktest_task=self.webpackChunktest_task||[]).push([[64],{4980:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var i,o,a,r,s=t(168),d=t(1087),c=t(6444),l=(0,c.ZP)(d.OL)(i||(i=(0,s.Z)(["\n  position: absolute;\n  right: 60px;\n  font-size: 20px;\n  margin-top: 20px;\n  border-radius: 20px;\n  padding: 6px 10px;\n  background: transparent;\n  color: #d1af27;\n  @media (min-width: 320px) and (max-width: 610px) {\n    margin-top: 200px;\n  }\n"]))),p=c.ZP.p(o||(o=(0,s.Z)(["\n  left: 60px;\n  font-size: 3vh;\n  font-weight: 700;\n  margin-top: 20px;\n  border-radius: 20px;\n  letter-spacing: 2px;\n  line-height: 137%;\n  background: transparent;\n  color: rgb(209, 118, 39);\n  -webkit-text-stroke: 0.16vh rgb(241, 206, 7);\n  @media (min-width: 1028px) {\n    margin-top: 60px;\n  }\n  @media (max-width: 1100px) {\n    margin-top: 80px;\n  }\n  @media (max-width: 690px) {\n    visibility: hidden;\n  }\n"]))),h=c.ZP.div(a||(a=(0,s.Z)(["\n  position: absolute;\n  display: flex;\n  left: 60px;\n  font-size: 20px;\n  margin-top: 20px;\n  height: 500px;\n  background: transparent;\n  color: #d1af27;\n  @media (min-width: 1030px) {\n    max-width: 400px;\n  }\n"]))),m=c.ZP.div(r||(r=(0,s.Z)(["\n  position: absolute;\n  display: flex;\n  bottom: 30px;\n  right: 50px;\n"]))),u=t(8014),f=t.p+"static/media/Follow.7d2569e51f5f2dec2ec5.png",x=t.p+"static/media/Following.6fcfd47abb72faaae34e.png",w=t(2791),v=t(8351),g=t(9738),b=t(3329),P=function(){var e=(0,w.useRef)(null);return(0,w.useEffect)((function(){var n,t,i,o,a,r,s,d,c,l,p,h,m=function(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return function(){(n=new v.xsS).background=new v.Ilk(1441814),(t=new v.cPb(60,window.innerWidth/window.innerHeight,1,1e3)).position.set(0,4,21),(i=new v.CP7({canvas:e.current})).setSize(window.innerWidth,window.innerHeight),(o=new g.z(t,i.domElement)).enableDamping=!0,o.enablePan=!1,a={time:{value:0}},r=[],s=[];var m=function(){s.push(Math.random()*Math.PI,Math.random()*Math.PI*2,(.9*Math.random()+.1)*Math.PI*.1,.9*Math.random()+.1)};d=new Array(5e4).fill().map((function(e){return r.push(1.5*Math.random()+.5),m(),(new v.Pa4).randomDirection().multiplyScalar(.5*Math.random()+9.5)}));for(var u=0;u<1e5;u++){var f=Math.pow(Math.random(),1.5),x=Math.sqrt(1600*f+10*(1-f)*10);d.push((new v.Pa4).setFromCylindricalCoords(x,2*Math.random()*Math.PI,2*(Math.random()-.5))),r.push(1.5*Math.random()+.5),m()}(c=(new v.u9r).setFromPoints(d)).setAttribute("sizes",new v.a$l(r,1)),c.setAttribute("shift",new v.a$l(s,4)),l=new v.UY4({size:.125,transparent:!0,depthTest:!1,blending:v.WMw,onBeforeCompile:function(e){e.uniforms.time=a.time,e.vertexShader="\n        uniform float time;\n        attribute float sizes;\n        attribute vec4 shift;\n        varying vec3 vColor;\n        ".concat(e.vertexShader,"\n      ").replace("gl_PointSize = size;","gl_PointSize = size * sizes;").replace("#include <color_vertex>","#include <color_vertex>\n          float d = length(abs(position) / vec3(40., 10., 40));\n          d = clamp(d, 0., 1.);\n          vColor = mix(vec3(227., 155., 0.), vec3(100., 50., 255.), d) / 255.;\n        ").replace("#include <begin_vertex>","#include <begin_vertex>\n          float t = time;\n          float moveT = mod(shift.x + shift.z * t, PI2);\n          float moveS = mod(shift.y + shift.z * t, PI2);\n          transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;\n        "),e.fragmentShader="\n        varying vec3 vColor;\n        ".concat(e.fragmentShader,"\n      ").replace("#include <clipping_planes_fragment>","#include <clipping_planes_fragment>\n          float d = length(gl_PointCoord.xy - 0.5);\n          //if (d > 0.5) discard;\n        ").replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d)/* * 0.5 + 0.5*/ );")}}),(p=new v.woe(c,l)).rotation.order="ZYX",p.rotation.z=.2,n.add(p),h=new v.SUY}(),window.addEventListener("resize",m),function e(){!function(){o.update();var e=.5*h.getElapsedTime();a.time.value=e*Math.PI,p.rotation.y=.05*e,i.render(n,t)}(),requestAnimationFrame(e)}(),function(){window.removeEventListener("resize",m),n.remove(p),p.geometry.dispose(),p.material.dispose()}}),[]),(0,b.jsx)("canvas",{ref:e})};function z(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{to:"/tweets",children:(0,b.jsx)(u.Y0U,{size:52,color:"#c0f"})}),(0,b.jsx)(h,{children:(0,b.jsxs)(p,{children:[" ","The test assignment involves the development of a web application using the following technologies and libraries: React, Redux (with Redux Toolkit and Redux DevTools Extension), React Router, Axios, Styled Components. The project is created using Create React App and also includes React Icons, React Loader Spinner, React Redux Persist. Creation of requests by user profile, added interactivity when clicking on the ",(0,b.jsx)("i",{children:"Follow"})," button. The Three.js library is used for data visualization, responsive design. Completed according to the specification."]})}),(0,b.jsxs)(m,{children:[(0,b.jsx)("img",{src:"".concat(f),alt:"card",width:"240"}),(0,b.jsx)("img",{src:"".concat(x),alt:"card",width:"240"})]}),(0,b.jsx)(P,{})]})}}}]);
//# sourceMappingURL=64.6b646676.chunk.js.map