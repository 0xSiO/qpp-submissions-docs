"use strict";(self.webpackChunkqpp_submissions_docs=self.webpackChunkqpp_submissions_docs||[]).push([[3047],{40595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,s){if(t.language===a){var r=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof s&&!s(e))return e;for(var o,i=r.length;-1!==t.code.indexOf(o=n(a,i));)++i;return r[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,s=Object.keys(t.tokenStack);!function r(i){for(var u=0;u<i.length&&!(o>=s.length);u++){var c=i[u];if("string"===typeof c||c.content&&"string"===typeof c.content){var p=s[o],l=t.tokenStack[p],g="string"===typeof c?c:c.content,f=n(a,p),k=g.indexOf(f);if(k>-1){++o;var m=g.substring(0,k),d=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),h=g.substring(k+f.length),y=[];m&&y.push.apply(y,r([m])),y.push(d),h&&y.push.apply(y,r([h])),"string"===typeof c?i.splice.apply(i,[u,1].concat(y)):c.content=y}}else c.content&&r(c.content)}return i}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.4b9eabcd.chunk.js.map