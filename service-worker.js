"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/mr-peen-dress-up-game/index.html","14b24aa6c6932ded0441ec81dd3a908f"],["/mr-peen-dress-up-game/static/css/main.2bbb4b87.css","71842d0e4e1b52fc87f09770dae58a6e"],["/mr-peen-dress-up-game/static/js/main.830c6db2.js","01d2a3ec958a288d601642b00cee611e"],["/mr-peen-dress-up-game/static/media/clouds.d38e168d.png","d38e168d0e49430d2d414d7d91602dd4"],["/mr-peen-dress-up-game/static/media/clouds.ddc23917.png","ddc2391743fb0b7da29f04eafe8812d7"],["/mr-peen-dress-up-game/static/media/galaxy.328b1db8.jpg","328b1db8db0ed468d24bb593ebe6c6e6"],["/mr-peen-dress-up-game/static/media/galaxy.6cd0a994.jpg","6cd0a994b4d46dbfffaa2050fe646bb6"],["/mr-peen-dress-up-game/static/media/galaxy2.028c272b.jpg","028c272bef7a38f095ee770228672d14"],["/mr-peen-dress-up-game/static/media/galaxy3.355b39cc.jpg","355b39cc90d2156607e9992131cdc138"],["/mr-peen-dress-up-game/static/media/galaxy3.cfcad8ad.jpg","cfcad8ad5d266475495fd36ca1c88365"],["/mr-peen-dress-up-game/static/media/heart-frame.2e3f900a.jpg","2e3f900a613f6f22e0091812382ffe4e"],["/mr-peen-dress-up-game/static/media/room.f2a49045.png","f2a49045cbfd324503368c0fc67a278d"],["/mr-peen-dress-up-game/static/media/sharks.e661a6d7.jpg","e661a6d72188ac1016247c1518e3ad42"],["/mr-peen-dress-up-game/static/media/sharks.fd758fe9.jpg","fd758fe959d442485a0f13deda4f7be3"],["/mr-peen-dress-up-game/static/media/sparkle.53834c54.png","53834c54a90a78fec9409b54882280e0"],["/mr-peen-dress-up-game/static/media/sparkle.e06a29fc.png","e06a29fc7419efe8c5722acd5287a3f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/mr-peen-dress-up-game/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});