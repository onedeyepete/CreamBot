function _0x2010(_0x1958a4,_0x54b009){const _0x40ef3f=_0x40ef();return _0x2010=function(_0x2010cb,_0x140e5a){_0x2010cb=_0x2010cb-0x19b;let _0x575ee1=_0x40ef3f[_0x2010cb];return _0x575ee1;},_0x2010(_0x1958a4,_0x54b009);}(function(_0x334172,_0x57bb67){function _0x10843a(_0x409ff5,_0x4186e7){return _0x2010(_0x409ff5-0x2,_0x4186e7);}const _0x4d5c6e=_0x334172();while(!![]){try{const _0x26e5f8=-parseInt(_0x10843a(0x1b3,0x19b))/0x1+-parseInt(_0x10843a(0x1a0,0x187))/0x2+-parseInt(_0x10843a(0x1ca,0x1df))/0x3*(-parseInt(_0x10843a(0x1c3,0x1b1))/0x4)+parseInt(_0x10843a(0x1bd,0x1b4))/0x5*(parseInt(_0x10843a(0x1c9,0x1cc))/0x6)+parseInt(_0x10843a(0x1c2,0x1b6))/0x7+parseInt(_0x10843a(0x19f,0x18f))/0x8*(-parseInt(_0x10843a(0x1c4,0x1b2))/0x9)+parseInt(_0x10843a(0x1bf,0x1bd))/0xa*(parseInt(_0x10843a(0x1cf,0x1e1))/0xb);if(_0x26e5f8===_0x57bb67)break;else _0x4d5c6e['push'](_0x4d5c6e['shift']());}catch(_0x48399b){_0x4d5c6e['push'](_0x4d5c6e['shift']());}}}(_0x40ef,0x1f9a0));const {ContextMenuCommandBuilder,ApplicationCommandType}=require(_0x15527d(0x4b4,0x4c0)),yaml=require(_0x15527d(0x481,0x498)),fs=require('fs');function _0x15527d(_0x3b1808,_0x5c7aa3){return _0x2010(_0x3b1808-0x2e6,_0x5c7aa3);}function _0x40ef(){const _0x48692d=['resolve','../../lang.yml','76342zJRhII','64816vJqLaX','1755PJSvGN','some','messages','replied','has','312870ZmVCmj','45CPBfqx','path','\x20not\x20found.','member','readFileSync','25861HbLtMX','discord.js','js-yaml','SuggestionSettings','8216oQsxJN','171804RbLioF','load','Message','setName','exports','Error','utf8','findOne','../../config.yml','targetId','error','uniqueId','\x20accepted\x20successfully.','cache','SuggestionsDisabled','\x20denied\x20successfully.','Invalid\x20command.','log','commandName','6126XQGSUG','SuggestionAcceptDenyRoles','channel','Suggestion\x20','Deny','roles','setType','reply','../../models/Suggestion','client','10kgILGN','Enabled','270Wcovhs'];_0x40ef=function(){return _0x48692d;};return _0x40ef();}const path=require(_0x15527d(0x4af,0x4b8)),Suggestion=require(_0x15527d(0x49f,0x4b4)),suggestionActions=require('../../events/Suggestions/suggestionActions'),config=yaml[_0x15527d(0x485,0x494)](fs[_0x15527d(0x4b2,0x4a3)](path[_0x15527d(0x4a4,0x4ad)](__dirname,_0x15527d(0x48c,0x47a)),_0x15527d(0x48a,0x490))),lang=yaml['load'](fs['readFileSync'](path[_0x15527d(0x4a4,0x4bc)](__dirname,_0x15527d(0x4a5,0x49d)),'utf8')),acceptCommand=new ContextMenuCommandBuilder()[_0x15527d(0x487,0x47a)]('Accept')['setType'](ApplicationCommandType[_0x15527d(0x486,0x470)]),denyCommand=new ContextMenuCommandBuilder()['setName'](_0x15527d(0x49b,0x4a0))[_0x15527d(0x49d,0x491)](ApplicationCommandType['Message']);module[_0x15527d(0x488,0x487)]={'data':[acceptCommand,denyCommand],async 'execute'(_0x1c1735){function _0x20ba5f(_0x18402b,_0x4290dc){return _0x15527d(_0x4290dc- -0x1f3,_0x18402b);}try{if(!config[_0x20ba5f(0x284,0x28f)][_0x20ba5f(0x296,0x2af)]){!_0x1c1735[_0x20ba5f(0x2b5,0x2b8)]&&await _0x1c1735['reply']({'content':lang['Suggestion'][_0x20ba5f(0x2b8,0x29f)],'ephemeral':!![]});return;}const _0x4fc906=_0x1c1735[_0x20ba5f(0x2a7,0x2a3)],_0x4af61f=await _0x1c1735[_0x20ba5f(0x2a0,0x2a6)][_0x20ba5f(0x2b5,0x2b7)]['fetch'](_0x1c1735[_0x20ba5f(0x286,0x29a)]),_0x1fa330=_0x4af61f['id'],_0x517485=await Suggestion[_0x20ba5f(0x297,0x298)]({'messageId':_0x1fa330});if(!_0x517485){console[_0x20ba5f(0x2a5,0x2a2)](_0x20ba5f(0x2ad,0x2a7)+_0x1fa330+_0x20ba5f(0x2a3,0x2bd));!_0x1c1735[_0x20ba5f(0x2d0,0x2b8)]&&await _0x1c1735['reply']({'content':'Suggestion\x20'+_0x1fa330+_0x20ba5f(0x2af,0x2bd),'ephemeral':!![]});return;}const _0x10d1d4=config[_0x20ba5f(0x291,0x28f)][_0x20ba5f(0x29e,0x2a5)],_0x4c5022=_0x10d1d4[_0x20ba5f(0x2b7,0x2b6)](_0x57ea16=>_0x1c1735[_0x20ba5f(0x2b6,0x2be)][_0x20ba5f(0x2b9,0x2a9)][_0x20ba5f(0x2a1,0x29e)][_0x20ba5f(0x2b4,0x2b9)](_0x57ea16));if(!_0x4c5022){!_0x1c1735[_0x20ba5f(0x2cf,0x2b8)]&&await _0x1c1735[_0x20ba5f(0x292,0x2ab)]({'content':lang['NoPermsMessage'],'ephemeral':!![]});return;}if(_0x4fc906==='Accept'){const _0x30e43e=await suggestionActions['acceptSuggestion'](_0x1c1735['client'],_0x1c1735,_0x517485[_0x20ba5f(0x29a,0x29c)]);_0x30e43e&&(!_0x1c1735[_0x20ba5f(0x29f,0x2b8)]&&await _0x1c1735[_0x20ba5f(0x295,0x2ab)]({'content':_0x20ba5f(0x296,0x2a7)+_0x517485['uniqueId']+_0x20ba5f(0x29c,0x29d),'ephemeral':!![]}));}else{if(_0x4fc906===_0x20ba5f(0x2a1,0x2a8)){const _0x26be99=await suggestionActions['denySuggestion'](_0x1c1735[_0x20ba5f(0x29f,0x2ad)],_0x1c1735,_0x517485['uniqueId']);_0x26be99&&(!_0x1c1735[_0x20ba5f(0x2a5,0x2b8)]&&await _0x1c1735[_0x20ba5f(0x2bb,0x2ab)]({'content':_0x20ba5f(0x28e,0x2a7)+_0x517485[_0x20ba5f(0x29d,0x29c)]+_0x20ba5f(0x2b6,0x2a0),'ephemeral':!![]}));}else!_0x1c1735['replied']&&await _0x1c1735[_0x20ba5f(0x29c,0x2ab)]({'content':_0x20ba5f(0x2b1,0x2a1),'ephemeral':!![]});}}catch(_0x5c39c2){console[_0x20ba5f(0x29b,0x29b)]('Error\x20in\x20suggestion\x20command:\x20',_0x5c39c2),!_0x1c1735[_0x20ba5f(0x2b4,0x2b8)]&&await _0x1c1735[_0x20ba5f(0x2b6,0x2ab)]({'content':lang['Suggestion'][_0x20ba5f(0x27c,0x296)],'ephemeral':!![]});}}};