function _0x3abd(){const _0xb3bc2f=['exports','Message','remove','text','BlacklistWords','Manage\x20blacklist','../../lang.yml','4835815WShAKb','findOne','BlacklistMessage','utf8','createSuggestion','AllowedRoles','error','Error\x20in\x20openQuestionModal:\x20','map','member','Your\x20suggestion\x20contains\x20blacklisted\x20words.','The\x20user\x20to\x20remove\x20from\x20the\x20blacklist','Accept\x20a\x20suggestion','resolve','addSubcommand','setDescription','deleteOne','Create\x20a\x20new\x20suggestion','add','discord.js','Add\x20a\x20user\x20to\x20the\x20blacklist','The\x20suggestion\x20text','replied','reply','js-yaml','2817500nFCXcq','showModal','getSubcommand','3biHUWD','deny','addStringOption','2626744VBWQor','setRequired','\x20has\x20been\x20removed\x20from\x20the\x20blacklist.','setName','updateOne','setCustomId','setLabel','roles','setStyle','addSubcommandGroup','Deny\x20a\x20suggestion','Remove\x20a\x20user\x20from\x20the\x20blacklist','409761xXeJYI','getString','SuggestionsDisabled','ModalQuestion','create','addUserOption','setTitle','416120rrVvjd','has','some','SuggestionAcceptDenyRoles','getUser','4275104sloeVv','ModalTitle','Patterns','blockBlacklistWords','accept','suggestionModal','load','Error\x20in\x20suggestion\x20command:\x20','UseQuestionModal','user','\x20has\x20been\x20added\x20to\x20the\x20blacklist.','NoPermsMessage','readFileSync','Suggestion','SuggestionSettings','length','1534612oUjRLp','../../config.yml','options','replace','suggestionText','cache','The\x20ID\x20of\x20the\x20suggestion\x20to\x20accept','addComponents','Error','6NQjtND'];_0x3abd=function(){return _0xb3bc2f;};return _0x3abd();}(function(_0x316d30,_0x2b731b){function _0x250b3d(_0x263087,_0x3cbd16){return _0x4d55(_0x263087- -0x131,_0x3cbd16);}const _0xb49ed=_0x316d30();while(!![]){try{const _0x1f1913=parseInt(_0x250b3d(0x63,0x7c))/0x1+parseInt(_0x250b3d(0x78,0x87))/0x2+-parseInt(_0x250b3d(0x4d,0x68))/0x3*(parseInt(_0x250b3d(0x50,0x57))/0x4)+-parseInt(_0x250b3d(0x89,0x99))/0x5*(-parseInt(_0x250b3d(0x81,0x6f))/0x6)+-parseInt(_0x250b3d(0x4a,0x6a))/0x7+-parseInt(_0x250b3d(0x68,0x54))/0x8+parseInt(_0x250b3d(0x5c,0x4a))/0x9;if(_0x1f1913===_0x2b731b)break;else _0xb49ed['push'](_0xb49ed['shift']());}catch(_0xf46c81){_0xb49ed['push'](_0xb49ed['shift']());}}}(_0x3abd,0x931b0));const {SlashCommandBuilder,ModalBuilder,TextInputBuilder,TextInputStyle,ActionRowBuilder}=require(_0x48089f(-0x238,-0x213)),suggestionActions=require('../../events/Suggestions/suggestionActions'),yaml=require(_0x48089f(-0x220,-0x20e)),fs=require('fs'),path=require('path'),SuggestionBlacklist=require('../../models/SuggestionBlacklist'),config=yaml[_0x48089f(-0x1e4,-0x1e9)](fs[_0x48089f(-0x1ba,-0x1e3)](path[_0x48089f(-0x225,-0x219)](__dirname,_0x48089f(-0x1f4,-0x1de)),_0x48089f(-0x1f3,-0x1cb))),lang=yaml[_0x48089f(-0x1cc,-0x1e9)](fs['readFileSync'](path[_0x48089f(-0x210,-0x219)](__dirname,_0x48089f(-0x1b5,-0x1cf)),'utf8'));async function openQuestionModal(_0x5a5bc6){function _0x145b10(_0x4316fd,_0x341a8b){return _0x48089f(_0x4316fd,_0x341a8b- -0x49);}try{const _0x1e16e6=new ModalBuilder()[_0x145b10(-0x272,-0x24b)](_0x145b10(-0x223,-0x233))[_0x145b10(-0x221,-0x23e)](lang['Suggestion'][_0x145b10(-0x21b,-0x237)]),_0x5392b6=new TextInputBuilder()['setCustomId'](_0x145b10(-0x245,-0x224))[_0x145b10(-0x255,-0x24a)](lang[_0x145b10(-0x244,-0x22b)][_0x145b10(-0x241,-0x241)])[_0x145b10(-0x23d,-0x248)](TextInputStyle['Paragraph'])['setRequired'](!![]),_0x2ab3c0=new ActionRowBuilder()[_0x145b10(-0x229,-0x221)](_0x5392b6);_0x1e16e6[_0x145b10(-0x200,-0x221)](_0x2ab3c0),await _0x5a5bc6[_0x145b10(-0x27a,-0x255)](_0x1e16e6);}catch(_0x2ce3d9){console[_0x145b10(-0x1e8,-0x211)](_0x145b10(-0x25e,-0x268),_0x2ce3d9),!_0x5a5bc6[_0x145b10(-0x231,-0x259)]&&await _0x5a5bc6['reply']({'content':lang[_0x145b10(-0x24e,-0x22b)][_0x145b10(-0x246,-0x220)],'ephemeral':!![]});}}function _0x4d55(_0x23b049,_0x1ec725){const _0x3abd9b=_0x3abd();return _0x4d55=function(_0x4d55ae,_0x1ae4e1){_0x4d55ae=_0x4d55ae-0x169;let _0x3664f3=_0x3abd9b[_0x4d55ae];return _0x3664f3;},_0x4d55(_0x23b049,_0x1ec725);}const command=new SlashCommandBuilder()[_0x48089f(-0x1ef,-0x204)]('suggestion')[_0x48089f(-0x1f0,-0x217)]('Manage\x20suggestions'),useQuestionModal=config[_0x48089f(-0x1bb,-0x1e1)][_0x48089f(-0x1ea,-0x1e7)];function _0x48089f(_0xe81cbc,_0xc58c06){return _0x4d55(_0xc58c06- -0x388,_0xe81cbc);}!useQuestionModal?command[_0x48089f(-0x22e,-0x218)](_0x5488fb=>_0x5488fb[_0x48089f(-0x215,-0x204)](_0x48089f(-0x1dd,-0x1f7))['setDescription'](_0x48089f(-0x1fb,-0x215))[_0x48089f(-0x22f,-0x208)](_0x2c14fa=>_0x2c14fa[_0x48089f(-0x1e1,-0x204)](_0x48089f(-0x1e5,-0x1d2))[_0x48089f(-0x21f,-0x217)](_0x48089f(-0x1f0,-0x211))[_0x48089f(-0x1e8,-0x206)](!![]))):command['addSubcommand'](_0x3f5d6f=>_0x3f5d6f[_0x48089f(-0x1da,-0x204)](_0x48089f(-0x210,-0x1f7))['setDescription'](_0x48089f(-0x1f1,-0x215)));command[_0x48089f(-0x23f,-0x218)](_0x3ed5e9=>_0x3ed5e9['setName'](_0x48089f(-0x208,-0x1eb))[_0x48089f(-0x238,-0x217)](_0x48089f(-0x22c,-0x21a))['addStringOption'](_0x56798a=>_0x56798a[_0x48089f(-0x225,-0x204)]('id')['setDescription'](_0x48089f(-0x1ed,-0x1d9))[_0x48089f(-0x1f8,-0x206)](!![])))[_0x48089f(-0x233,-0x218)](_0x8cf47b=>_0x8cf47b[_0x48089f(-0x1e8,-0x204)](_0x48089f(-0x202,-0x209))['setDescription'](_0x48089f(-0x1e9,-0x1fd))[_0x48089f(-0x1e9,-0x208)](_0x14b2fc=>_0x14b2fc[_0x48089f(-0x20d,-0x204)]('id')['setDescription']('The\x20ID\x20of\x20the\x20suggestion\x20to\x20deny')[_0x48089f(-0x213,-0x206)](!![])))[_0x48089f(-0x222,-0x1fe)](_0x1e76a6=>_0x1e76a6[_0x48089f(-0x20d,-0x204)]('blacklist')['setDescription'](_0x48089f(-0x1a8,-0x1d0))['addSubcommand'](_0x4740e1=>_0x4740e1[_0x48089f(-0x1f1,-0x204)](_0x48089f(-0x21a,-0x214))[_0x48089f(-0x202,-0x217)](_0x48089f(-0x202,-0x212))[_0x48089f(-0x1ee,-0x1f6)](_0x41cb3e=>_0x41cb3e['setName'](_0x48089f(-0x1db,-0x1e6))['setDescription']('The\x20user\x20to\x20blacklist')[_0x48089f(-0x230,-0x206)](!![])))[_0x48089f(-0x219,-0x218)](_0x3e249e=>_0x3e249e[_0x48089f(-0x20e,-0x204)](_0x48089f(-0x1ce,-0x1d3))['setDescription'](_0x48089f(-0x1d2,-0x1fc))[_0x48089f(-0x20a,-0x1f6)](_0x120380=>_0x120380[_0x48089f(-0x1e2,-0x204)]('user')['setDescription'](_0x48089f(-0x240,-0x21b))['setRequired'](!![]))));async function checkBlacklistWords(_0x5dc41a){function _0x3384ee(_0x5e9a3d,_0x2279d1){return _0x48089f(_0x5e9a3d,_0x2279d1-0x4f6);}const _0x4bf1ab=config[_0x3384ee(0x305,0x325)][_0x3384ee(0x2e1,0x309)][_0x3384ee(0x2ce,0x2d8)](_0x432d29=>convertSimplePatternToRegex(_0x432d29));return _0x4bf1ab[_0x3384ee(0x310,0x304)](_0x3404cf=>_0x3404cf['test'](_0x5dc41a));}function convertSimplePatternToRegex(_0x57e1e8){function _0x3271b1(_0x124245,_0x109158){return _0x48089f(_0x109158,_0x124245-0x731);}let _0x30ed19=_0x57e1e8[_0x3271b1(0x555,0x562)](/\./g,'\x5c.')[_0x3271b1(0x555,0x556)](/\*/g,'.*');return new RegExp('^'+_0x30ed19+'$','i');}module[_0x48089f(-0x1e8,-0x1d5)]={'data':command,async 'execute'(_0x4a2a1b,_0x144a12){function _0x57a9e9(_0x395d18,_0x4a3c0a){return _0x48089f(_0x395d18,_0x4a3c0a-0x3e8);}try{if(!config[_0x57a9e9(0x204,0x207)]['Enabled']){await _0x4a2a1b[_0x57a9e9(0x1cd,0x1d9)]({'content':lang[_0x57a9e9(0x1e9,0x206)][_0x57a9e9(0x20f,0x1ef)],'ephemeral':!![]});return;}const _0x132b86=_0x4a2a1b[_0x57a9e9(0x231,0x20b)][_0x57a9e9(0x1ee,0x1dd)]();if(_0x132b86===_0x57a9e9(0x1d3,0x1f1)){const _0x7eadf4=config[_0x57a9e9(0x1e7,0x207)][_0x57a9e9(0x206,0x21f)],_0x502b2c=_0x7eadf4[_0x57a9e9(0x233,0x208)]===0x0||_0x7eadf4[_0x57a9e9(0x1f8,0x1f6)](_0x4a6b14=>_0x4a2a1b[_0x57a9e9(0x1b3,0x1cb)][_0x57a9e9(0x207,0x1e8)]['cache'][_0x57a9e9(0x205,0x1f5)](_0x4a6b14));if(!_0x502b2c){await _0x4a2a1b[_0x57a9e9(0x1fa,0x1d9)]({'content':lang[_0x57a9e9(0x21b,0x204)],'ephemeral':!![]});return;}const _0x487184=await SuggestionBlacklist[_0x57a9e9(0x207,0x21b)]({'userId':_0x4a2a1b['user']['id']});if(_0x487184){await _0x4a2a1b[_0x57a9e9(0x1e3,0x1d9)]({'content':lang[_0x57a9e9(0x22c,0x206)][_0x57a9e9(0x211,0x21c)],'ephemeral':!![]});return;}if(useQuestionModal)await openQuestionModal(_0x4a2a1b);else{const _0xe6036f=_0x4a2a1b[_0x57a9e9(0x1fe,0x20b)][_0x57a9e9(0x203,0x1ee)](_0x57a9e9(0x231,0x216));if(config[_0x57a9e9(0x1fb,0x207)][_0x57a9e9(0x1f5,0x1fc)]&&await checkBlacklistWords(_0xe6036f)){const _0x4a38b8=lang[_0x57a9e9(0x1f6,0x217)]&&lang[_0x57a9e9(0x1fb,0x217)]['Message']?lang[_0x57a9e9(0x238,0x217)][_0x57a9e9(0x20d,0x214)]['replace'](/{user}/g,''+_0x4a2a1b[_0x57a9e9(0x202,0x202)]):_0x57a9e9(0x1e9,0x1cc);await _0x4a2a1b['reply']({'content':_0x4a38b8,'ephemeral':!![]});return;}await suggestionActions[_0x57a9e9(0x21b,0x21e)](_0x144a12,_0x4a2a1b,_0xe6036f);}}else{if(_0x132b86===_0x57a9e9(0x203,0x1fd)||_0x132b86==='deny'){const _0x592d91=config[_0x57a9e9(0x21a,0x207)][_0x57a9e9(0x207,0x1f7)],_0x52e751=_0x592d91[_0x57a9e9(0x219,0x1f6)](_0x501671=>_0x4a2a1b['member'][_0x57a9e9(0x210,0x1e8)]['cache'][_0x57a9e9(0x1f8,0x1f5)](_0x501671));if(!_0x52e751){await _0x4a2a1b[_0x57a9e9(0x1b8,0x1d9)]({'content':lang[_0x57a9e9(0x22a,0x204)],'ephemeral':!![]});return;}const _0x3b49c4=_0x4a2a1b[_0x57a9e9(0x1e2,0x20b)]['getString']('id');_0x132b86===_0x57a9e9(0x1da,0x1fd)?await suggestionActions['acceptSuggestion'](_0x144a12,_0x4a2a1b,_0x3b49c4):await suggestionActions['denySuggestion'](_0x144a12,_0x4a2a1b,_0x3b49c4);}else{if(_0x132b86===_0x57a9e9(0x1ad,0x1d4)||_0x132b86===_0x57a9e9(0x218,0x215)){const _0x1b06f6=_0x132b86,_0x59cd14=_0x4a2a1b[_0x57a9e9(0x22d,0x20b)][_0x57a9e9(0x1e0,0x1f8)]('user'),_0x15bcd0=config['SuggestionSettings'][_0x57a9e9(0x1e0,0x1f7)],_0x1a82bf=_0x15bcd0[_0x57a9e9(0x1ec,0x1f6)](_0x310948=>_0x4a2a1b[_0x57a9e9(0x1df,0x1cb)]['roles'][_0x57a9e9(0x1f6,0x20e)]['has'](_0x310948));if(!_0x1a82bf){await _0x4a2a1b[_0x57a9e9(0x1ba,0x1d9)]({'content':lang[_0x57a9e9(0x209,0x204)],'ephemeral':!![]});return;}if(_0x1b06f6===_0x57a9e9(0x1dd,0x1d4))await SuggestionBlacklist[_0x57a9e9(0x207,0x1e5)]({'userId':_0x59cd14['id']},{'userId':_0x59cd14['id']},{'upsert':!![]}),await _0x4a2a1b[_0x57a9e9(0x1fd,0x1d9)]({'content':_0x59cd14+_0x57a9e9(0x229,0x203),'ephemeral':!![]});else _0x1b06f6===_0x57a9e9(0x1f2,0x215)&&(await SuggestionBlacklist[_0x57a9e9(0x1ca,0x1d2)]({'userId':_0x59cd14['id']}),await _0x4a2a1b[_0x57a9e9(0x1bb,0x1d9)]({'content':_0x59cd14+_0x57a9e9(0x1bd,0x1e3),'ephemeral':!![]}));}}}}catch(_0xd94cf4){console[_0x57a9e9(0x235,0x220)](_0x57a9e9(0x20e,0x200),_0xd94cf4),!_0x4a2a1b['replied']&&await _0x4a2a1b[_0x57a9e9(0x1e2,0x1d9)]({'content':lang[_0x57a9e9(0x1f7,0x206)][_0x57a9e9(0x231,0x211)],'ephemeral':!![]});}}};