"use strict";(self.webpackChunkqpp_submissions_docs=self.webpackChunkqpp_submissions_docs||[]).push([[979],{34973:function(s){function e(s){!function(s){var e=/\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/;s.languages.protobuf=s.languages.extend("clike",{"class-name":{pattern:/(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,lookbehind:!0},keyword:/\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\b/}),s.languages.insertBefore("protobuf","operator",{map:{pattern:/\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[A-Za-z_]\w*\s*[=;])/,alias:"class-name",inside:{punctuation:/[<>.,]/,builtin:e}},builtin:e,"positional-class-name":{pattern:/(?:\b|\B\.)[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s+[A-Za-z_]\w*\s*[=;])/,alias:"class-name",inside:{punctuation:/\./}},annotation:{pattern:/(\[\s*)[A-Za-z_]\w*(?=\s*=)/,lookbehind:!0}})}(s)}s.exports=e,e.displayName="protobuf",e.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_protobuf.9bf6f776.chunk.js.map