parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L76f":[function(require,module,exports) {
"use strict";var e=window.Game,s=new e,t=document.querySelector(".message-win").classList.contains("hidden"),a=document.querySelector(".message-lose").classList.contains("hidden");function n(e){if(t&&a)switch(e.key){case"ArrowUp":s.moveCellsUp(),s.handleMessages(),s.isBoardEmpty()&&(s.generateRandomCell(),d());break;case"ArrowDown":s.moveCellsDown(),s.handleMessages(),s.isBoardEmpty()&&(s.generateRandomCell(),d());break;case"ArrowLeft":s.moveCellsLeft(),s.handleMessages(),s.isBoardEmpty()&&(s.generateRandomCell(),d());break;case"ArrowRight":s.handleMessages(),s.moveCellsRight(),s.isBoardEmpty()&&(s.generateRandomCell(),d())}}function d(){s.loseMessage.classList.add("hidden"),s.winMessage.classList.add("hidden"),s.generateRandomCell(),s.handleMessages(),s.startButton.classList.add("hidden"),s.restartButton.classList.remove("hidden")}function l(){s.resetCells(s.fieldCells),s.startButton.classList.remove("hidden"),s.restartButton.classList.add("hidden"),s.startMessage.classList.remove("hidden"),s.loseMessage.classList.add("hidden")}document.addEventListener("keydown",n),s.startButton.addEventListener("click",d),s.restartButton.addEventListener("click",l);
},{}]},{},["L76f"], null)
//# sourceMappingURL=controller.55592dd2.js.map