"use strict";var loadJS=function(e,t,a){var n,o=window,r=o.document.getElementsByTagName("script")[0],c=o.document.createElement("script");return"boolean"==typeof t&&(n=a,a=t,t=n),c.src=e,c.async=!a,r.parentNode.insertBefore(c,r),t&&"function"==typeof t&&(c.onload=t),c},loadCss=function(e,t){var a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("href",e),a.onload=function(){t&&"function"==typeof t&&t()},a.onreadystatechange=function(){var e=a.readyState;"loaded"!==e&&"complete"!==e||t&&"function"==typeof t&&t()},(document.head||document.documentElement||document.body).appendChild(a)};function ready(e){"loading"!==document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"loading"!==document.readyState&&e()})}var agastyaTrackLink=function(e){var t=e.target||e.toElement||e.srcElement;t&&window.agastya&&"function"==typeof window.agastya.secureTrack&&window.agastya.secureTrack({className:t.className,href:t.href,innerText:t.innerText})};ready(function(){function n(e){if(e&&e.querySelector(".page-meta .page-slug")){var t=!1;document.body.className.includes("hello-bar--has-moved")&&(t=!0),document.body.className="page-"+e.querySelector(".page-meta .page-slug").innerHTML+(t?" hello-bar--has-moved":"")}var a=function(e){if(e&&void 0!==e.toLowerCase)return e.toLowerCase().replace(/\//g,"")};loadCss("https://unpkg.com/hello-bar@0.4.0/build/index.css",function(){loadJS("https://unpkg.com/hello-bar@0.4.0/build/index.js",function(){if(window.HelloBar&&window.HelloBar.default&&!document.querySelector(".hello-bar"))new window.HelloBar.default({text:"What do you think of our new website? <a href='/contact/?department=Feedback'>Give us feedback</a>.",background:"#231463",move:"header"})})}),document.querySelectorAll("a").forEach(function(e){if(e.classList.remove("active"),e.classList.remove("subactive"),e.removeEventListener("click",agastyaTrackLink),a(e.getAttribute("href"))===a(location.pathname)?e.classList.add("active"):"/"!==e.getAttribute("href")&&a(location.pathname).includes(a(e.getAttribute("href")))&&e.classList.add("subactive"),location.hostname!==e.hostname){if(e.addEventListener("click",agastyaTrackLink),e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer"),!e.getAttribute("href"))return;e.getAttribute("href").includes("mailto:")||e.getAttribute("href").includes("tel:")||(e.classList.add("has-external-link"),e.getAttribute("href").includes("?")?e.setAttribute("href",e.getAttribute("href")+"&"):e.setAttribute("href",e.getAttribute("href")+"?"),e.setAttribute("href",e.getAttribute("href")+"utm_source=oswald_labs&utm_medium=website&utm_campaign=external_link&utm_content=oswaldlabs.com"))}});var n=document.querySelector(".subnav-menu nav, .subnav nav");n&&!n.querySelector(".active")&&n.querySelector(".subactive")&&(n.querySelectorAll(".subactive")[n.querySelectorAll(".subactive").length-1].classList.add("active"),n.querySelectorAll(".subactive")[n.querySelectorAll(".subactive").length-1].classList.remove("subactive"));var o=document.querySelector(".agastya-pricing-selector"),r=document.querySelector(".agastya-calculated-price"),c=document.querySelector(".btn-request"),i={"100k":99,"250k":249,"500k":499,"1m":749,"5m":999,"10m":"custom"};o&&o.addEventListener("change",function(){r&&("custom"===i[o.value]?(document.querySelector(".agastya-no-custom").style.display="none",document.querySelector(".agastya-has-custom").style.display="inline-block"):(document.querySelector(".agastya-no-custom").style.display="inline-block",document.querySelector(".agastya-has-custom").style.display="none",r.innerHTML=i[o.value])),c&&c.setAttribute("href","/platform/agastya/register/?pageviews="+o.value)});var u=document.querySelectorAll(".microlink");u&&u.length&&loadJS("https://cdn.jsdelivr.net/npm/@microlink/vanilla@latest/umd/microlink.min.js",function(){microlink(".microlink",{video:!0})});var s=document.querySelector(".contribute-amount"),l=document.querySelector(".contribute-form");s&&l&&l.addEventListener("submit",function(e){loadJS("https://checkout.stripe.com/checkout.js",function(){var e=StripeCheckout.configure({key:"pk_live_2khUYvJReOob9xJ2QG4l1UoQ",image:"https://stripe.com/img/documentation/checkout/marketplace.png",locale:"auto",token:function(){alert("Thank you for your contribution!")}});e.open({name:"Research Fund",description:"Oswald Labs",currency:"eur",amount:100*s.value}),window.addEventListener("popstate",function(){e.close()})}),e.preventDefault()}),document.querySelector(".calendly-button")&&loadJS("https://assets.calendly.com/assets/external/widget.js");var d=document.querySelector(".ip-address-fill");d&&fetch("https://ipinfo.io/json").then(function(e){return e.json()}).then(function(t){t.ip&&(d.value=t.ip),["city","country","org","region","postal","loc"].forEach(function(e){t[e]&&document.querySelector(".".concat(e,"-fill"))&&(document.querySelector(".".concat(e,"-fill")).value=t[e])})});var m=document.querySelector(".department-select");if(m){var f=new URLSearchParams(window.location.search).get("department");f&&(m.value=f)}var y=document.querySelector(".agastya-pricing-prefill");if(y){var h=new URLSearchParams(window.location.search).get("pageviews");h&&(y.value=h)}}n();var e=e||window.Barba;if(e){var t=e.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.fadeOut()]).then(this.fadeIn.bind(this))},fadeOut:function(){return document.body.classList.add("fade-out"),new Promise(function(e){window.scrollTo(0,0),e()})},fadeIn:function(){document.body.classList.remove("fade-out"),this.newContainer.classList.toggle("fade-in"),this.done()}});e.Pjax.getTransition=function(){return t},e.Pjax.start(),e.Dispatcher.on("newPageReady",function(e,t,a){n(a)})}});