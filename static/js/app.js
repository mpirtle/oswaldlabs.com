"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var loadedScripts=[],loadJS=function(e,t,n){if(!loadedScripts.includes(e)){loadedScripts.push(e);var o=window.document.createElement("script"),r=window.document.getElementsByTagName("script")[0];return o.src=e,o.async=!n,r.parentNode.insertBefore(o,r),t&&"function"==typeof t&&(o.onload=t),o}};String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;var r,a,i=0|t,c=Math.max(0<=i?i:o-Math.abs(i),0);for(;c<o;){if((r=n[c])===(a=e)||"number"==typeof r&&"number"==typeof a&&isNaN(r)&&isNaN(a))return!0;c++}return!1}});var HELLO_BAR_SHOW=!1,request=function(e,t,n){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4==o.readyState)if(200<=o.status&&o.status<300)"function"==typeof n&&n(JSON.parse(o.responseText));else{var e=!1;try{e=JSON.parse(o.responseText).error}catch(e){}e&&console.error("Agastya error",e)}},o.open(t?"POST":"GET",e,!0),o.setRequestHeader("Content-Type","application/json;charset=UTF-8"),o.send(t&&JSON.stringify(t))},loadCss=function(e,t){if(!loadedScripts.includes(e)){loadedScripts.push(e);var n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n.onload=function(){t&&"function"==typeof t&&t()},n.onreadystatechange=function(){var e=n.readyState;"loaded"!==e&&"complete"!==e||t&&"function"==typeof t&&t()},(document.head||document.documentElement||document.body).appendChild(n)}};function ready(e){"loading"!==document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"loading"!==document.readyState&&e()})}window.a11ySettings=window.a11ySettings||{},window.a11ySettings.api=!0;var getComposedPath=function(e){return"function"==typeof e.getComposedPath?e.composedPath():e.path?e.path:[]};ready(function(){var J=document.querySelector(".navbar-toggler");function o(e){if(J&&document.querySelector(".navbar-collapse").classList.remove("show"),e&&e.querySelector(".page-meta .page-slug")){var t=!1;document.body.className.includes("hello-bar--has-moved")&&(t=!0),document.body.className="page-"+e.querySelector(".page-meta .page-slug").innerHTML+(t?" hello-bar--has-moved":"")}var n=function(e){if(e&&void 0!==e.toLowerCase)return e.toLowerCase().replace(/\//g,"")};HELLO_BAR_SHOW&&loadCss("https://unpkg.com/hello-bar@1.3.0/build/index.css",function(){loadJS("https://unpkg.com/hello-bar@1.3.0/build/index.js",function(){window.HelloBar&&window.HelloBar.default&&!document.querySelector(".hello-bar")&&new window.HelloBar.default({id:"augmenta11y-2",text:"<strong>Just launched:</strong> Augmented reality reading app for children with dyslexia. <a href='/platform/shravan/apps/augmenta11y/?utm_source=hellobar&utm_terms=augmenta11y-2'>Download Augmenta11y &rarr;</a>",background:"#dc3545",move:"header",targeting:{onceUser:!0}})})});for(var o=document.querySelectorAll("a"),r=0;r<o.length;r++){var a=o[r];if(a.classList.remove("active"),a.classList.remove("subactive"),n(a.getAttribute("href"))===n(location.pathname)?a.classList.add("active"):"/"!==a.getAttribute("href")&&n(location.pathname).includes(n(a.getAttribute("href")))&&a.classList.add("subactive"),location.hostname!==a.hostname&&!a.querySelectorAll("img:not(.ignore-image)").length){if(a.setAttribute("target","_blank"),a.setAttribute("rel","noopener noreferrer"),!a.getAttribute("href"))return;a.getAttribute("href").includes("mailto:")||a.getAttribute("href").includes("tel:")||a.getAttribute("href").includes("utm_source")||(a.classList.add("has-external-link"),a.getAttribute("href").includes("?")?a.setAttribute("href",a.getAttribute("href")+"&"):a.setAttribute("href",a.getAttribute("href")+"?"),a.setAttribute("href",a.getAttribute("href")+"ref=oswaldlabs.com&utm_source=oswald_labs&utm_medium=website&utm_campaign=external_link&utm_content=oswaldlabs.com"))}}setTimeout(function(){var e=document.querySelector(".subnav-menu nav, .subnav nav");e&&!e.querySelector(".active")&&e.querySelector(".subactive")&&e.querySelectorAll(".subactive")[e.querySelectorAll(".subactive").length-1].classList.add("active")},1);var i=document.querySelector(".agastya-pricing-selector"),c=document.querySelector(".agastya-calculated-price"),l=document.querySelector(".btn-request"),u={eur:"€",usd:"$",inr:"₹"},s={eur:{"100k":99,"250k":249,"500k":499,"1m":749,"5m":999,"10m":"custom"},usd:{"100k":119,"250k":289,"500k":579,"1m":869,"5m":1159,"10m":"custom"},inr:{"100k":7899,"250k":18999,"500k":38999,"1m":58999,"5m":78999,"10m":"custom"}},d=function(){c&&("custom"===s[m][i.value]?(document.querySelector(".agastya-no-custom").style.display="none",document.querySelector(".agastya-has-custom").style.display="inline-block"):(document.querySelector(".agastya-no-custom").style.display="inline-block",document.querySelector(".agastya-has-custom").style.display="none",c.innerHTML=s[m][i.value].toLocaleString())),l&&l.setAttribute("href","/platform/agastya/register/?pageviews="+i.value+"&currency="+m)},m="eur",f=document.querySelector(".agastya-currency"),y=document.querySelectorAll("input[name='agastya-currency-selector']");if(y.length)for(var p=function(e){y[e].addEventListener("change",function(){m=y[e].value,f.innerHTML=u[y[e].value],d()})},h=0;h<y.length;h++)p(h);i&&i.addEventListener("change",function(){d()});var g=document.querySelectorAll(".microlink");g&&g.length&&loadJS("https://cdn.jsdelivr.net/npm/@microlink/vanilla@latest/umd/microlink.min.js",function(){microlink(".microlink",{video:!0})});var v=document.querySelector(".contribute-amount"),b=document.querySelector(".contribute-form");v&&b&&b.addEventListener("submit",function(e){loadJS("https://checkout.stripe.com/checkout.js",function(){var e=StripeCheckout.configure({key:"pk_live_2khUYvJReOob9xJ2QG4l1UoQ",image:"https://stripe.com/img/documentation/checkout/marketplace.png",locale:"auto",token:function(){alert("Thank you for your contribution!")}});e.open({name:"Research Fund",description:"Oswald Labs",currency:"eur",amount:100*v.value}),window.addEventListener("popstate",function(){e.close()})}),e.preventDefault()}),document.querySelector(".calendly-button")&&loadJS("https://assets.calendly.com/assets/external/widget.js");var S=document.querySelector(".ip-address-fill");if(S&&fetch("https://ipinfo.io/json?token=07089fada04d89").then(function(e){return e.json()}).then(function(t){t.ip&&(S.value=t.ip),["city","country","org","region","postal","loc"].forEach(function(e){t[e]&&document.querySelector(".".concat(e,"-fill"))&&(document.querySelector(".".concat(e,"-fill")).value=t[e])})}),"URLSearchParams"in window){var w=new URLSearchParams(window.location.search),L=!0,q=!1,A=void 0;try{for(var k,T=w.keys()[Symbol.iterator]();!(L=(k=T.next()).done);L=!0){var _=k.value;document.body.classList.add("has-param-".concat(_))}}catch(e){q=!0,A=e}finally{try{L||null==T.return||T.return()}finally{if(q)throw A}}var E=document.querySelector(".department-select");if(E){var x=new URLSearchParams(window.location.search).get("department");x&&(E.value=x)}var O=document.querySelector(".agastya-pricing-prefill"),P=document.querySelector(".agastya-currency-prefill");if(O){var H=new URLSearchParams(window.location.search).get("pageviews");H&&(O.value=H)}if(P){var j=new URLSearchParams(window.location.search).get("currency");j&&(P.value=j)}}var C=document.querySelector(".agastya-url-prefill");C&&(C.value=location.href);var M=document.querySelectorAll(".prefill-data-events"),R=document.querySelectorAll(".prefill-data-events-min");M.length&&request("https://platform-beta.oswaldlabs.com/v1/public/open-data",void 0,function(o){if("object"===_typeof(o)&&o.value){o.value=parseInt(o.value||0);var r,a=new Date,e=new Date(a.getFullYear(),a.getMonth(),1);r=o.value/((a.getTime()-e.getTime())/6e4);for(var t=0;t<M.length;t++)M[t].innerHTML=o.value.toLocaleString().toString()+"+";for(var n=0;n<R.length;n++)R[n].innerHTML=Math.ceil(r).toLocaleString().toString();window.countInterval||(window.countInterval=setInterval(function(){for(var e=document.querySelectorAll(".prefill-data-events"),t=Math.ceil(o.value+((new Date).getTime()-a.getTime())/6e4*r),n=0;n<e.length;n++)e[n].innerHTML=t.toLocaleString().toString()+"+"},1e3))}})}J&&J.addEventListener("click",function(){document.querySelector(".navbar-collapse").classList.toggle("show")}),document.body.addEventListener("click",function(e){for(var t=document.querySelectorAll("[data-toggle='dropdown']"),n=0;n<t.length;n++)if(document.querySelector('[aria-labelledby="'.concat(t[n].getAttribute("id"),'"]')).classList.remove("show"),getComposedPath(e).includes(t[n]))return document.querySelector('[aria-labelledby="'.concat(t[n].getAttribute("id"),'"]')).classList.add("show"),e.preventDefault(),!1}),o();var e=e||window.Barba;if(e){var t=e.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.fadeOut()]).then(this.fadeIn.bind(this))},fadeOut:function(){return document.body.classList.add("fade-out"),new Promise(function(e){window.scrollTo(0,0),e()})},fadeIn:function(){document.body.classList.remove("fade-out"),this.newContainer.classList.toggle("fade-in"),this.done()}});e.Pjax.getTransition=function(){return t},e.Pjax.start(),e.Dispatcher.on("newPageReady",function(e,t,n){o(n)})}});