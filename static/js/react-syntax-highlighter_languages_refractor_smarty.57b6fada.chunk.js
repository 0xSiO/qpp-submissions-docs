"use strict";(self.webpackChunkqpp_submissions_docs=self.webpackChunkqpp_submissions_docs||[]).push([[849,3047],{40595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var s=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,i=s.length;-1!==t.code.indexOf(o=n(a,i));)++i;return s[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function s(i){for(var l=0;l<i.length&&!(o>=r.length);l++){var u=i[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var p=r[o],c=t.tokenStack[p],d="string"===typeof u?u:u.content,g=n(a,p),f=d.indexOf(g);if(f>-1){++o;var k=d.substring(0,f),m=new e.Token(a,e.tokenize(c,t.grammar),"language-"+a,c),b=d.substring(f+g.length),h=[];k&&h.push.apply(h,s([k])),h.push(m),b&&h.push.apply(h,s([b])),"string"===typeof u?i.splice.apply(i,[l,1].concat(h)):u.content=h}}else u.content&&s(u.content)}return i}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]},29895:function(e,n,t){var a=t(40595);function o(e){e.register(a),function(e){e.languages.smarty={comment:/\{\*[\s\S]*?\*\}/,delimiter:{pattern:/^\{|\}$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->)(?!\d)\w+/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],function:[{pattern:/(\|\s*)@?(?!\d)\w+/,lookbehind:!0},/^\/?(?!\d)\w+/,/(?!\d)\w+(?=\()/],"attr-name":{pattern:/\w+\s*=\s*(?:(?!\d)\w+)?/,inside:{variable:{pattern:/(=\s*)(?!\d)\w+/,lookbehind:!0},operator:/=/}},punctuation:[/[\[\]().,:`]|->/],operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],keyword:/\b(?:false|off|on|no|true|yes)\b/},e.hooks.add("before-tokenize",(function(n){var t=!1;e.languages["markup-templating"].buildPlaceholders(n,"smarty",/\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,(function(e){return"{/literal}"===e&&(t=!1),!t&&("{literal}"===e&&(t=!0),!0)}))})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"smarty")}))}(e)}e.exports=o,o.displayName="smarty",o.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_smarty.57b6fada.chunk.js.map