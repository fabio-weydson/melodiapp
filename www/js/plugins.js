/*! 
 * Roots v 2.0.0
 * Follow me @adanarchila at Codecanyon.net
 * URL: http://codecanyon.net/item/roots-phonegapcordova-multipurpose-hybrid-app/9525999
 * Don't forget to rate Roots if you like it! :)
 */



/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});


/*!
 * Angular imagesLoaded Module
 * https://github.com/homerjam/angular-images-loaded
 */
 'use strict';
angular.module('angular-jwplayer', []).directive('jwplayer', ['$compile', function ($compile) {
    return {
        restrict: 'EC',
        scope: {
            playerId: '@',
            setupVars: '=setup'

        },
        link: function (scope, element, attrs) {
            var id = scope.playerId || 'random_player_' + Math.floor((Math.random() * 999999999) + 1),
                getTemplate = function (playerId) {
                return '<div id="' + playerId + '"></div>';
            };

            element.html(getTemplate(id));
            $compile(element.contents())(scope);
            jwplayer(id).setup(scope.setupVars);
        }
    };
}]);
angular.module('angular-images-loaded', []).directive('imagesLoaded', ['$timeout',
    function($timeout) {
        'use strict';
        return {
            restrict: 'AC',
            link: function(scope, element, attrs) {
                var events = scope.$eval(attrs.imagesLoaded),
                    className = attrs.imagesLoadedClass || 'images-loaded',
                    classUsed = element.hasClass(className);

                var init = function() {
                    $timeout(function() {
                        scope.$imagesLoaded = false;

                        scope.$emit('imagesLoaded:started', {
                            scope: scope,
                            element: element
                        });

                        if (classUsed) {
                            element.addClass(className);
                        }

                        var imgLoad = imagesLoaded(element[0], function() {
                            scope.$imagesLoaded = true;

                            scope.$emit('imagesLoaded:loaded', {
                                scope: scope,
                                element: element
                            });

                            element.removeClass(className + ' images-loaded: ' + attrs.imagesLoaded + ';');

                            if (!scope.$$phase) {
                                scope.$apply();
                            }
                        });

                        if (typeof(events) !== undefined) {
                            angular.forEach(events, function(fn, eventName) {
                                imgLoad.on(eventName, fn);
                            });
                        }
                    });
                };

                if (attrs.imagesLoadedWatch) {
                    scope.$watch(attrs.imagesLoadedWatch, function(n) {
                        init();
                    });

                } else {
                    init();
                }
            }
        };
    }
]);


/*! imgcache.js
   Copyright 2012-2014 Christophe BENOIT

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/*jslint browser:true*/
/*global console,LocalFileSystem,device,FileTransfer,define,module*/

var ImgCache = {
        version: '0.7.5',
        // options to override before using the library (but after loading this script!)
        options: {
            debug: false,							/* call the log method ? */
            localCacheFolder: 'imgcache',			/* name of the cache folder */
            useDataURI: false,						/* use src="data:.."? otherwise will use src="filesystem:.." */
            chromeQuota: 10 * 1024 * 1024,			/* allocated cache space : here 10MB */
            usePersistentCache: true,				/* false = use temporary cache storage */
            cacheClearSize: 0,						/* size in MB that triggers cache clear on init, 0 to disable */
            headers: {},							/* HTTP headers for the download requests -- e.g: headers: { 'Accept': 'application/jpg' } */
            skipURIencoding: false					/* enable if URIs are already encoded (skips call to sanitizeURI) */
        },
        overridables: {
            hash: function (s) {
                /* tiny-sha1 r4 (11/2011) - MIT License - http://code.google.com/p/tiny-sha1/ */
                function U(a,b,c){while(0<c--)a.push(b)}function L(a,b){return(a<<b)|(a>>>(32-b))}function P(a,b,c){return a^b^c}function A(a,b){var c=(b&0xFFFF)+(a&0xFFFF),d=(b>>>16)+(a>>>16)+(c>>>16);return((d&0xFFFF)<<16)|(c&0xFFFF)}var B="0123456789abcdef";return(function(a){var c=[],d=a.length*4,e;for(var i=0;i<d;i++){e=a[i>>2]>>((3-(i%4))*8);c.push(B.charAt((e>>4)&0xF)+B.charAt(e&0xF))}return c.join('')}((function(a,b){var c,d,e,f,g,h=a.length,v=0x67452301,w=0xefcdab89,x=0x98badcfe,y=0x10325476,z=0xc3d2e1f0,M=[];U(M,0x5a827999,20);U(M,0x6ed9eba1,20);U(M,0x8f1bbcdc,20);U(M,0xca62c1d6,20);a[b>>5]|=0x80<<(24-(b%32));a[(((b+65)>>9)<<4)+15]=b;for(var i=0;i<h;i+=16){c=v;d=w;e=x;f=y;g=z;for(var j=0,O=[];j<80;j++){O[j]=j<16?a[j+i]:L(O[j-3]^O[j-8]^O[j-14]^O[j-16],1);var k=(function(a,b,c,d,e){var f=(e&0xFFFF)+(a&0xFFFF)+(b&0xFFFF)+(c&0xFFFF)+(d&0xFFFF),g=(e>>>16)+(a>>>16)+(b>>>16)+(c>>>16)+(d>>>16)+(f>>>16);return((g&0xFFFF)<<16)|(f&0xFFFF)})(j<20?(function(t,a,b){return(t&a)^(~t&b)}(d,e,f)):j<40?P(d,e,f):j<60?(function(t,a,b){return(t&a)^(t&b)^(a&b)}(d,e,f)):P(d,e,f),g,M[j],O[j],L(c,5));g=f;f=e;e=L(d,30);d=c;c=k}v=A(v,c);w=A(w,d);x=A(x,e);y=A(y,f);z=A(z,g)}return[v,w,x,y,z]}((function(t){var a=[],b=255,c=t.length*8;for(var i=0;i<c;i+=8){a[i>>5]|=(t.charCodeAt(i/8)&b)<<(24-(i%32))}return a}(s)).slice(),s.length*8))));
            },
            log: function (str, level) {
                    'use strict';
                    if (ImgCache.options.debug) {
                        if (level === LOG_LEVEL_INFO) { str = 'INFO: ' + str; }
                        if (level === LOG_LEVEL_WARNING) { str = 'WARN: ' + str; }
                        if (level === LOG_LEVEL_ERROR) { str = 'ERROR: ' + str; }
                        console.log(str);
                    }
            }
        },
        jQuery: (window.jQuery || window.Zepto) ? true : false,		/* using jQuery if it's available otherwise the DOM API */
        jQueryLite: (typeof window.angular !== 'undefined' && window.angular.element) ? true : false,    /* is AngularJS jQueryLite available */
        ready: false,
        attributes: {}
    },
    LOG_LEVEL_INFO = 1,
    LOG_LEVEL_WARNING = 2,
    LOG_LEVEL_ERROR = 3;

