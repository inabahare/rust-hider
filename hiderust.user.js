// ==UserScript==
// @name        Hide Rust
// @namespace   inabahare
// @description rust sucks, therefore we should remove/hide it.
// @include     *facepunch.com/*
// @version     1
// @grant       none
// ==/UserScript==

 var itnnRust=$(".threadbit");$.each(itnnRust,function(e,t){var n=t.children[1].children[0].children[2].children[1].children[0].innerHTML;if(n==="PlayRustBot"){t.remove()}});$("#forum415").remove();$("#TickerBox").bind("DOMNodeInserted DOMSubtreeModified DOMNodeRemoved",function(e){var t=this.children[0];var n=t.children[0].children[0].children[0].innerHTML;if(n==="Rust"||n==="Rust Servers"||n==="Rust Exploits"||n==="Rust Bug Reports"||n==="Rust Modding"||n==="Rust Suggestions"){t.remove()}})
