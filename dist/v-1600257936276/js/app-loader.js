(function(){var e,t,a,n;window._version="v-1600257936276",window.taigaConfig={api:"http://localhost:8000/api/v1/",eventsUrl:null,tribeHost:null,eventsMaxMissedHeartbeats:5,eventsHeartbeatIntervalTime:6e4,debug:!0,defaultLanguage:"en",themes:["taiga","taiga-legacy","material-design","high-contrast"],defaultTheme:"taiga",publicRegisterEnabled:!0,feedbackEnabled:!0,supportUrl:null,privacyPolicyUrl:null,termsOfServiceUrl:null,maxUploadFileSize:null,importers:[],contribPlugins:[]},window.taigaContribPlugins=[],window._decorators=[],window.addDecorator=function(n,t){return window._decorators.push({provider:n,decorator:t})},window.getDecorators=function(){return window._decorators},a=function(n){return $("head").append('<link rel="stylesheet" href="'+n+'" type="text/css" />')},e=function(i){return new Promise(function(r,n){var t=function(n){var t,e,i,o;if(n.isPack)for(t=0,i=(o=n.plugins).length;t<i;t++)e=o[t],window.taigaContribPlugins.push(e);else window.taigaContribPlugins.push(n);return n.css&&a(n.css),n.js?ljs.load(n.js,r):r()},e=function(n,t,e){return console.error("Error loading plugin",i,e)};return $.getJSON(i).then(t,e)})},t=function(n){var t=[];return _.map(n,function(n){return t.push(e(n))}),Promise.all(t)},(n=$.getJSON("/conf.json")).done(function(n){return window.taigaConfig=_.assign({},window.taigaConfig,n)}),n.fail(function(){return console.error("Your conf.json file is not a valid json file, please review it.")}),n.always(function(){var n=$.getJSON("/"+window._version+"/emojis/emojis-data.json").then(function(n){return window.emojis=n});return 0<window.taigaConfig.contribPlugins.length?t(window.taigaConfig.contribPlugins).then(function(){return ljs.load("/"+window._version+"/js/app.js",function(){return n.then(function(){return angular.bootstrap(document,["taiga"])})})}):ljs.load("/"+window._version+"/js/app.js",function(){return n.then(function(){return angular.bootstrap(document,["taiga"])})})})}).call(this);