(function ($) {

    'use strict';

    /** Helpers *****************************************************************/
    var Helpers = {};

    // make sure the url does not contain funny characters like spaces that might make the download fail
    Helpers.sanitizeURI = function (uri) {
        if (ImgCache.options.skipURIencoding) {
            return uri;
        } else {
            var encodedURI = encodeURI(uri);
            /*
            TODO: The following bit of code will have to be checked first (#30)
            if (Helpers.isCordova()) {
                return encodedURI.replace(/%/g, '%25');
            }
            */
            return encodedURI;
        }
    };

    // with a little help from http://code.google.com/p/js-uri/
    Helpers.URI = function (str) {
        if (!str) { str = ''; }
        // Based on the regex in RFC2396 Appendix B.
        var parser = /^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/,
            result = str.match(parser);
        this.scheme    = result[1] || null;
        this.authority = result[2] || null;
        this.path      = result[3] || null;
        this.query     = result[4] || null;
        this.fragment  = result[5] || null;
    };
    // returns lower cased filename from full URI
    Helpers.URIGetFileName = function (fullpath) {
        if (!fullpath) {
            return;
        }
        //TODO: there must be a better way here.. (url encoded strings fail)
        var idx = fullpath.lastIndexOf('/');
        if (!idx) {
            return;
        }
        return fullpath.substr(idx + 1).toLowerCase();
    };

    // returns lower cased path from full URI
    Helpers.URIGetPath = function (str) {
        if (!str) {
            return;
        }
        var uri = Helpers.URI(str);
        return uri.path.toLowerCase();
    };

    // returns extension from filename (without leading '.')
    Helpers.FileGetExtension = function (filename) {
        if (!filename) {
            return '';
        }
        filename = filename.split('?')[0];
        var ext = filename.split('.').pop();
        // make sure it's a realistic file extension - for images no more than 4 characters long (.jpeg)
        if (!ext || ext.length > 4) {
            return '';
        }
        return ext;
    };

    Helpers.isCordova = function () {
        return (typeof cordova !== 'undefined' || typeof phonegap !== 'undefined');
    };

    Helpers.isCordovaAndroid = function () {
        return (Helpers.isCordova() && device && device.platform && device.platform.toLowerCase().indexOf('android') >= 0);
    };

    // special case for #47
    Helpers.isCordovaAndroidOlderThan4 = function () {
        return (Helpers.isCordovaAndroid() && device.version && (device.version.indexOf('2.') === 0 || device.version.indexOf('3.') === 0));
    };

    // Fix for #42 (Cordova versions < 4.0)
    Helpers.EntryToURL = function (entry) {
        if (Helpers.isCordovaAndroidOlderThan4() && typeof entry.toNativeURL === 'function') {
            return entry.toNativeURL();
        } else {
            return entry.toURL();
        }
    };

    // Returns a URL that can be used to locate a file
    Helpers.EntryGetURL = function (entry) {
        // toURL for html5, toURI for cordova 1.x
        return (typeof entry.toURL === 'function' ? Helpers.EntryToURL(entry) : entry.toURI());
    };

    // Returns the full absolute path from the root to the FileEntry
    Helpers.EntryGetPath = function (entry) {
        if (Helpers.isCordova()) {
            // From Cordova 3.3 onward toURL() seems to be required instead of fullPath (#38)
            return (typeof entry.toURL === 'function' ? Helpers.EntryToURL(entry) : entry.fullPath);
        } else {
            return entry.fullPath;
        }
    };

    Helpers.getCordovaStorageType = function (isPersistent) {
        // From Cordova 3.1 onward those constants have moved to the window object (#38)
        if (typeof LocalFileSystem !== 'undefined') {
            if (isPersistent && LocalFileSystem.hasOwnProperty('PERSISTENT')) {
                return LocalFileSystem.PERSISTENT;
            }
            if (!isPersistent && LocalFileSystem.hasOwnProperty('TEMPORARY')) {
                return LocalFileSystem.TEMPORARY;
            }
        }
        return (isPersistent ? window.PERSISTENT : window.TEMPORARY);
    };

    /****************************************************************************/

    /** DomHelpers **************************************************************/
    var DomHelpers = {};

    DomHelpers.trigger = function (DomElement, eventName) {
        if (ImgCache.jQuery) {
            $(DomElement).trigger(eventName);
        } else {
            /* CustomEvent polyfill */
            if (!window.CustomEvent) {
                // CustomEvent for browsers which don't natively support the Constructor method
                window.CustomEvent = function CustomEvent(type, params) {
                    var event;
                    params = params || {bubbles: false, cancelable: false, detail: undefined};
                    try {
                        event = document.createEvent('CustomEvent');
                        event.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
                    } catch (error) {
                        // for browsers that don't support CustomEvent at all, we use a regular event instead
                        event = document.createEvent('Event');
                        event.initEvent(type, params.bubbles, params.cancelable);
                        event.detail = params.detail;
                    }
                    return event;
                };
            }
            DomElement.dispatchEvent(new CustomEvent(eventName));
        }
    };

    DomHelpers.removeAttribute = function (element, attrName) {
        if (ImgCache.jQuery || ImgCache.jQueryLite) {
            element.removeAttr(attrName);
        } else {
            element.removeAttribute(attrName);
        }
    };
    DomHelpers.setAttribute = function (element, attrName, value) {
        if (ImgCache.jQuery || ImgCache.jQueryLite) {
            element.attr(attrName, value);
        } else {
            element.setAttribute(attrName, value);
        }
    };
    DomHelpers.getAttribute = function (element, attrName) {
        if (ImgCache.jQuery || ImgCache.jQueryLite) {
            return element.attr(attrName);
        } else {
            return element.getAttribute(attrName);
        }
    };
    DomHelpers.getBackgroundImage = function (element) {
        if (ImgCache.jQuery || ImgCache.jQueryLite) {
            return element.css('background-image');
        } else {
            var style = window.getComputedStyle(element, null);
            if (!style) {
                return;
            }
            return style.backgroundImage;
        }
    };
    DomHelpers.setBackgroundImage = function (element, styleValue) {
        if (ImgCache.jQuery || ImgCache.jQueryLite) {
            element.css('background-image', styleValue);
        } else {
            element.style.backgroundImage = styleValue;
        }
    };

    /****************************************************************************/

    /** Private *****************************************************************/
    var Private = { attributes: {} };

    Private.isImgCacheLoaded = function () {
        if (!ImgCache.attributes.filesystem || !ImgCache.attributes.dirEntry) {
            ImgCache.overridables.log('ImgCache not loaded yet! - Have you called ImgCache.init() first?', LOG_LEVEL_WARNING);
            return false;
        }
        return true;
    };

    Private.attributes.hasLocalStorage = false;
    Private.hasLocalStorage = function () {
        // if already tested, avoid doing the check again
        if (Private.attributes.hasLocalStorage) {
            return Private.attributes.hasLocalStorage;
        }
        try {
            var mod = ImgCache.overridables.hash('imgcache_test');
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            Private.attributes.hasLocalStorage = true;
            return true;

        } catch (e) {
            // this is an info, not an error
            ImgCache.overridables.log('Could not write to local storage: ' + e.message, LOG_LEVEL_INFO);
            return false;
        }
    };

    Private.setCurrentSize = function (curSize) {
        ImgCache.overridables.log('current size: ' + curSize, LOG_LEVEL_INFO);
        if (Private.hasLocalStorage()){
            localStorage.setItem('imgcache:' + ImgCache.options.localCacheFolder, curSize);
        }
    };

    Private.getCachedFilePath = function (img_src) {
        return ImgCache.options.localCacheFolder + '/' + Private.getCachedFileName(img_src);
    };

    // used for FileTransfer.download only
    Private.getCachedFileFullPath = function (img_src) {
        var local_root = Helpers.EntryGetPath(ImgCache.attributes.dirEntry);
        return (local_root ? local_root + '/' : '/') + Private.getCachedFileName(img_src);
    };

    Private.getCachedFileName = function (img_src) {
        if (!img_src) {
            ImgCache.overridables.log('No source given to getCachedFileName', LOG_LEVEL_WARNING);
            return;
        }
        var hash = ImgCache.overridables.hash(img_src);
        var ext = Helpers.FileGetExtension(Helpers.URIGetFileName(img_src));
        return hash + (ext ? ('.' + ext) : '');
    };

    Private.setNewImgPath = function ($img, new_src, old_src) {
        DomHelpers.setAttribute($img, 'src', new_src);
        // store previous url in case we need to reload it
        DomHelpers.setAttribute($img, OLD_SRC_ATTR, old_src);
    };

    Private.createCacheDir = function (success_callback, error_callback) {
        if (!ImgCache.attributes.filesystem) {
            ImgCache.overridables.log('Filesystem instance was not initialised', LOG_LEVEL_ERROR);
            if (error_callback) { error_callback(); }
            return;
        }

        var _fail = function (error) {
            ImgCache.overridables.log('Failed to get/create local cache directory: ' + error.code, LOG_LEVEL_ERROR);
            if (error_callback) { error_callback(); }
        };
        var _getDirSuccess = function (dirEntry) {
            ImgCache.attributes.dirEntry = dirEntry;
            ImgCache.overridables.log('Local cache folder opened: ' + Helpers.EntryGetPath(dirEntry), LOG_LEVEL_INFO);

            //Put .nomedia file in cache directory so Android doesn't index it.
            if (Helpers.isCordovaAndroid()) {

                var _androidNoMediaFileCreated = function () {
                    ImgCache.overridables.log('.nomedia file created.', LOG_LEVEL_INFO);
                    if (success_callback) { success_callback(); }
                };

                dirEntry.getFile('.nomedia', {create: true, exclusive: false}, _androidNoMediaFileCreated, _fail);
            } else {
                // #73 - iOS: the directory should not be backed up in iCloud
                if (dirEntry.setMetadata) {
                    dirEntry.setMetadata(function () {
                            /* success*/
                            ImgCache.overridables.log('com.apple.MobileBackup metadata set', LOG_LEVEL_INFO);
                        }, function () {
                            /* failure */
                            ImgCache.overridables.log('com.apple.MobileBackup metadata could not be set', LOG_LEVEL_WARNING);
                        }, { 'com.apple.MobileBackup': 1 }
                        // 1=NO backup oddly enough..
                    );
                }

                if (success_callback) { success_callback(); }
            }

            ImgCache.ready = true;
            DomHelpers.trigger(document, IMGCACHE_READY_TRIGGERED_EVENT);
        };
        ImgCache.attributes.filesystem.root.getDirectory(ImgCache.options.localCacheFolder, {create: true, exclusive: false}, _getDirSuccess, _fail);
    };

    // This is a wrapper for phonegap's FileTransfer object in order to implement the same feature
    // in Chrome (and possibly extra browsers in the future)
    Private.FileTransferWrapper = function (filesystem) {
        if (Helpers.isCordova()) {
            // PHONEGAP
            this.fileTransfer = new FileTransfer();
        }
        this.filesystem = filesystem;	// only useful for CHROME
    };
    Private.FileTransferWrapper.prototype.download = function (uri, localPath, success_callback, error_callback, on_progress) {

        var headers = ImgCache.options.headers || {};
        var isOnProgressAvailable = (typeof on_progress === 'function');

        if (this.fileTransfer) {
            if (isOnProgressAvailable) {
                this.fileTransfer.onprogress = on_progress;
            }
            return this.fileTransfer.download(uri, localPath, success_callback, error_callback, false, { 'headers': headers });
        }

        var filesystem = this.filesystem;

        // CHROME - browsers
        var _fail = function (str, level, error_callback) {
            ImgCache.overridables.log(str, level);
            // mock up FileTransferError, so at least caller knows there was a problem.
            // Normally, the error.code in the callback is a FileWriter error, we return 0 if the error was an XHR error
            if (error_callback) {
                error_callback({code: 0, source: uri, target: localPath});
            }
        };
        var xhr = new XMLHttpRequest();
        xhr.open('GET', uri, true);
        if (isOnProgressAvailable) {
            xhr.onprogress = on_progress;
        }
        xhr.responseType = 'blob';
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.onload = function () {
            if (xhr.response && (xhr.status === 200 || xhr.status === 0)) {
                filesystem.root.getFile(localPath, { create:true }, function (fileEntry) {
                    fileEntry.createWriter(function (writer) {
                        writer.onerror = error_callback;
                        writer.onwriteend = function () { success_callback(fileEntry);  };
                        writer.write(xhr.response, error_callback);
                    }, error_callback);
                }, error_callback);
            } else {
                _fail('Image ' + uri + ' could not be downloaded - status: ' + xhr.status, 3, error_callback);
            }
        };
        xhr.onerror = function () {
            _fail('XHR error - Image ' + uri + ' could not be downloaded - status: ' + xhr.status, 3, error_callback);
        };
        xhr.send();
    };

    Private.getBackgroundImageURL = function ($div) {
        var backgroundImageProperty = DomHelpers.getBackgroundImage($div);
        if (!backgroundImageProperty) {
            return;
        }
        var regexp = /\((.+)\)/;
        var img_src = regexp.exec(backgroundImageProperty)[1];
        return img_src;
    };

    Private.loadCachedFile = function ($element, img_src, set_path_callback, success_callback, error_callback) {
        if (!Private.isImgCacheLoaded()) {
            return;
        }

        if (!$element) {
            return;
        }

        var filename = Helpers.URIGetFileName(img_src);

        var _gotFileEntry = function (entry) {
            if (ImgCache.options.useDataURI) {
                var _win = function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (e) {
                        // prefix with : 'data:' + mime_type + ';base64;' + .. ?
                        /* var mime_type = '';
						if (filename && filename.length > 4) {
							//TODO: of course relying on extension is wrong.. but we trust our data here
							var ext = filename.substr(filename.length - 4).toLowerCase();
							if (ext == '.jpg' || ext == 'jpeg') {
								mime_type = 'image/jpeg';
							} else if (ext == '.png') {
								mime_type = 'image/png';
							} else if (ext == '.gif') {
								mime_type = 'image/gif';
							}
						} */
                        var base64content = e.target.result;
                        if (!base64content) {
                            ImgCache.overridables.log('File in cache ' + filename + ' is empty', LOG_LEVEL_WARNING);
                            if (error_callback) { error_callback($element); }
                            return;
                        }
                        set_path_callback($element, base64content, img_src);
                        ImgCache.overridables.log('File ' + filename + ' loaded from cache', LOG_LEVEL_INFO);
                        if (success_callback) { success_callback($element); }
                    };
                    reader.readAsDataURL(file);
                };
                var _fail = function (error) {
                    ImgCache.overridables.log('Failed to read file ' + error.code, LOG_LEVEL_ERROR);
                    if (error_callback) { error_callback($element); }
                };

                entry.file(_win, _fail);
            } else {
                // using src="filesystem:" kind of url
                var new_url = Helpers.EntryGetURL(entry);
                set_path_callback($element, new_url, img_src);
                ImgCache.overridables.log('File ' + filename + ' loaded from cache', LOG_LEVEL_INFO);
                if (success_callback) { success_callback($element); }
            }
        };
        // if file does not exist in cache, cache it now!
        var _fail = function () {
            ImgCache.overridables.log('File ' + filename + ' not in cache', LOG_LEVEL_INFO);
            if (error_callback) { error_callback($element); }
        };
        ImgCache.attributes.filesystem.root.getFile(Private.getCachedFilePath(img_src), {create: false}, _gotFileEntry, _fail);
    };

    /****************************************************************************/


	var OLD_SRC_ATTR = 'data-old-src',
        OLD_BACKGROUND_ATTR = 'data-old-background',
        IMGCACHE_READY_TRIGGERED_EVENT = 'ImgCacheReady';

	ImgCache.init = function (success_callback, error_callback) {
		ImgCache.attributes.init_callback = success_callback;

        var _checkSize = function (callback) {
            if (ImgCache.options.cacheClearSize > 0) {
                var curSize = ImgCache.getCurrentSize();
                if (curSize > (ImgCache.options.cacheClearSize * 1024 * 1024)) {
                    ImgCache.clearCache(callback, callback);
                } else {
                    if (callback) { callback(); }
                }
            } else {
                if (callback) { callback(); }
            }
        };
        var _gotFS = function (filesystem) {
			ImgCache.overridables.log('LocalFileSystem opened', LOG_LEVEL_INFO);

			// store filesystem handle
			ImgCache.attributes.filesystem = filesystem;

			Private.createCacheDir(function () {
				_checkSize(ImgCache.attributes.init_callback);
			}, error_callback);
		};
		var _fail = function (error) {
			ImgCache.overridables.log('Failed to initialise LocalFileSystem ' + error.code, LOG_LEVEL_ERROR);
			if (error_callback) { error_callback(); }
		};
		if (Helpers.isCordova()) {
			// PHONEGAP
            window.requestFileSystem(Helpers.getCordovaStorageType(ImgCache.options.usePersistentCache), 0, _gotFS, _fail);
		} else {
			//CHROME
			window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
			window.storageInfo = window.storageInfo || (ImgCache.options.usePersistentCache ? navigator.webkitPersistentStorage : navigator.webkitTemporaryStorage);
			if (!window.storageInfo) {
				ImgCache.overridables.log('Your browser does not support the html5 File API', LOG_LEVEL_WARNING);
				if (error_callback) { error_callback(); }
				return;
			}
			// request space for storage
			var quota_size = ImgCache.options.chromeQuota;
			window.storageInfo.requestQuota(
				quota_size,
				function () {
					/* success*/
                    var persistence = (ImgCache.options.usePersistentCache ? window.storageInfo.PERSISTENT : window.storageInfo.TEMPORARY);
                    window.requestFileSystem(persistence, quota_size, _gotFS, _fail);
				},
				function (error) {
                    /* error*/
					ImgCache.overridables.log('Failed to request quota: ' + error.message, LOG_LEVEL_ERROR);
					if (error_callback) { error_callback(); }
				}
			);
		}
	};

	ImgCache.getCurrentSize = function () {
		if (Private.hasLocalStorage()) {
			var curSize = localStorage.getItem('imgcache:' + ImgCache.options.localCacheFolder);
			if (curSize === null) {
				return 0;
			}
			return parseInt(curSize, 10);
		} else {
			return 0;
		}
	};

	// this function will not check if the image is already cached or not => it will overwrite existing data
    // on_progress callback follows this spec: http://www.w3.org/TR/2014/REC-progress-events-20140211/ -- see #54
	ImgCache.cacheFile = function (img_src, success_callback, error_callback, on_progress) {

		if (!Private.isImgCacheLoaded() || !img_src) {
			return;
        }

		img_src = Helpers.sanitizeURI(img_src);

		var filePath = Private.getCachedFileFullPath(img_src);

		var fileTransfer = new Private.FileTransferWrapper(ImgCache.attributes.filesystem);
		fileTransfer.download(
			img_src,
			filePath,
			function (entry) {
				entry.getMetadata(function (metadata) {
					if (metadata && metadata.hasOwnProperty('size')) {
						ImgCache.overridables.log('Cached file size: ' + metadata.size, LOG_LEVEL_INFO);
						Private.setCurrentSize(ImgCache.getCurrentSize() + parseInt(metadata.size, 10));
					} else {
						ImgCache.overridables.log('No metadata size property available', LOG_LEVEL_INFO);
					}
				});
				ImgCache.overridables.log('Download complete: ' + Helpers.EntryGetPath(entry), LOG_LEVEL_INFO);

				// iOS: the file should not be backed up in iCloud
				// new from cordova 1.8 only
				if (entry.setMetadata) {
                    entry.setMetadata(
                        function () {
                        /* success*/
                            ImgCache.overridables.log('com.apple.MobileBackup metadata set', LOG_LEVEL_INFO);
                        },
                        function () {
                        /* failure */
                            ImgCache.overridables.log('com.apple.MobileBackup metadata could not be set', LOG_LEVEL_WARNING);
                        },
                        { 'com.apple.MobileBackup': 1 }
                        // 1=NO backup oddly enough..
                    );
				}

				if (success_callback) { success_callback(); }
			},
			function (error) {
				if (error.source) { ImgCache.overridables.log('Download error source: ' + error.source, LOG_LEVEL_ERROR); }
				if (error.target) { ImgCache.overridables.log('Download error target: ' + error.target, LOG_LEVEL_ERROR); }
				ImgCache.overridables.log('Download error code: ' + error.code, LOG_LEVEL_ERROR);
				if (error_callback) { error_callback(); }
			},
            on_progress
		);
	};

    // Returns the file already available in the cached
    // Reminder: this is an asynchronous method!
    // Answer to the question comes in response_callback as the second argument (first being the path)
    ImgCache.getCachedFile = function (img_src, response_callback) {
        // sanity check
        if (!Private.isImgCacheLoaded() || !response_callback) {
            return;
        }

        img_src = Helpers.sanitizeURI(img_src);

        var path = Private.getCachedFilePath(img_src);
        if (Helpers.isCordovaAndroid()) {
            // This hack is probably only used for older versions of Cordova
            if (path.indexOf('file://') === 0) {
                // issue #4 -- android cordova specific
                path = path.substr(7);
            }
        }

        // try to get the file entry: if it fails, there's no such file in the cache
        ImgCache.attributes.filesystem.root.getFile(
            path,
            { create: false },
            function (file_entry) { response_callback(img_src, file_entry); },
            function () { response_callback(img_src, null); }
        );
    };

	// Returns the local url of a file already available in the cache
	ImgCache.getCachedFileURL = function (img_src, success_callback, error_callback) {
        var _getURL = function (img_src, entry) {
            if (!entry) {
                if (error_callback) { error_callback(img_src); }
            } else {
                success_callback(img_src, Helpers.EntryGetURL(entry));
            }
        };

        ImgCache.getCachedFile(img_src, _getURL);
	};


    // checks if a copy of the file has already been cached
    // Reminder: this is an asynchronous method!
    // Answer to the question comes in response_callback as the second argument (first being the path)
    ImgCache.isCached = function (img_src, response_callback) {
        ImgCache.getCachedFile(img_src, function (src, file_entry) {
            response_callback(src, file_entry !== null);
        });
    };

	// $img: jQuery object of an <img/> element
	// Synchronous method
	ImgCache.useOnlineFile = function ($img) {

		if (!Private.isImgCacheLoaded() || !$img) {
			return;
        }

		var prev_src = DomHelpers.getAttribute($img, OLD_SRC_ATTR);
		if (prev_src) {
			DomHelpers.setAttribute($img, 'src', prev_src);
        }
		DomHelpers.removeAttribute($img, OLD_SRC_ATTR);
	};



	// $img: jQuery object of an <img/> element
	ImgCache.useCachedFile = function ($img, success_callback, error_callback) {

		if (!Private.isImgCacheLoaded()) {
			return;
        }

		Private.loadCachedFile($img, DomHelpers.getAttribute($img, 'src'), Private.setNewImgPath, success_callback, error_callback);
	};

	// When the source url is not the 'src' attribute of the given img element
	ImgCache.useCachedFileWithSource = function ($img, image_url, success_callback, error_callback) {

		if (!Private.isImgCacheLoaded()) {
			return;
        }

        var img_url = Helpers.sanitizeURI(image_url);

        Private.loadCachedFile($img, img_url, Private.setNewImgPath, success_callback, error_callback);
	};

	// clears the cache
	ImgCache.clearCache = function (success_callback, error_callback) {

		if (!Private.isImgCacheLoaded()) {
			return;
        }

		// delete cache dir completely
		ImgCache.attributes.dirEntry.removeRecursively(
			function () {
				ImgCache.overridables.log('Local cache cleared', LOG_LEVEL_INFO);
				Private.setCurrentSize(0);
				// recreate the cache dir now
				Private.createCacheDir(success_callback, error_callback);
			},
			function (error) {
				ImgCache.overridables.log('Failed to remove directory or its contents: ' + error.code, LOG_LEVEL_ERROR);
				if (error_callback) { error_callback(); }
			}
		);
	};

	ImgCache.removeFile = function (img_src, success_callback, error_callback) {

		img_src = Helpers.sanitizeURI(img_src);

		var filePath = Private.getCachedFilePath(img_src);
		var _fail = function (error) {
			ImgCache.overridables.log('Failed to remove file due to ' + error.code, LOG_LEVEL_ERROR);
			if (error_callback) { error_callback(); }
		};
		ImgCache.attributes.filesystem.root.getFile(filePath, { create: false }, function (fileEntry) {
			fileEntry.remove(
				function () {
					if (success_callback) { success_callback(); }
				},
				_fail
			);
		}, _fail);
	};

    ImgCache.cacheBackground = function ($div, success_callback, error_callback, on_progress) {

		if (!Private.isImgCacheLoaded()) {
			return;
        }

		var img_src = Private.getBackgroundImageURL($div);
		if (!img_src) {
			ImgCache.overridables.log('No background to cache', LOG_LEVEL_WARNING);
			if (error_callback) { error_callback(); }
			return;
		}

		ImgCache.overridables.log('Background image URL: ' + img_src, LOG_LEVEL_INFO);
		ImgCache.cacheFile(img_src, success_callback, error_callback, on_progress);
	};

	ImgCache.useCachedBackground = function ($div, success_callback, error_callback) {

		if (!Private.isImgCacheLoaded()) {
			return;
        }

		var img_src = Private.getBackgroundImageURL($div);
		if (!img_src) {
			ImgCache.overridables.log('No background to cache', LOG_LEVEL_WARNING);
			if (error_callback) { error_callback(); }
			return;
		}

		var _setBackgroundImagePath = function ($element, new_src, old_src) {
			DomHelpers.setBackgroundImage($element, 'url("' + new_src + '")');
			// store previous url in case we need to reload it
			DomHelpers.setAttribute($element, OLD_BACKGROUND_ATTR, old_src);
		};

		Private.loadCachedFile($div, img_src, _setBackgroundImagePath, success_callback, error_callback);
	};


	// $div: jQuery object of an element
	// Synchronous method
	// Method used to revert call to useCachedBackground
	ImgCache.useBackgroundOnlineFile = function ($div) {

		if (!$div) {
			return;
        }

		var prev_src = DomHelpers.getAttribute($div, OLD_BACKGROUND_ATTR);
		if (prev_src) {
			DomHelpers.setBackgroundImage($div, 'url("' + prev_src + '")');
        }
		DomHelpers.removeAttribute($div, OLD_BACKGROUND_ATTR);
	};

	// returns the URI of the local cache folder (filesystem:)
	// this function is more useful for the examples than for anything else..
	// Synchronous method
	ImgCache.getCacheFolderURI = function () {

		if (!Private.isImgCacheLoaded()) {
			return;
        }

		return Helpers.EntryGetURL(ImgCache.attributes.dirEntry);
	};


    /****************************************************************************/


    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define('imgcache', [], function () {
            return ImgCache;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = ImgCache;
    }
    else {
        window.ImgCache = ImgCache;
    }

})(window.jQuery || window.Zepto || function () { throw "jQuery is not available"; } );

