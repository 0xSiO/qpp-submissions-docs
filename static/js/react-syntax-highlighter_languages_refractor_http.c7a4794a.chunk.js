"use strict";(self.webpackChunkqpp_submissions_docs=self.webpackChunkqpp_submissions_docs||[]).push([[6508],{26722:function(t){function e(t){!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var e,s=t.languages,a={"application/javascript":s.javascript,"application/json":s.json||s.javascript,"application/xml":s.xml,"text/xml":s.xml,"text/html":s.html,"text/css":s.css},n={"application/json":!0,"application/xml":!0};function i(t){var e=t.replace(/^[a-z]+\//,"");return"(?:"+t+"|"+("\\w+/(?:[\\w.-]+\\+)+"+e+"(?![+\\w.-])")+")"}for(var p in a)if(a[p]){e=e||{};var r=n[p]?i(p):p;e[p]={pattern:RegExp("(content-type:\\s*"+r+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:{rest:a[p]}}}e&&t.languages.insertBefore("http","header-name",e)}(t)}t.exports=e,e.displayName="http",e.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_http.c7a4794a.chunk.js.map