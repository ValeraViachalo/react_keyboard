(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(4),r=n(5),o=n(7),i=n(6),u=n(1),d=n.n(u),l=n(0),p=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={key:null},e.handleKeyEvent=function(t){e.setState({key:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyEvent)}},{key:"componentWillUnmount",value:function(){document.addEventListener("keyup",this.handleKeyEvent)}},{key:"render",value:function(){var e=this.state.key;return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(d.a.Component);n(13);c.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bc4f8521.chunk.js.map