/**
 * Angular Carousel - Mobile friendly touch carousel for AngularJS
 * @version v0.3.7 - 2014-11-11
 * @link http://revolunet.github.com/angular-carousel
 * @author Julien Bouquillon <julien@revolunet.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module("angular-carousel",["ngTouch","angular-carousel.shifty"]),angular.module("angular-carousel").directive("rnCarouselAutoSlide",["$timeout",function(a){return{restrict:"A",link:function(b,c,d){var e=Math.round(1e3*parseFloat(d.rnCarouselAutoSlide)),f=increment=!1,g=c.children().length;b.carouselExposedIndex||(b.carouselExposedIndex=0),stopAutoplay=function(){angular.isDefined(f)&&a.cancel(f),f=void 0},increment=function(){b.carouselExposedIndex=b.carouselExposedIndex<g-1?b.carouselExposedIndex+1:0},restartTimer=function(){stopAutoplay(),f=a(increment,e)},b.$watch("carouselIndex",function(){restartTimer()}),restartTimer(),d.rnCarouselPauseOnHover&&"false"!=d.rnCarouselPauseOnHover&&(c.on("mouseenter",stopAutoplay),c.on("mouseleave",restartTimer)),b.$on("$destroy",function(){stopAutoplay(),c.off("mouseenter",stopAutoplay),c.off("mouseleave",restartTimer)})}}}]),angular.module("angular-carousel").directive("rnCarouselIndicators",["$parse",function(a){return{restrict:"A",scope:{slides:"=",index:"=rnCarouselIndex"},templateUrl:"carousel-indicators.html",link:function(b,c,d){var e=a(d.rnCarouselIndex);b.goToSlide=function(a){e.assign(b.$parent.$parent,a)}}}}]),angular.module("angular-carousel").run(["$templateCache",function(a){a.put("carousel-indicators.html",'<div class="rn-carousel-indicator">\n<span ng-repeat="slide in slides" ng-class="{active: $index==index}" ng-click="goToSlide($index)">●</span></div>')}]),function(){"use strict";angular.module("angular-carousel").service("DeviceCapabilities",function(){function a(){var a="transform",b="webkitTransform";return"undefined"!=typeof document.body.style[a]?["webkit","moz","o","ms"].every(function(b){var c="-"+b+"-transform";return"undefined"!=typeof document.body.style[c]?(a=c,!1):!0}):a="undefined"!=typeof document.body.style[b]?"-webkit-transform":void 0,a}function b(){var a,b=document.createElement("p"),c={webkitTransform:"-webkit-transform",msTransform:"-ms-transform",transform:"transform"};document.body.insertBefore(b,null);for(var d in c)void 0!==b.style[d]&&(b.style[d]="translate3d(1px,1px,1px)",a=window.getComputedStyle(b).getPropertyValue(c[d]));return document.body.removeChild(b),void 0!==a&&a.length>0&&"none"!==a}return{has3d:b(),transformProperty:a()}}).service("computeCarouselSlideStyle",["DeviceCapabilities",function(a){return function(b,c,d){var e,f={display:"inline-block"},g=100*b+c,h=a.has3d?"translate3d("+g+"%, 0, 0)":"translate3d("+g+"%, 0)",i=(100-Math.abs(g))/100;if(a.transformProperty)if("fadeAndSlide"==d)f[a.transformProperty]=h,e=0,Math.abs(g)<100&&(e=.3+.7*i),f.opacity=e;else if("hexagon"==d){var j=100,k=0,l=60*(i-1);j=-100*b>c?100:0,k=-100*b>c?l:-l,f[a.transformProperty]=h+" rotateY("+k+"deg)",f[a.transformProperty+"-origin"]=j+"% 50%"}else if("zoom"==d){f[a.transformProperty]=h;var m=1;Math.abs(g)<100&&(m=1+2*(1-i)),f[a.transformProperty]+=" scale("+m+")",f[a.transformProperty+"-origin"]="50% 50%",e=0,Math.abs(g)<100&&(e=.3+.7*i),f.opacity=e}else f[a.transformProperty]=h;else f["margin-left"]=g+"%";return f}}]).service("createStyleString",function(){return function(a){var b=[];return angular.forEach(a,function(a,c){b.push(c+":"+a)}),b.join(";")}}).directive("rnCarousel",["$swipe","$window","$document","$parse","$compile","$timeout","$interval","computeCarouselSlideStyle","createStyleString","Tweenable",function(a,b,c,d,e,f,g,h,i,j){function k(a,b,c){var d=c;return a.every(function(a,c){return angular.equals(a,b)?(d=c,!1):!0}),d}{var l=0;b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame}return{restrict:"A",scope:!0,compile:function(m,n){var o,p,q=m[0].querySelector("li"),r=q?q.attributes:[],s=!1,t=!1;return["ng-repeat","data-ng-repeat","ng:repeat","x-ng-repeat"].every(function(a){var b=r[a];if(angular.isDefined(b)){var c=b.value.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),d=c[3];if(o=c[1],p=c[2],o)return angular.isDefined(n.rnCarouselBuffered)&&(t=!0,b.value=o+" in "+p+"|carouselSlice:carouselBufferIndex:carouselBufferSize",d&&(b.value+=" track by "+d)),s=!0,!1}return!0}),function(m,n,o){function q(){return n[0].querySelectorAll("ul[rn-carousel] > li")}function r(a){L=!0,A({x:a.clientX,y:a.clientY},a)}function u(a){var b=100*m.carouselBufferIndex+a;angular.forEach(q(),function(a,c){a.style.cssText=i(h(c,b,I.transitionType))})}function v(a,b){if(void 0===a&&(a=m.carouselIndex),b=b||{},b.animate===!1||"none"===I.transitionType)return O=!1,K=-100*a,m.carouselIndex=a,B(),void 0;O=!0;var c=new j;c.tween({from:{x:K},to:{x:-100*a},duration:I.transitionDuration,easing:I.transitionEasing,step:function(a){u(a.x)},finish:function(){O=!1,m.$apply(function(){m.carouselIndex=a,K=-100*a,B()})}})}function w(){var a=n[0].getBoundingClientRect();return a.width?a.width:a.right-a.left}function x(){M=w()}function y(a){return c.bind("mouseup",r),x(),N=n[0].querySelector("li").getBoundingClientRect().left,D=!0,E=a.x,!1}function z(a){if(!O){var b,c;if(D&&(b=a.x,c=E-b,c>2||-2>c)){L=!0;var d=K+100*-c/M;u(d)}return!1}}function A(a,b){if((!b||L)&&(c.unbind("mouseup",r),D=!1,L=!1,F=E-a.x,0!==F&&!O))if(K+=100*-F/M,I.isSequential){var d=I.moveTreshold*M,e=-F,f=-Math[e>=0?"ceil":"floor"](e/M),g=Math.abs(e)>d;G&&f+m.carouselIndex>=G.length&&(f=G.length-1-m.carouselIndex),f+m.carouselIndex<0&&(f=-m.carouselIndex);var h=g?f:0;F=m.carouselIndex+h,v(F)}else m.$apply(function(){m.carouselIndex=parseInt(-K/100,10),B()})}function B(){var a=0,b=(m.carouselBufferSize-1)/2;t?(a=m.carouselIndex<=b?0:G&&G.length<m.carouselBufferSize?0:G&&m.carouselIndex>G.length-m.carouselBufferSize?G.length-m.carouselBufferSize:m.carouselIndex-b,m.carouselBufferIndex=a,f(function(){u(K)},0,!1)):f(function(){u(K)},0,!1)}function C(){x(),v()}l++;var D,E,F,G,H={transitionType:o.rnCarouselTransition||"slide",transitionEasing:"easeTo",transitionDuration:300,isSequential:!0,autoSlideDuration:3,bufferSize:5,moveTreshold:.1},I=angular.extend({},H),J=!1,K=0,L=!1,M=null,N=null,O=!1;if(void 0!==o.rnCarouselControls){var P='<div class="rn-carousel-controls">\n  <span class="rn-carousel-control rn-carousel-control-prev" ng-click="prevSlide()" ng-if="carouselIndex > 0"></span>\n  <span class="rn-carousel-control rn-carousel-control-next" ng-click="nextSlide()" ng-if="carouselIndex < '+p+'.length - 1"></span>\n</div>';n.append(e(angular.element(P))(m))}a.bind(n,{start:y,move:z,end:A,cancel:function(a){A({},a)}}),m.nextSlide=function(a){var b=m.carouselIndex+1;b>G.length-1&&(b=0),O||v(b,a)},m.prevSlide=function(a){var b=m.carouselIndex-1;0>b&&(b=G.length-1),v(b,a)};var Q=!0;m.carouselIndex=0,s||(G=[],angular.forEach(q(),function(a,b){G.push({id:b})}));var R;if(void 0!==o.rnCarouselAutoSlide){var S=parseInt(o.rnCarouselAutoSlide,10)||I.autoSlideDuration;R=g(function(){O||D||m.nextSlide()},1e3*S)}if(o.rnCarouselIndex){var T=function(a){U.assign(m.$parent,a)},U=d(o.rnCarouselIndex);angular.isFunction(U.assign)?(m.$watch("carouselIndex",function(a){O||T(a)}),m.$parent.$watch(U,function(a){void 0!==a&&null!==a&&(G&&a>=G.length?(a=G.length-1,T(a)):G&&0>a&&(a=0,T(a)),O||v(a,{animate:!Q}),Q=!1)}),J=!0):isNaN(o.rnCarouselIndex)||v(parseInt(o.rnCarouselIndex,10),{animate:!1})}else v(0,{animate:!Q}),Q=!1;if(o.rnCarouselLocked&&m.$watch(o.rnCarouselLocked,function(a){O=a===!0?!0:!1}),s){var V=void 0!==o.rnCarouselDeepWatch;m[V?"$watch":"$watchCollection"](p,function(a,b){(G||a).slice();if(G=a,V&&angular.isArray(a)){var c=b[m.carouselIndex],d=k(a,c,m.carouselIndex);v(d,{animate:!1})}else v(m.carouselIndex,{animate:!1})},!0)}m.$on("$destroy",function(){c.unbind("mouseup",r)}),m.carouselBufferIndex=0,m.carouselBufferSize=I.bufferSize;var W=angular.element(b);W.bind("orientationchange",C),W.bind("resize",C),m.$on("$destroy",function(){c.unbind("mouseup",r),W.unbind("orientationchange",C),W.unbind("resize",C)})}}}}])}(),angular.module("angular-carousel.shifty",[]).factory("Tweenable",function(){return function(a){var b=function(){"use strict";function b(){}function c(a,b){var c;for(c in a)Object.hasOwnProperty.call(a,c)&&b(c)}function d(a,b){return c(b,function(c){a[c]=b[c]}),a}function e(a,b){c(b,function(c){"undefined"==typeof a[c]&&(a[c]=b[c])})}function f(a,b,c,d,e,f,h){var i,j=(a-f)/e;for(i in b)b.hasOwnProperty(i)&&(b[i]=g(c[i],d[i],l[h[i]],j));return b}function g(a,b,c,d){return a+(b-a)*c(d)}function h(a,b){var d=k.prototype.filter,e=a._filterArgs;c(d,function(c){"undefined"!=typeof d[c][b]&&d[c][b].apply(a,e)})}function i(a,b,c,d,e,g,i,j,k){s=b+c,t=Math.min(r(),s),u=t>=s,v=c-(s-t),a.isPlaying()&&!u?(a._scheduleId=k(a._timeoutHandler,p),h(a,"beforeTween"),f(t,d,e,g,c,b,i),h(a,"afterTween"),j(d,a._attachment,v)):u&&(j(g,a._attachment,v),a.stop(!0))}function j(a,b){var d={};return"string"==typeof b?c(a,function(a){d[a]=b}):c(a,function(a){d[a]||(d[a]=b[a]||n)}),d}function k(a,b){this._currentState=a||{},this._configured=!1,this._scheduleFunction=m,"undefined"!=typeof b&&this.setConfig(b)}var l,m,n="linear",o=500,p=1e3/60,q=Date.now?Date.now:function(){return+new Date},r="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:q;m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout:setTimeout;var s,t,u,v;return k.prototype.tween=function(a){return this._isTweening?this:(void 0===a&&this._configured||this.setConfig(a),this._timestamp=r(),this._start(this.get(),this._attachment),this.resume())},k.prototype.setConfig=function(a){a=a||{},this._configured=!0,this._attachment=a.attachment,this._pausedAtTime=null,this._scheduleId=null,this._start=a.start||b,this._step=a.step||b,this._finish=a.finish||b,this._duration=a.duration||o,this._currentState=a.from||this.get(),this._originalState=this.get(),this._targetState=a.to||this.get();var c=this._currentState,d=this._targetState;return e(d,c),this._easing=j(c,a.easing||n),this._filterArgs=[c,this._originalState,d,this._easing],h(this,"tweenCreated"),this},k.prototype.get=function(){return d({},this._currentState)},k.prototype.set=function(a){this._currentState=a},k.prototype.pause=function(){return this._pausedAtTime=r(),this._isPaused=!0,this},k.prototype.resume=function(){this._isPaused&&(this._timestamp+=r()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0;var a=this;return this._timeoutHandler=function(){i(a,a._timestamp,a._duration,a._currentState,a._originalState,a._targetState,a._easing,a._step,a._scheduleFunction)},this._timeoutHandler(),this},k.prototype.seek=function(a){return this._timestamp=r()-a,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,i(this,this._timestamp,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction),this._timeoutHandler(),this.pause()),this},k.prototype.stop=function(c){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=b,(a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.mozCancelRequestAnimationFrame||a.clearTimeout)(this._scheduleId),c&&(d(this._currentState,this._targetState),h(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},k.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},k.prototype.setScheduleFunction=function(a){this._scheduleFunction=a},k.prototype.dispose=function(){var a;for(a in this)this.hasOwnProperty(a)&&delete this[a]},k.prototype.filter={},k.prototype.formula={linear:function(a){return a}},l=k.prototype.formula,d(k,{now:r,each:c,tweenProps:f,tweenProp:g,applyFilter:h,shallowCopy:d,defaults:e,composeEasingObject:j}),"function"==typeof SHIFTY_DEBUG_NOW&&(a.timeoutHandler=i),"object"==typeof exports?module.exports=k:"function"==typeof define&&define.amd?define(function(){return k}):"undefined"==typeof a.Tweenable&&(a.Tweenable=k),k}();!function(){b.shallowCopy(b.prototype.formula,{easeInQuad:function(a){return Math.pow(a,2)},easeOutQuad:function(a){return-(Math.pow(a-1,2)-1)},easeInOutQuad:function(a){return(a/=.5)<1?.5*Math.pow(a,2):-.5*((a-=2)*a-2)},easeInCubic:function(a){return Math.pow(a,3)},easeOutCubic:function(a){return Math.pow(a-1,3)+1},easeInOutCubic:function(a){return(a/=.5)<1?.5*Math.pow(a,3):.5*(Math.pow(a-2,3)+2)},easeInQuart:function(a){return Math.pow(a,4)},easeOutQuart:function(a){return-(Math.pow(a-1,4)-1)},easeInOutQuart:function(a){return(a/=.5)<1?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},easeInQuint:function(a){return Math.pow(a,5)},easeOutQuint:function(a){return Math.pow(a-1,5)+1},easeInOutQuint:function(a){return(a/=.5)<1?.5*Math.pow(a,5):.5*(Math.pow(a-2,5)+2)},easeInSine:function(a){return-Math.cos(a*(Math.PI/2))+1},easeOutSine:function(a){return Math.sin(a*(Math.PI/2))},easeInOutSine:function(a){return-.5*(Math.cos(Math.PI*a)-1)},easeInExpo:function(a){return 0===a?0:Math.pow(2,10*(a-1))},easeOutExpo:function(a){return 1===a?1:-Math.pow(2,-10*a)+1},easeInOutExpo:function(a){return 0===a?0:1===a?1:(a/=.5)<1?.5*Math.pow(2,10*(a-1)):.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return-(Math.sqrt(1-a*a)-1)},easeOutCirc:function(a){return Math.sqrt(1-Math.pow(a-1,2))},easeInOutCirc:function(a){return(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},easeOutBounce:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},easeInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},easeOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},easeInOutBack:function(a){var b=1.70158;return(a/=.5)<1?.5*a*a*(((b*=1.525)+1)*a-b):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},elastic:function(a){return-1*Math.pow(4,-8*a)*Math.sin(2*(6*a-1)*Math.PI/2)+1},swingFromTo:function(a){var b=1.70158;return(a/=.5)<1?.5*a*a*(((b*=1.525)+1)*a-b):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},swingFrom:function(a){var b=1.70158;return a*a*((b+1)*a-b)},swingTo:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},bounce:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},bouncePast:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?2-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?2-(7.5625*(a-=2.25/2.75)*a+.9375):2-(7.5625*(a-=2.625/2.75)*a+.984375)},easeFromTo:function(a){return(a/=.5)<1?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},easeFrom:function(a){return Math.pow(a,4)},easeTo:function(a){return Math.pow(a,.25)}})}(),function(){function a(a,b,c,d,e,f){function g(a){return((n*a+o)*a+p)*a}function h(a){return((q*a+r)*a+s)*a}function i(a){return(3*n*a+2*o)*a+p}function j(a){return 1/(200*a)}function k(a,b){return h(m(a,b))}function l(a){return a>=0?a:0-a}function m(a,b){var c,d,e,f,h,j;for(e=a,j=0;8>j;j++){if(f=g(e)-a,l(f)<b)return e;if(h=i(e),l(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),l(f-a)<b)return e;a>f?c=e:d=e,e=.5*(d-c)+c}return e}var n=0,o=0,p=0,q=0,r=0,s=0;return p=3*b,o=3*(d-b)-p,n=1-p-o,s=3*c,r=3*(e-c)-s,q=1-s-r,k(a,j(f))}function c(b,c,d,e){return function(f){return a(f,b,c,d,e,1)}}b.setBezierFunction=function(a,d,e,f,g){var h=c(d,e,f,g);return h.x1=d,h.y1=e,h.x2=f,h.y2=g,b.prototype.formula[a]=h},b.unsetBezierFunction=function(a){delete b.prototype.formula[a]}}(),function(){function a(a,c,d,e,f){return b.tweenProps(e,c,a,d,1,0,f)}var c=new b;c._filterArgs=[],b.interpolate=function(d,e,f,g){var h=b.shallowCopy({},d),i=b.composeEasingObject(d,g||"linear");c.set({});var j=c._filterArgs;j.length=0,j[0]=h,j[1]=d,j[2]=e,j[3]=i,b.applyFilter(c,"tweenCreated"),b.applyFilter(c,"beforeTween");var k=a(d,h,e,f,i);return b.applyFilter(c,"afterTween"),k}}(),function(a){function b(a,b){B.length=0;var c,d=a.length;for(c=0;d>c;c++)B.push("_"+b+"_"+c);return B}function c(a){var b=a.match(v);return b?(1===b.length||a[0].match(u))&&b.unshift(""):b=["",""],b.join(A)}function d(b){a.each(b,function(a){var c=b[a];"string"==typeof c&&c.match(z)&&(b[a]=e(c))})}function e(a){return i(z,a,f)}function f(a){var b=g(a);return"rgb("+b[0]+","+b[1]+","+b[2]+")"}function g(a){return a=a.replace(/#/,""),3===a.length&&(a=a.split(""),a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),C[0]=h(a.substr(0,2)),C[1]=h(a.substr(2,2)),C[2]=h(a.substr(4,2)),C}function h(a){return parseInt(a,16)}function i(a,b,c){var d=b.match(a),e=b.replace(a,A);if(d)for(var f,g=d.length,h=0;g>h;h++)f=d.shift(),e=e.replace(A,c(f));return e}function j(a){return i(x,a,k)}function k(a){for(var b=a.match(w),c=b.length,d=a.match(y)[0],e=0;c>e;e++)d+=parseInt(b[e],10)+",";return d=d.slice(0,-1)+")"}function l(d){var e={};return a.each(d,function(a){var f=d[a];if("string"==typeof f){var g=r(f);e[a]={formatString:c(f),chunkNames:b(g,a)}}}),e}function m(b,c){a.each(c,function(a){for(var d=b[a],e=r(d),f=e.length,g=0;f>g;g++)b[c[a].chunkNames[g]]=+e[g];delete b[a]})}function n(b,c){a.each(c,function(a){var d=b[a],e=o(b,c[a].chunkNames),f=p(e,c[a].chunkNames);d=q(c[a].formatString,f),b[a]=j(d)})}function o(a,b){for(var c,d={},e=b.length,f=0;e>f;f++)c=b[f],d[c]=a[c],delete a[c];return d}function p(a,b){D.length=0;for(var c=b.length,d=0;c>d;d++)D.push(a[b[d]]);return D}function q(a,b){for(var c=a,d=b.length,e=0;d>e;e++)c=c.replace(A,+b[e].toFixed(4));return c}function r(a){return a.match(w)}function s(b,c){a.each(c,function(a){for(var d=c[a],e=d.chunkNames,f=e.length,g=b[a].split(" "),h=g[g.length-1],i=0;f>i;i++)b[e[i]]=g[i]||h;delete b[a]})}function t(b,c){a.each(c,function(a){for(var d=c[a],e=d.chunkNames,f=e.length,g="",h=0;f>h;h++)g+=" "+b[e[h]],delete b[e[h]];b[a]=g.substr(1)})}var u=/(\d|\-|\.)/,v=/([^\-0-9\.]+)/g,w=/[0-9.\-]+/g,x=new RegExp("rgb\\("+w.source+/,\s*/.source+w.source+/,\s*/.source+w.source+"\\)","g"),y=/^.*\(/,z=/#([0-9]|[a-f]){3,6}/gi,A="VAL",B=[],C=[],D=[];a.prototype.filter.token={tweenCreated:function(a,b,c){d(a),d(b),d(c),this._tokenData=l(a)},beforeTween:function(a,b,c,d){s(d,this._tokenData),m(a,this._tokenData),m(b,this._tokenData),m(c,this._tokenData)},afterTween:function(a,b,c,d){n(a,this._tokenData),n(b,this._tokenData),n(c,this._tokenData),t(d,this._tokenData)}}}(b)}(window),window.Tweenable}),function(){"use strict";angular.module("angular-carousel").filter("carouselSlice",function(){return function(a,b,c){return angular.isArray(a)?a.slice(b,b+c):angular.isObject(a)?a:void 0}})}();


/* ngAudio AngularJS Module */

'use strict';
angular.module('ngAudio', [])
.directive('ngAudio', ['$compile', '$q', 'ngAudio', function($compile, $q, ngAudio) {
    return {
        restrict: 'AEC',
        scope: {
            volume: '=',
            start: '=',
            currentTime: '=',
            loop: '=',
            clickPlay: '='
        },
        controller: function($scope, $attrs, $element, $timeout) {

            var audio = ngAudio.load($attrs.ngAudio);
            $scope.$audio = audio;
            // audio.unbind();
            
            $element.on('click', function() {
                if ($scope.clickPlay === false) {
                    return;
                }

                audio.audio.play();
                
                audio.volume = $scope.volume || audio.volume;
                audio.loop = $scope.loop;
                audio.currentTime = $scope.start || 0;

                $timeout(function() {
                    audio.play();
                }, 1);
            });
        }
    };
}])

.service('localAudioFindingService', ['$q', function($q) {

    this.find = function(id) {
        var deferred = $q.defer();
        var $sound = document.getElementById(id);
        if ($sound) {
            deferred.resolve($sound);
        } else {
            deferred.reject(id);
        }

        return deferred.promise;
    };
}])

.service('remoteAudioFindingService', ['$q', function($q) {

    this.find = function(url) {
        var deferred = $q.defer();
        var audio = new Audio();

        audio.addEventListener('error', function() {
            deferred.reject();
        });

        audio.addEventListener('loadstart', function() {
            deferred.resolve(audio);
        });

        // bugfix for chrome...
        setTimeout(function() {
            audio.src = url;
        }, 1);

        return deferred.promise;

    };
}])

.service('cleverAudioFindingService', ['$q', 'localAudioFindingService', 'remoteAudioFindingService', function($q, localAudioFindingService, remoteAudioFindingService) {
    this.find = function(id) {
        var deferred = $q.defer();

        id = id.replace('|', '/');

        localAudioFindingService.find(id)
            .then(deferred.resolve, function() {
                return remoteAudioFindingService.find(id);
            })
            .then(deferred.resolve, deferred.reject);

        return deferred.promise;
    };
}])

.value('ngAudioGlobals', {
    muting: false,
    songmuting: false
})

.factory('NgAudioObject', ['cleverAudioFindingService', '$rootScope', '$interval', '$timeout', 'ngAudioGlobals', function(cleverAudioFindingService, $rootScope, $interval, $timeout, ngAudioGlobals) {
    return function(id) {

        // window.addEventListener("click",function twiddle(){
        //     audio.play();
        //     audio.pause();
        //     window.removeEventListener("click",twiddle);
        // });


        var $audioWatch,
            $willPlay = false,
            $willPause = false,
            $willRestart = false,
            $volumeToSet,
            $looping,
            $isMuting = false,
            $observeProperties = true,
            audio,
            audioObject = this;

        this.id = id;
        this.safeId = id.replace('/', '|');
        this.loop = 0;

        this.unbind = function() {
            $observeProperties = false;
        };

        this.play = function() {
            $willPlay = true;
        };

        this.pause = function() {
            $willPause = true;
        };

        this.restart = function() {
            $willRestart = true;
        };

        this.stop = function() {
            this.restart();
        };

        this.setVolume = function(volume) {
            $volumeToSet = volume;
        };

        this.setMuting = function(muting) {
            $isMuting = muting;
        };

        this.setProgress = function(progress) {
            if (audio && audio.duration) {
                audio.currentTime = audio.duration * progress;
            }
        };

        this.setCurrentTime = function(currentTime) {
            if (audio && audio.duration) {
                audio.currentTime = currentTime;
            }
        };

        function $setWatch() {
            $audioWatch = $rootScope.$watch(function() {
                return {
                    volume: audioObject.volume,
                    currentTime: audioObject.currentTime,
                    progress: audioObject.progress,
                    muting: audioObject.muting,
                    loop: audioObject.loop,
                };
            }, function(newValue, oldValue) {
                if (newValue.currentTime !== oldValue.currentTime) {
                    audioObject.setCurrentTime(newValue.currentTime);
                }

                if (newValue.progress !== oldValue.progress) {
                    audioObject.setProgress(newValue.progress);
                }
                if (newValue.volume !== oldValue.volume) {
                    audioObject.setVolume(newValue.volume);
                }

                if (newValue.volume !== oldValue.volume) {
                    audioObject.setVolume(newValue.volume);
                }

                $looping = newValue.loop;

                if (newValue.muting !== oldValue.muting) {
                    audioObject.setMuting(newValue.muting);
                }
            }, true);
        }

        cleverAudioFindingService.find(id)
            .then(function(nativeAudio) {
                audio = nativeAudio;
                audio.addEventListener('waiting', function() {
                    audioObject.isWaiting = true;
                });
                audio.addEventListener('canplay', function() {
                    audioObject.canPlay = true;
                });
                audio.addEventListener('playing', function() {
                    audioObject.isPlaying = true;
                });
            }, function(error) {
                audioObject.error = true;
                console.warn(error);
            });


        $interval(function() {
            if ($audioWatch) {
                $audioWatch();
            }
            if (audio) {

                if ($isMuting || ngAudioGlobals.isMuting) {
                    audio.volume = 0;
                } else {
                    audio.volume = audioObject.volume !== undefined ? audioObject.volume : 1;
                }

                if ($willPlay) {
                    audio.play();
                    $willPlay = false;
                }

                if ($willRestart) {
                    audio.pause();
                    audio.currentTime = 0;
                    $willRestart = false;
                }

                if ($willPause) {
                    audio.pause();
                    $willPause = false;
                }

                if ($volumeToSet) {
                    audio.volume = $volumeToSet;
                    $volumeToSet = undefined;
                }

                if ($observeProperties) {
                    audioObject.currentTime = audio.currentTime;
                    audioObject.duration = audio.duration;
                    audioObject.remaining = audio.duration - audio.currentTime;
                    audioObject.progress = audio.currentTime / audio.duration;
                    audioObject.paused = audio.paused;
                    audioObject.src = audio.src;

                    if ($looping && audioObject.currentTime === audioObject.duration) {
                        if ($looping !== true) {
                            $looping--;
                            audioObject.loop--;
                            // if (!$looping) return;
                        }
                        audioObject.setCurrentTime(0);
                        audioObject.play();

                    }
                }

                if (!$isMuting && !ngAudioGlobals.isMuting) {
                    audioObject.volume = audio.volume;
                }

                audioObject.audio = audio;
            }

            $setWatch();
        }, 25);
    };
}])
.service('ngAudio', ['NgAudioObject', 'ngAudioGlobals', function(NgAudioObject, ngAudioGlobals) {
    this.play = function(id) {

        var audio = new NgAudioObject(id);
        audio.play();
        return audio;
    };

    this.load = function(id) {
        return new NgAudioObject(id);
    };

    this.mute = function() {
        ngAudioGlobals.muting = true;
    };

    this.unmute = function() {
        ngAudioGlobals.muting = false;
    };

    this.toggleMute = function() {
        ngAudioGlobals.muting = !ngAudioGlobals.muting;
    };
}]);


/* Wavestreaming.com - https://github.com/Wavestreaming/jquery-shoutcast - MIT licensed */
!function(a){"use strict";function b(a){this._attr={},this.playedInterval=a.playedInterval||a.interval||3e4,this.statsInterval=a.statsInterval||a.interval||5e3,this.host=a.host,this.port=parseInt(a.port,10)||8e3,this.stream=parseInt(a.stream,10)||1,this.stats_path=a.stats_path||"stats",this.played_path=a.played_path||"played",this._statsinterval=null,this._playedinterval=null,this._stats=a.stats||function(){},this._played=a.played||function(){}}b.prototype.get=function(a,b){return a?"undefined"!=typeof this._attr[a.toLowerCase()]?this._attr[a.toLowerCase()]:b:this._attr},b.prototype.stats=function(b){var c,d=this,e="http://"+this.host+":"+this.port+"/"+this.stats_path+"?sid="+this.stream+"&json=1";return b=b||function(){},c=a.ajax({url:e,dataType:"jsonp",timeout:"2000"}),c.success(function(a){return"object"!=typeof a||"undefined"==typeof a.streamstatus?void(d._status=0):(d._status=1===a.streamstatus?2:1,d._attr=a,d._attr.status=d.getStatusAsText(),b.call(d,d._attr),void d._stats(d._attr))}),c.error(function(){d._status=0,d._attr.status=d.getStatusAsText(),b.call(d,d._attr),d._stats(d._attr)}),this},b.prototype.played=function(b){var c=this,d="http://"+this.host+":"+this.port+"/"+this.played_path+"?sid="+this.stream+"&type=json";return a.ajax({url:d,dataType:"jsonp",timeout:2e3,success:function(a){!a instanceof Array||(b&&b.call(c,a),c._played(a))}}),this},b.prototype.startStats=function(){return this.stopStats(),this.stats(),this._statsinterval=setInterval(a.proxy(this.stats,this),this.statsInterval),this},b.prototype.stopStats=function(){return this._statsinterval&&clearInterval(this._statsinterval),this},b.prototype.startPlayed=function(){return this.stopPlayed(),this.played(),this._playedinterval=setInterval(a.proxy(this.played,this),this.playedInterval),this},b.prototype.stopPlayed=function(){return this._playedinterval&&clearInterval(this._playedinterval),this},b.prototype.getStatus=function(){return this._status},b.prototype.getStatusAsText=function(){return["Offline","Awaiting Connection","On Air"][this._status]},b.prototype.onAir=function(){return 2===this._status},a.SHOUTcast=function(a){return new b(a)}}(window.jQuery);
