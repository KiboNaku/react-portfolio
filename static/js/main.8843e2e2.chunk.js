(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/andy_photo.b04d60cd.jpg"},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),c=(a(13),a(1)),s=a(2),o=a(4),m=a(3),u=(a(14),a(6),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("preloader_canvas"),t=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight;var a=[],n=["255, 255, 255","122, 255, 117","128, 255, 223","255, 141, 128","157, 50, 250"],l=30+Math.floor(e.width*e.height/14e3),i={dots:null};!function(){for(var i=0;i<l;i++){var r=c(1,2);a[i]={radius:{current:r,original:r},xpos:c(0,e.width),ypos:c(0,e.height),xvelocity:s()*c(.3,2,!1),yvelocity:s()*c(.3,2,!1),color:n[c(0,c.length)],alpha:c(.4,.7,!1),draw:function(){t.beginPath(),t.arc(this.xpos,this.ypos,this.radius.current,0,2*Math.PI,!1),t.fillStyle="rgba("+this.color+","+this.alpha+")",t.fill()},move:function(){this.xpos+=this.xvelocity,this.ypos+=this.yvelocity,this.xpos<-50?(this.xpos=-50,this.xvelocity*=-1):this.xpos>e.width+50&&(this.xpos=e.width+50,this.xvelocity*=-1),this.ypos<-50?(this.ypos=-50,this.yvelocity*=-1):this.ypos>e.height+50&&(this.ypos=e.height+50,this.yvelocity*=-1)}}}function c(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];a&&t++;var n=Math.random()*(t-e)+e;return a?Math.floor(n):n}function s(){return 0==Math.floor(2*Math.random())?1:-1}}(),i.dots=setInterval((function(){t.clearRect(0,0,e.width,e.height),a.forEach((function(e){e.draw(),e.move()}))}),50)}},{key:"render",value:function(){return l.a.createElement("main",{id:"landing-main",className:"vertical-center justify-content-center"},l.a.createElement("canvas",{id:"preloader_canvas"}),l.a.createElement("div",{id:"landing-holder",className:"container"},l.a.createElement("div",{id:"landing-text"},l.a.createElement("p",null,"Hello, I'm ",l.a.createElement("span",{className:"name"},"Andy Ni"),"."),l.a.createElement("p",null,"I'm a junior ",l.a.createElement("span",{className:"major"},"Computer Engineering")," student at ",l.a.createElement("span",{className:"university"},"UT Austin"),"."),l.a.createElement("a",{className:"landing-btn",href:"#summary-main"},"View my experience"))))}}]),a}(n.Component)),h=(a(15),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("main",{id:"skills-main",className:"col-3 float-left"},l.a.createElement("h5",{className:"skills"},"Skills"),l.a.createElement("h6",{className:"skills-subheader"},"Experienced"),l.a.createElement("ul",{className:"experienced skills"},l.a.createElement("li",null,"Java"),l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"ReactJS"),l.a.createElement("li",null,"Flask"),l.a.createElement("li",null,"Android Studio"),l.a.createElement("li",null,"Web Development"),l.a.createElement("li",null,"Web Scraping")),l.a.createElement("h6",{className:"skills-subheader"},"Familiar"),l.a.createElement("ul",{className:"familiar skills"},l.a.createElement("li",null,"C"),l.a.createElement("li",null,"C++"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"Linux"),l.a.createElement("li",null,"Git"),l.a.createElement("li",null,"JUnit")),l.a.createElement("h6",{className:"skills-subheader"},"Exposed"),l.a.createElement("ul",{className:"exposed skills"},l.a.createElement("li",null,"MySQL"),l.a.createElement("li",null,"jQuery"),l.a.createElement("li",null,"R"),l.a.createElement("li",null,"C#"),l.a.createElement("li",null,"ARM Assembly"),l.a.createElement("li",null,"AWS"),l.a.createElement("li",null,"Unreal Engine"),l.a.createElement("li",null,"Game Development"),l.a.createElement("li",null,"Machine Learning")))}}]),a}(n.Component)),d=(a(16),function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=a(17);return l.a.createElement("main",{id:"about-main",className:""},l.a.createElement("div",{className:"d-inline"},l.a.createElement("div",{className:"content-panel"},l.a.createElement("div",null,l.a.createElement("h2",{className:"heading-title"},"About")),l.a.createElement("div",{id:"about-text"},l.a.createElement("div",null,l.a.createElement("img",{className:"about-photo",src:e})),l.a.createElement("p",null,"I am a Computer Engineering (Software Engineering Track) student at the University of Texas at Austin. I enjoy creating meaningful projects, and I am excited to share some with you.")))))}}]),n}(n.Component)),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"summary-main"},l.a.createElement(h,null),l.a.createElement(d,null))}}]),a}(n.Component);a(18),a(19),a(23);var p=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.8843e2e2.chunk.js.map