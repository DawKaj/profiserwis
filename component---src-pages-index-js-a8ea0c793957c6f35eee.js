(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/OlT":function(e,t,a){e.exports={globalcolordefault:"#fff",globalcolordark:"#000",globalcolorprimary:"#2196f3",globalcolorsecondary:"#20254d",globalcolormuted:"#a5a19d",globalcoloraccent:"#6df2b7",bordercolor:"#a5a19d"}},GNxJ:function(e,t){e.exports="data:image/svg+xml;base64,PHN2Zw0KICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIg0KICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICBpZD0ic3ZnMTYiDQogICB2aWV3Qm94PSIwIDAgODAgODAiDQogID4NCiAgPHBvbHlnb24NCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC41Nzg0MDMyOCwwLjEzMzM5NTU0LC0wLjEzMzUzNDkyLDAuNTc3Nzk5NTQsNjcuNDE4NzIxLC0zMi4zNzgyMDQpIg0KICAgICBzdHlsZT0iZmlsbDojZGJlZWYzIg0KICAgICBwb2ludHM9IjAsMTI1LjAzIDIyLjE5LDE0Ny4xIDU2LjA1LDE0Ny4yNiAwLjEyLDkwLjM4ICINCiAgICAgaWQ9InBvbHlnb24xIiAvPg0KICA8cG9seWdvbg0KICAgICB0cmFuc2Zvcm09Im1hdHJpeCgtMC4xMzM1MzQ5MiwwLjU3Nzc5OTU0LC0wLjU3ODQwMzI4LC0wLjEzMzM5NTU0LDExMi45NDUyMiw2Ny41NjY2OTYpIg0KICAgICBzdHlsZT0iZmlsbDojOTJjZGRjIg0KICAgICBwb2ludHM9IjAsMTI1LjAzIDIyLjE5LDE0Ny4xIDU2LjA1LDE0Ny4yNiAwLjEyLDkwLjM4ICINCiAgICAgaWQ9InBvbHlnb24yIiAvPg0KICA8cG9seWdvbg0KICAgICB0cmFuc2Zvcm09Im1hdHJpeCgtMC41Nzg0MDMyOCwtMC4xMzMzOTU1NCwwLjEzMzUzNDkyLC0wLjU3Nzc5OTU0LDEyLjkyOTAyMSwxMTIuOTg1OCkiDQogICAgIHN0eWxlPSJmaWxsOiMzMTg1OWIiDQogICAgIHBvaW50cz0iMCwxMjUuMDMgMjIuMTksMTQ3LjEgNTYuMDUsMTQ3LjI2IDAuMTIsOTAuMzggIg0KICAgICBpZD0icG9seWdvbjMiIC8+DQogIDxwb2x5Z29uDQogICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMTMzNTM0OTIsLTAuNTc3Nzk5NTQsMC41Nzg0MDMyOCwwLjEzMzM5NTU0LC0zMi42MTYyODksMTMuMDUwMzk2KSINCiAgICAgc3R5bGU9ImZpbGw6IzIwNTg2NyINCiAgICAgcG9pbnRzPSIwLDEyNS4wMyAyMi4xOSwxNDcuMSA1Ni4wNSwxNDcuMjYgMC4xMiw5MC4zOCAiDQogICAgIGlkPSJwb2x5Z29uNCIgLz4NCjwvc3ZnPg0K"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),c=a("8k0H"),i=(a("a1Th"),a("Btvt"),a("I5cv"),a("Wbzz")),l=a("GNxJ"),r=a.n(l);function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var I=function(e){var t,a;a=e,(t=c).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n;n=c;function c(t){var a;return(a=e.call(this,t)||this)._onMouseMove=function(e){a.setState({x:e.pageX,y:e.pageY,ax:-(window.innerWidth/2-e.pageX)/20,ay:(window.innerHeight/2-e.pageY)/20,xx:window.innerWidth})},a.state={x:0,y:0,ax:.01,ay:.01,xx:0},a._onMouseMove=a._onMouseMove.bind(M(a)),a}return c.prototype.render=function(){var e=this.state,t=e.x,a=e.y,n=e.ax,c=e.ay,l=!1;return e.xx>968&&(l=!0),o.a.createElement("div",null,o.a.createElement("div",{onMouseMove:this._onMouseMove,class:"gradient",style:l?{background:"radial-gradient(at "+t+"px "+a+"px,rgba(255,255,255,.1) 0,rgba(0,0,0,.9) 45%)",opacity:"0.7"}:{}},o.a.createElement("div",{className:"container"},o.a.createElement("img",{className:"visible",src:r.a,alt:"",style:{position:"absolute",width:"380px",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"perspective-card",style:l?{transform:"rotateY("+n+"deg) rotateX("+c+"deg) translateZ(100px)"}:{}},o.a.createElement("div",{className:"perspective-card-content",style:{opacity:"1"}},o.a.createElement("p",null,"jesteśmy polską"),o.a.createElement(i.Link,{to:"onas"},"firmą inżynierską"),o.a.createElement("p",null,"z 10-letnim doświadczeniem w branży"),o.a.createElement("p",null,o.a.createElement(i.Link,{to:"automatyka"},"automatyki przemysłowej")),o.a.createElement("p",null,"zajmujemy się kompleksową obsługą firm "),o.a.createElement("p",null,o.a.createElement(i.Link,{to:"utrzymanie_ruchu"},"produkcyjnych")),o.a.createElement("p",null,o.a.createElement(i.Link,{to:"instalatorzy"},"i instalacyjnych")),o.a.createElement("p",null,"w zakresie"),o.a.createElement(i.Link,{to:""},"projektowania,"),o.a.createElement(i.Link,{to:""},"prefabrykacji"),o.a.createElement("p",null,"oraz"),o.a.createElement(i.Link,{to:""},"dostaw"),o.a.createElement("p",null,"akcesoriów elektrotechnicznych")))))))},c}(o.a.Component);a("/OlT"),t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement(I,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a8ea0c793957c6f35eee.js.map