(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"vader",image:"https://fsmedia.imgix.net/bd/01/37/c3/7c43/4930/9c8e/5f591116808c/darth-vader.jpeg?auto=format%2Ccompress&h=800&w=800&crop=edges&fit=crop"},{id:2,name:"luke",image:"https://vignette.wikia.nocookie.net/starwars/images/8/87/Luke_whining.jpg/revision/latest?cb=20120109234546"},{id:3,name:"r2d2",image:"https://www.dailydot.com/wp-content/uploads/2018/05/sw36.jpg"},{id:4,name:"obiwan",image:"https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"},{id:5,name:"yoda",image:"https://lumiere-a.akamaihd.net/v1/images/ep3_ia_89377_r_bb46f7c6.jpeg?region=500%2C313%2C2925%2C1462&width=960"},{id:6,name:"dooku",image:"https://vignette.wikia.nocookie.net/villains/images/f/f5/Count-dooku.jpg/revision/latest?cb=20170619004133"},{id:7,name:"fett",image:"https://cdn11.bigcommerce.com/s-4c9vl923de/images/stencil/1024x1024/products/115/378/original__27419.1483977430.jpg?c=2"},{id:8,name:"droid",image:"https://www.sideshow.com/product-asset/100284/feature"},{id:9,name:"han",image:"https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg/220px-Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg"}]},,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(2),c=a.n(i),r=(a(16),a(7)),s=a(3),d=a(4),l=a(8),m=a(5),h=a(9);a(17),a(18),a(19);var u=function(e){return o.a.createElement("div",{className:"card col-md-4"},o.a.createElement("div",{className:"img-container",onClick:function(){return e.checkAndShuffle(e.id)}},o.a.createElement("img",{alt:e.name,src:e.image})))},p=a(6);a(20);var g=function(e){return o.a.createElement("nav",{class:"navbar navbar-dark fixed-top bg-dark"},o.a.createElement("div",{class:"container"},o.a.createElement("h2",null,"Click Game"),o.a.createElement("h3",null,"Score: ",e.score),o.a.createElement("h3",null,"Top Score: ",e.topScore)))},f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={cards:p,chosen:[],score:0,topScore:0},a.checkAndShuffle=function(e){if(a.state.chosen.includes(e))alert("You already chose that"),a.setState({score:0});else{console.log("right choice"),console.log(a.state.chosen);var t=Object(r.a)(a.state.chosen);t.push(e),a.setState({chosen:t});var n=a.state.score+1;a.setState({score:n});var o=a.shuffle(a.state.cards);a.setState({cards:o}),a.state.topScore<n&&a.setState({topScore:n})}},a.shuffle=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement(g,{score:this.state.score,topScore:this.state.topScore}),o.a.createElement("div",{className:"row content"},this.state.cards.map(function(t){return o.a.createElement(u,{id:t.id,checkAndShuffle:e.checkAndShuffle,name:t.name,image:t.image})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.86c67df1.chunk.js.map