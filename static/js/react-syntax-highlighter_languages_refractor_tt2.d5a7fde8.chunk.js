(this["webpackJsonpqpp-submissions-docs"]=this["webpackJsonpqpp-submissions-docs"]||[]).push([[137,81],{423:function(e,t,n){"use strict";function a(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,s,r){if(n.language===a){var i=n.tokenStack=[];n.code=n.code.replace(s,(function(e){if("function"===typeof r&&!r(e))return e;for(var s,o=i.length;-1!==n.code.indexOf(s=t(a,o));)++o;return i[o]=e,s})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var s=0,r=Object.keys(n.tokenStack);!function i(o){for(var u=0;u<o.length&&!(s>=r.length);u++){var g=o[u];if("string"===typeof g||g.content&&"string"===typeof g.content){var l=r[s],p=n.tokenStack[l],c="string"===typeof g?g:g.content,d=t(a,l),f=c.indexOf(d);if(f>-1){++s;var k=c.substring(0,f),E=new e.Token(a,e.tokenize(p,n.grammar),"language-"+a,p),m=c.substring(f+d.length),S=[];k&&S.push.apply(S,i([k])),S.push(E),m&&S.push.apply(S,i([m])),"string"===typeof g?o.splice.apply(o,[u,1].concat(S)):g.content=S}}else g.content&&i(g.content)}return o}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]},593:function(e,t,n){"use strict";var a=n(423);function s(e){e.register(a),function(e){e.languages.tt2=e.languages.extend("clike",{comment:/#.*|\[%#[\s\S]*?%\]/,keyword:/\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\b/,punctuation:/[[\]{},()]/}),e.languages.insertBefore("tt2","number",{operator:/=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|or|not)\b/,variable:{pattern:/[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*/i}}),e.languages.insertBefore("tt2","keyword",{delimiter:{pattern:/^(?:\[%|%%)-?|-?%]$/,alias:"punctuation"}}),e.languages.insertBefore("tt2","string",{"single-quoted-string":{pattern:/'[^\\']*(?:\\[\s\S][^\\']*)*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,greedy:!0,alias:"string",inside:{variable:{pattern:/\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i}}}}),delete e.languages.tt2.string,e.hooks.add("before-tokenize",(function(t){e.languages["markup-templating"].buildPlaceholders(t,"tt2",/\[%[\s\S]+?%\]/g)})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"tt2")}))}(e)}e.exports=s,s.displayName="tt2",s.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tt2.d5a7fde8.chunk.js.map