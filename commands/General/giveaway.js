function _0x48d41a(_0x34f2c6,_0x2a75ed){return _0x3dcb(_0x34f2c6-0x36d,_0x2a75ed);}function _0x1cd9(){const _0x2ffaec=['81CkWzPb','addStringOption','The\x20users\x20to\x20reroll,\x20Do\x20@\x20followed\x20by\x20the\x20Username(s)','notify_everyone','cache','channel','847080VCTFsJ','././config.yml','setName','min_server_join_date','132pFepFg','../../events/Giveaways/giveawayActions.js','Manage\x20giveaways','Create\x20a\x20giveaway','3178282OGtubV','length','exec','prize','1YToNdI','giveaway_id','giveaway','min_account_age','whitelist_roles','72QbuOqm','One\x20or\x20more\x20dates\x20are\x20in\x20an\x20incorrect\x20format.\x20Please\x20use\x20\x27Month\x20Day\x20Year\x27\x20(e.g.,\x20January\x201\x202000).','test','notify_whitelist_roles','408710Ehidfv','deferReply','How\x20long\x20the\x20giveaway\x20should\x20be,\x20for\x20example:\x201m\x20(minutes),\x201h\x20(hours),\x201d\x20(days),\x201y\x20(years)','notify','Whitelist\x20Roles','error','getChannel','editReply','winners','The\x20giveaway\x20ID\x20at\x20the\x20footer\x20of\x20the\x20giveaway\x20embed','time','setDescription','guild','Reroll\x20a\x20giveaway','options','10ctotqQ','roles','hostedby','users','\x20has\x20been\x20ended.','The\x20prize\x20to\x20win','Who\x20is\x20hosting\x20the\x20giveaway?\x20Do\x20@\x20followed\x20by\x20the\x20Username','setRequired','Nobody','10401223BteJwT','AllowRoles','end','The\x20channel\x20you\x20want\x20to\x20create\x20the\x20giveaway\x20in','addChoices','js-yaml','Giveaways','create','charAt','9759607cKXxAp','random','min_invites','join','getSubcommand','addChannelOption','\x0aInvalid\x20blacklist\x20role\x20ID(s):\x20','endGiveaway','getInteger','includes','62913sRapDT','Everyone','An\x20error\x20occurred\x20while\x20executing\x20the\x20giveaway\x20command.','reroll','getString','replace','How\x20many\x20users\x20can\x20win\x20the\x20giveaway?','addIntegerOption','Roles\x20allowed\x20to\x20enter\x20the\x20giveaway,\x20Do\x20@\x20followed\x20by\x20the\x20Role\x20[Optional]','addSubcommand','blacklist_roles','utf8','some','startGiveaway','load','map','9605748EBrnbc','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'];_0x1cd9=function(){return _0x2ffaec;};return _0x1cd9();}(function(_0x39a99f,_0x486237){function _0x4bca0b(_0x565e6a,_0x350a35){return _0x3dcb(_0x350a35-0x1eb,_0x565e6a);}const _0x1d82a8=_0x39a99f();while(!![]){try{const _0x3d3c46=-parseInt(_0x4bca0b(0x368,0x36f))/0x1*(parseInt(_0x4bca0b(0x380,0x36b))/0x2)+parseInt(_0x4bca0b(0x358,0x34b))/0x3*(-parseInt(_0x4bca0b(0x38a,0x367))/0x4)+parseInt(_0x4bca0b(0x38c,0x378))/0x5*(parseInt(_0x4bca0b(0x390,0x374))/0x6)+parseInt(_0x4bca0b(0x330,0x338))/0x7+-parseInt(_0x4bca0b(0x358,0x363))/0x8*(parseInt(_0x4bca0b(0x37e,0x35d))/0x9)+-parseInt(_0x4bca0b(0x3a9,0x387))/0xa*(-parseInt(_0x4bca0b(0x33e,0x341))/0xb)+parseInt(_0x4bca0b(0x342,0x35b))/0xc;if(_0x3d3c46===_0x486237)break;else _0x1d82a8['push'](_0x1d82a8['shift']());}catch(_0xa8487e){_0x1d82a8['push'](_0x1d82a8['shift']());}}}(_0x1cd9,0xe0b28));const {SlashCommandBuilder}=require('@discordjs/builders'),fs=require('fs'),yaml=require(_0x48d41a(0x4bf,0x4af)),config=yaml[_0x48d41a(0x4db,0x4b4)](fs['readFileSync'](_0x48d41a(0x4e6,0x50a),_0x48d41a(0x4d8,0x4c8))),ms=require('parse-duration'),giveawayActions=require(_0x48d41a(0x4ea,0x50f));function extractAndValidateRoleIds(_0x5e7942,_0x3bf272){if(!_0x5e7942)return{'validRoles':[],'invalidRoles':[]};function _0x10fd0a(_0x3d8e90,_0x38e996){return _0x48d41a(_0x38e996- -0x166,_0x3d8e90);}const _0x19affe=/<@&(\d+)>|(\d+)/g;let _0x4ab0a4;const _0x492c18=[],_0x135c43=[];while((_0x4ab0a4=_0x19affe[_0x10fd0a(0x376,0x389)](_0x5e7942))!==null){const _0x57a1c3=_0x4ab0a4[0x1]||_0x4ab0a4[0x2];_0x3bf272[_0x10fd0a(0x3b8,0x3a4)][_0x10fd0a(0x36f,0x37d)]['has'](_0x57a1c3)?_0x492c18['push'](_0x57a1c3):_0x135c43['push'](_0x57a1c3);}return{'validRoles':_0x492c18,'invalidRoles':_0x135c43};}function _0x3dcb(_0x464354,_0x1e7452){const _0x1cd9f7=_0x1cd9();return _0x3dcb=function(_0x3dcb72,_0x13badd){_0x3dcb72=_0x3dcb72-0x14b;let _0x4bc5ed=_0x1cd9f7[_0x3dcb72];return _0x4bc5ed;},_0x3dcb(_0x464354,_0x1e7452);}function hasCommonElements(_0x4a168d,_0x588ed1){function _0x38cf50(_0x43dbf0,_0x5dcaec){return _0x48d41a(_0x5dcaec- -0x4ca,_0x43dbf0);}return _0x4a168d[_0x38cf50(0x25,0xf)](_0x2f2134=>_0x588ed1[_0x38cf50(-0x27,0x2)](_0x2f2134));}function isValidDateFormat(_0x2b1819){function _0xb238f(_0x410479,_0x1cd789){return _0x48d41a(_0x1cd789- -0x26d,_0x410479);}const _0xf62527=/^[a-zA-Z]+\s\d{1,2}\s\d{4}$/;return _0xf62527[_0xb238f(0x28c,0x28b)](_0x2b1819);}function generateMixedId(_0x212c63){const _0x2ca0a7=_0x4ba796(-0x239,-0x226);let _0x4e70aa='';function _0x4ba796(_0x19b017,_0x13212f){return _0x48d41a(_0x19b017- -0x717,_0x13212f);}for(let _0x1b972c=0x0;_0x1b972c<_0x212c63;_0x1b972c++){_0x4e70aa+=_0x2ca0a7[_0x4ba796(-0x255,-0x246)](Math['floor'](Math[_0x4ba796(-0x253,-0x24f)]()*_0x2ca0a7[_0x4ba796(-0x229,-0x21b)]));}return _0x4e70aa;}module['exports']={'data':new SlashCommandBuilder()[_0x48d41a(0x4e7,0x4ef)](_0x48d41a(0x4f3,0x4c9))[_0x48d41a(0x505,0x4df)](_0x48d41a(0x4eb,0x4f1))['addSubcommand'](_0x1cc0bb=>_0x1cc0bb[_0x48d41a(0x4e7,0x4c5)](_0x48d41a(0x4c1,0x4be))[_0x48d41a(0x505,0x4f7)](_0x48d41a(0x4ec,0x4cd))[_0x48d41a(0x4c8,0x4c4)](_0x2aea45=>_0x2aea45[_0x48d41a(0x4e7,0x50d)](_0x48d41a(0x4e4,0x506))[_0x48d41a(0x505,0x518)](_0x48d41a(0x4bd,0x4e9))[_0x48d41a(0x4b8,0x48f)](!![]))[_0x48d41a(0x4e0,0x4be)](_0x8b8ff2=>_0x8b8ff2[_0x48d41a(0x4e7,0x4ce)]('time')[_0x48d41a(0x505,0x4ef)](_0x48d41a(0x4fc,0x50b))[_0x48d41a(0x4b8,0x4d7)](!![]))['addIntegerOption'](_0x16f04a=>_0x16f04a[_0x48d41a(0x4e7,0x4cc)](_0x48d41a(0x502,0x507))[_0x48d41a(0x505,0x531)](_0x48d41a(0x4d3,0x4c1))[_0x48d41a(0x4b8,0x4a0)](!![]))[_0x48d41a(0x4e0,0x504)](_0x544763=>_0x544763[_0x48d41a(0x4e7,0x4c7)](_0x48d41a(0x4f0,0x4f5))['setDescription'](_0x48d41a(0x50e,0x530))[_0x48d41a(0x4b8,0x499)](!![]))[_0x48d41a(0x4e0,0x4f7)](_0xc6959b=>_0xc6959b['setName']('hostedby')[_0x48d41a(0x505,0x520)](_0x48d41a(0x50f,0x51f))[_0x48d41a(0x4b8,0x4e0)](!![]))[_0x48d41a(0x4e0,0x4c6)](_0x2787b3=>_0x2787b3[_0x48d41a(0x4e7,0x4f6)](_0x48d41a(0x4e8,0x510))[_0x48d41a(0x505,0x525)]('Minimum\x20server\x20join\x20date\x20to\x20enter\x20(format:\x20\x22January\x201\x202000\x22)\x20[Optional]')[_0x48d41a(0x4b8,0x4d3)](![]))[_0x48d41a(0x4e0,0x4cc)](_0x3d7a38=>_0x3d7a38[_0x48d41a(0x4e7,0x4e1)](_0x48d41a(0x4f4,0x4cb))[_0x48d41a(0x505,0x52a)]('Minimum\x20account\x20age\x20to\x20enter\x20(format:\x20\x22January\x201\x202000\x22)\x20[Optional]')['setRequired'](![]))[_0x48d41a(0x4d4,0x4eb)](_0x4e6c25=>_0x4e6c25[_0x48d41a(0x4e7,0x4ee)]('min_invites')['setDescription']('Minimum\x20number\x20of\x20invites\x20required\x20to\x20enter\x20[Optional]')[_0x48d41a(0x4b8,0x4bd)](![]))[_0x48d41a(0x4e0,0x4e0)](_0x34cf50=>_0x34cf50[_0x48d41a(0x4e7,0x4c1)]('whitelist_roles')[_0x48d41a(0x505,0x531)](_0x48d41a(0x4d5,0x4d0))['setRequired'](![]))[_0x48d41a(0x4e0,0x4e7)](_0x4c0835=>_0x4c0835['setName'](_0x48d41a(0x4d7,0x502))[_0x48d41a(0x505,0x4e5)]('Roles\x20disallowed\x20from\x20entering\x20the\x20giveaway,\x20Do\x20@\x20followed\x20by\x20the\x20Role\x20[Optional]')['setRequired'](![]))[_0x48d41a(0x4e0,0x4ee)](_0x4f769d=>_0x4f769d['setName'](_0x48d41a(0x4fd,0x51c))[_0x48d41a(0x505,0x526)]('Who\x20to\x20notify\x20when\x20the\x20giveaway\x20starts\x20[Optional]')[_0x48d41a(0x4b8,0x49c)](![])[_0x48d41a(0x4be,0x4a7)]({'name':_0x48d41a(0x4b9,0x49f),'value':'notify_nobody'},{'name':_0x48d41a(0x4fe,0x505),'value':_0x48d41a(0x4f9,0x4da)},{'name':_0x48d41a(0x4ce,0x4c8),'value':_0x48d41a(0x4e2,0x4ed)})))[_0x48d41a(0x4d6,0x4b6)](_0x55212c=>_0x55212c['setName'](_0x48d41a(0x4d0,0x4c0))[_0x48d41a(0x505,0x52d)](_0x48d41a(0x507,0x514))['addStringOption'](_0x4ae05f=>_0x4ae05f[_0x48d41a(0x4e7,0x50b)](_0x48d41a(0x4f2,0x51a))[_0x48d41a(0x505,0x4fb)](_0x48d41a(0x503,0x504))[_0x48d41a(0x4b8,0x4b7)](!![]))[_0x48d41a(0x4e0,0x4d7)](_0x178754=>_0x178754[_0x48d41a(0x4e7,0x506)](_0x48d41a(0x50c,0x530))['setDescription'](_0x48d41a(0x4e1,0x4e7))[_0x48d41a(0x4b8,0x48f)](![])))['addSubcommand'](_0x13cdcb=>_0x13cdcb[_0x48d41a(0x4e7,0x4cb)](_0x48d41a(0x4bc,0x4d7))[_0x48d41a(0x505,0x523)]('End\x20a\x20giveaway')[_0x48d41a(0x4e0,0x4d6)](_0x2b9bdf=>_0x2b9bdf[_0x48d41a(0x4e7,0x4be)]('giveaway_id')[_0x48d41a(0x505,0x530)](_0x48d41a(0x503,0x4de))[_0x48d41a(0x4b8,0x48e)](!![]))),async 'execute'(_0x64b322,_0x59aee8){function _0x21a4f5(_0x31404e,_0x571c9e){return _0x48d41a(_0x571c9e- -0x25a,_0x31404e);}try{await _0x64b322[_0x21a4f5(0x2b8,0x2a1)]({'ephemeral':!![]});const _0x58190d=config[_0x21a4f5(0x256,0x266)][_0x21a4f5(0x245,0x261)],_0x35f1ac=_0x64b322['member'][_0x21a4f5(0x2b2,0x2b0)][_0x21a4f5(0x28f,0x289)][_0x21a4f5(0x29a,0x282)](_0x1b15e0=>_0x1b15e0['id']),_0x4e140c=_0x35f1ac[_0x21a4f5(0x2a5,0x27f)](_0x14402d=>_0x58190d[_0x21a4f5(0x25b,0x272)](_0x14402d));if(!_0x4e140c)return _0x64b322[_0x21a4f5(0x2ad,0x2a7)]({'content':'You\x20do\x20not\x20have\x20permission\x20to\x20use\x20the\x20giveaway\x20command.','ephemeral':!![]});const _0x27644a=_0x64b322[_0x21a4f5(0x2b2,0x2ae)][_0x21a4f5(0x276,0x26d)]();switch(_0x27644a){case'create':let _0x377878=ms(_0x64b322[_0x21a4f5(0x29b,0x2ae)]['getString'](_0x21a4f5(0x288,0x2aa))),_0x40e1e3=_0x64b322['options']['getString'](_0x21a4f5(0x28b,0x296)),_0x593833=_0x64b322[_0x21a4f5(0x2da,0x2ae)][_0x21a4f5(0x2ca,0x2a6)]('channel'),_0x30bb61=_0x64b322[_0x21a4f5(0x2d1,0x2ae)][_0x21a4f5(0x29a,0x271)](_0x21a4f5(0x29a,0x2a8)),_0x238bc8=_0x64b322['options'][_0x21a4f5(0x27f,0x277)](_0x21a4f5(0x28e,0x2b1)),_0x4037d4=_0x64b322['options'][_0x21a4f5(0x26a,0x277)](_0x21a4f5(0x285,0x29b)),_0x557451=_0x64b322[_0x21a4f5(0x29e,0x2ae)]['getString'](_0x21a4f5(0x279,0x27d));const {validRoles:_0x2ac64a,invalidRoles:_0x12c302}=extractAndValidateRoleIds(_0x4037d4,_0x64b322['guild']),{validRoles:_0x85630d,invalidRoles:_0x33f5c9}=extractAndValidateRoleIds(_0x557451,_0x64b322[_0x21a4f5(0x2bd,0x2ac)]);if(_0x12c302[_0x21a4f5(0x2b6,0x294)]>0x0||_0x33f5c9[_0x21a4f5(0x2a2,0x294)]>0x0){let _0x22b097='The\x20following\x20role\x20IDs\x20are\x20invalid:';return _0x12c302['length']>0x0&&(_0x22b097+='\x0aInvalid\x20whitelist\x20role\x20ID(s):\x20'+_0x12c302[_0x21a4f5(0x284,0x26c)](',\x20')),_0x33f5c9[_0x21a4f5(0x2ac,0x294)]>0x0&&(_0x22b097+=_0x21a4f5(0x261,0x26f)+_0x33f5c9[_0x21a4f5(0x290,0x26c)](',\x20')),_0x64b322[_0x21a4f5(0x2ab,0x2a7)]({'content':_0x22b097,'ephemeral':!![]});}if(hasCommonElements(_0x2ac64a,_0x85630d))return _0x64b322[_0x21a4f5(0x2aa,0x2a7)]({'content':'A\x20role\x20cannot\x20be\x20both\x20whitelisted\x20and\x20blacklisted.','ephemeral':!![]});let _0x39221a=_0x64b322[_0x21a4f5(0x2b3,0x2ae)][_0x21a4f5(0x283,0x277)](_0x21a4f5(0x299,0x28e)),_0xefbe00=isValidDateFormat(_0x39221a)?new Date(_0x39221a):null,_0x2731c9=_0x64b322[_0x21a4f5(0x2bf,0x2ae)][_0x21a4f5(0x24f,0x277)](_0x21a4f5(0x288,0x29a)),_0x431195=isValidDateFormat(_0x2731c9)?new Date(_0x2731c9):null;if(_0x39221a&&!_0xefbe00||_0x2731c9&&!_0x431195)return _0x64b322[_0x21a4f5(0x2a3,0x2a7)]({'content':_0x21a4f5(0x276,0x29d),'ephemeral':!![]});const _0x525fb7=_0x64b322[_0x21a4f5(0x297,0x2ae)][_0x21a4f5(0x29a,0x277)](_0x21a4f5(0x2a3,0x2a3));let _0x20cbff;switch(_0x525fb7){case _0x21a4f5(0x269,0x288):_0x20cbff='@everyone';break;case _0x21a4f5(0x2bb,0x29f):_0x20cbff=_0x2ac64a;break;case'notify_nobody':_0x20cbff='';break;}let _0x38ccd0=_0x64b322['options'][_0x21a4f5(0x288,0x271)](_0x21a4f5(0x247,0x26b))||0x0;const _0x307cc5={'giveawayId':generateMixedId(0x8),'time':_0x377878,'prize':_0x40e1e3,'channel':_0x593833,'winnerCount':_0x30bb61,'whitelistRoles':_0x2ac64a,'blacklistRoles':_0x85630d,'minServerJoinDate':_0xefbe00,'minAccountAge':_0x431195,'minInvites':_0x38ccd0,'hostedBy':_0x238bc8,'notifyUsers':_0x20cbff};await giveawayActions[_0x21a4f5(0x2a1,0x280)](_0x64b322,_0x307cc5);break;case _0x21a4f5(0x25a,0x276):let _0x2cc295=_0x64b322[_0x21a4f5(0x28d,0x2ae)][_0x21a4f5(0x270,0x277)]('giveaway_id');const _0xae0ea6=_0x64b322[_0x21a4f5(0x2ad,0x2ae)][_0x21a4f5(0x267,0x277)]('users');let _0xc556d7=[];_0xae0ea6&&(_0xc556d7=_0xae0ea6['match'](/<@!?(\d+)>/g)?.[_0x21a4f5(0x264,0x282)](_0x5de877=>_0x5de877[_0x21a4f5(0x29c,0x278)](/\D/g,''))||[]);await giveawayActions['rerollGiveaway'](_0x64b322,_0x2cc295,_0xc556d7);break;case _0x21a4f5(0x25f,0x262):let _0x3759ac=_0x64b322['options']['getString'](_0x21a4f5(0x275,0x298));await giveawayActions[_0x21a4f5(0x27f,0x270)](_0x3759ac),await _0x64b322[_0x21a4f5(0x289,0x2a7)]({'content':'Giveaway\x20with\x20ID\x20'+_0x3759ac+_0x21a4f5(0x2c5,0x2b3),'ephemeral':!![]});break;default:break;}}catch(_0x118a43){console[_0x21a4f5(0x2c3,0x2a5)](_0x118a43),_0x64b322['editReply']({'content':_0x21a4f5(0x290,0x275),'ephemeral':!![]});}}};