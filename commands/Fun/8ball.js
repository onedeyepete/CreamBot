(function(_0x5805fd,_0x2e1f91){const _0x1c1813=_0x5805fd();function _0x10cd21(_0x3d713f,_0x2ec0e0){return _0x257c(_0x3d713f-0x1b,_0x2ec0e0);}while(!![]){try{const _0x5dc515=parseInt(_0x10cd21(0x107,0x117))/0x1*(-parseInt(_0x10cd21(0x108,0x10b))/0x2)+-parseInt(_0x10cd21(0x112,0x115))/0x3+parseInt(_0x10cd21(0x11d,0x11a))/0x4+parseInt(_0x10cd21(0x102,0xee))/0x5*(parseInt(_0x10cd21(0xfb,0xf5))/0x6)+-parseInt(_0x10cd21(0x122,0x119))/0x7*(parseInt(_0x10cd21(0xff,0x112))/0x8)+-parseInt(_0x10cd21(0x115,0x125))/0x9+parseInt(_0x10cd21(0xf8,0xe9))/0xa;if(_0x5dc515===_0x2e1f91)break;else _0x1c1813['push'](_0x1c1813['shift']());}catch(_0x7e98a9){_0x1c1813['push'](_0x1c1813['shift']());}}}(_0x1265,0x72731));function _0x257c(_0x5e0f5f,_0x276c84){const _0x1265d4=_0x1265();return _0x257c=function(_0x257c42,_0x1e5cab){_0x257c42=_0x257c42-0xd7;let _0x81cadb=_0x1265d4[_0x257c42];return _0x81cadb;},_0x257c(_0x5e0f5f,_0x276c84);}function _0x22f158(_0x251ea4,_0x400d53){return _0x257c(_0x251ea4- -0x243,_0x400d53);}const {SlashCommandBuilder,EmbedBuilder}=require('discord.js'),fs=require('fs'),yaml=require(_0x22f158(-0x16c,-0x172)),config=yaml[_0x22f158(-0x146,-0x12f)](fs['readFileSync'](_0x22f158(-0x151,-0x168),_0x22f158(-0x142,-0x14c))),lang=yaml[_0x22f158(-0x146,-0x139)](fs[_0x22f158(-0x13d,-0x14b)](_0x22f158(-0x143,-0x12c),_0x22f158(-0x142,-0x155)));function convertSimplePatternToRegex(_0x25ea9d){let _0x4fcd02=_0x25ea9d[_0x46d67d(-0xa4,-0x9b)](/\./g,'\x5c.')[_0x46d67d(-0xb0,-0x9b)](/\*/g,'.*');function _0x46d67d(_0xa5cab1,_0x28ba90){return _0x22f158(_0x28ba90-0xd0,_0xa5cab1);}return new RegExp('^'+_0x4fcd02+'$','i');}async function checkBlacklistWords(_0x1b0718){function _0x25a189(_0x613277,_0x3e5ce6){return _0x22f158(_0x3e5ce6-0x4f6,_0x613277);}const _0x416d43=config[_0x25a189(0x3c0,0x3b2)][_0x25a189(0x3bc,0x3a8)][_0x25a189(0x3a9,0x391)](_0x37e895=>convertSimplePatternToRegex(_0x37e895));return _0x416d43[_0x25a189(0x394,0x3a1)](_0x5943bc=>_0x5943bc['test'](_0x1b0718));}module['exports']={'data':new SlashCommandBuilder()[_0x22f158(-0x153,-0x154)](_0x22f158(-0x15a,-0x154))['setDescription'](_0x22f158(-0x169,-0x15c))['addStringOption'](_0x3d65ef=>_0x3d65ef[_0x22f158(-0x153,-0x164)]('question')[_0x22f158(-0x15e,-0x150)]('The\x20question\x20to\x20ask\x20the\x20bot')[_0x22f158(-0x154,-0x165)](!![])),async 'execute'(_0x167d28,_0x196e96){function _0x166c1e(_0xadb76e,_0x8b8aaa){return _0x22f158(_0x8b8aaa- -0x16c,_0xadb76e);}try{let _0x7db883=_0x167d28[_0x166c1e(-0x2b1,-0x2c9)][_0x166c1e(-0x2bb,-0x2b7)](_0x166c1e(-0x2a0,-0x2aa));if(await checkBlacklistWords(_0x7db883)){const _0x7a2763=lang['BlacklistWords']&&lang[_0x166c1e(-0x2b6,-0x2b0)][_0x166c1e(-0x2e1,-0x2cd)]?lang['BlacklistWords'][_0x166c1e(-0x2de,-0x2cd)]['replace'](/{user}/g,''+_0x167d28[_0x166c1e(-0x2ac,-0x2be)]):_0x166c1e(-0x2b2,-0x2b4);return _0x167d28[_0x166c1e(-0x2c9,-0x2bb)]({'content':_0x7a2763,'ephemeral':!![]});}let _0x379f1d=lang[_0x166c1e(-0x2c1,-0x2b9)],_0x4f72d3=Math[_0x166c1e(-0x2e4,-0x2ce)](Math[_0x166c1e(-0x2b7,-0x2ac)]()*_0x379f1d[_0x166c1e(-0x2ae,-0x2b6)]),_0x2e658b=new EmbedBuilder()[_0x166c1e(-0x29b,-0x2ab)](config[_0x166c1e(-0x2b0,-0x2bc)])[_0x166c1e(-0x2b7,-0x2c7)]('🔮\x208Ball')[_0x166c1e(-0x2d5,-0x2d6)]([{'name':_0x166c1e(-0x2e0,-0x2d4),'value':_0x7db883},{'name':_0x166c1e(-0x2bf,-0x2d3),'value':_0x379f1d[_0x4f72d3]}])[_0x166c1e(-0x2c3,-0x2cc)]({'text':_0x166c1e(-0x299,-0x2b1),'iconURL':_0x167d28[_0x166c1e(-0x2b5,-0x2be)][_0x166c1e(-0x2dd,-0x2d0)]()})['setTimestamp']();_0x167d28[_0x166c1e(-0x2c7,-0x2bb)]({'embeds':[_0x2e658b]});}catch(_0x188546){console[_0x166c1e(-0x2b1,-0x2c5)](_0x166c1e(-0x2c7,-0x2c4),_0x188546),_0x167d28[_0x166c1e(-0x2c2,-0x2bb)]({'content':_0x166c1e(-0x2c3,-0x2b3),'ephemeral':!![]});}}};function _0x1265(){const _0x10b336=['load','Magic\x20Ball','BlacklistWords','./lang.yml','utf8','2295492gduvoF','random','setColor','question','readFileSync','12509tXpAPQ','js-yaml','replace','addFields','Ask\x20the\x20bot\x20a\x20question','Question','Answer','6302530MnHUBC','map','avatarURL','4686bjQXgs','floor','Message','setFooter','1384KRVtCe','setDescription','options','1985itVvIg','setTitle','8ball','error','Error\x20in\x208ball\x20command:\x20','94238dmsLNn','4UhkOjN','some','setRequired','setName','user','./config.yml','EmbedColors','reply','Patterns','EightBallReplies','1474569xcKHkQ','getString','length','506232PArrPb','Your\x20question\x20contains\x20blacklisted\x20words.','Sorry,\x20there\x20was\x20an\x20error\x20processing\x20your\x20question.'];_0x1265=function(){return _0x10b336;};return _0x1265();}