(function(_0x122622,_0x1dbfc7){function _0x3137d1(_0x4aaf9e,_0x1f2454){return _0xef35(_0x4aaf9e-0x221,_0x1f2454);}const _0x45ad16=_0x122622();while(!![]){try{const _0x5963bb=parseInt(_0x3137d1(0x413,0x40a))/0x1+-parseInt(_0x3137d1(0x43e,0x436))/0x2+-parseInt(_0x3137d1(0x41d,0x40b))/0x3*(parseInt(_0x3137d1(0x44c,0x45e))/0x4)+parseInt(_0x3137d1(0x436,0x459))/0x5+-parseInt(_0x3137d1(0x41f,0x444))/0x6+parseInt(_0x3137d1(0x443,0x422))/0x7+parseInt(_0x3137d1(0x431,0x450))/0x8;if(_0x5963bb===_0x1dbfc7)break;else _0x45ad16['push'](_0x45ad16['shift']());}catch(_0xc3802a){_0x45ad16['push'](_0x45ad16['shift']());}}}(_0x3281,0xb4c70));function _0xef35(_0x78daec,_0x2d819b){const _0x3281b1=_0x3281();return _0xef35=function(_0xef3567,_0x39b9d2){_0xef3567=_0xef3567-0x1f2;let _0x28e703=_0x3281b1[_0xef3567];return _0x28e703;},_0xef35(_0x78daec,_0x2d819b);}const {SlashCommandBuilder,EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle,PermissionsBitField}=require('discord.js'),BackupModel=require('../../models/Backup'),backup=require('discord-backup'),yaml=require(_0x211943(-0x36,-0x19));function _0x211943(_0x501f13,_0x4334de){return _0xef35(_0x4334de- -0x22d,_0x501f13);}const fs=require('fs'),config=yaml[_0x211943(0x29,0xb)](fs[_0x211943(-0x22,-0x1)]('././config.yml',_0x211943(-0x7,-0x21))),lang=yaml[_0x211943(0x6,0xb)](fs[_0x211943(0x16,-0x1)](_0x211943(-0xc,-0xc),_0x211943(-0x44,-0x21)));module[_0x211943(-0x28,-0x37)]={'data':new SlashCommandBuilder()['setName']('backup')[_0x211943(-0x6,-0x17)](_0x211943(0x12,-0x12))[_0x211943(-0x1b,-0x26)](_0x352adf=>_0x352adf['setName'](_0x211943(-0x18,-0x39))[_0x211943(-0x27,-0x17)]('Create\x20a\x20backup\x20of\x20the\x20server'))[_0x211943(-0x49,-0x26)](_0x2b4275=>_0x2b4275[_0x211943(0x16,-0xe)](_0x211943(-0x34,-0x23))[_0x211943(0x2,-0x17)]('Delete\x20a\x20backup')['addStringOption'](_0x943b41=>_0x943b41[_0x211943(0x5,-0xe)]('id')[_0x211943(-0x2d,-0x17)](_0x211943(0x3,0x9))[_0x211943(-0x2a,-0x1a)](!![])))[_0x211943(-0x2,-0x26)](_0x198b76=>_0x198b76[_0x211943(0x14,-0xe)](_0x211943(0xb,0xb))[_0x211943(-0x1,-0x17)]('Load\x20a\x20backup')[_0x211943(-0x7,-0x2a)](_0xfdbbf1=>_0xfdbbf1[_0x211943(0x4,-0xe)]('id')[_0x211943(-0x13,-0x17)]('The\x20backup\x20ID')[_0x211943(-0x1,-0x1a)](!![])))[_0x211943(-0x40,-0x26)](_0x52a80c=>_0x52a80c[_0x211943(-0x2d,-0xe)](_0x211943(-0x39,-0x20))[_0x211943(-0x3c,-0x17)](_0x211943(-0x29,-0x34)))[_0x211943(-0x1d,-0x26)](_0x27add9=>_0x27add9[_0x211943(0xd,-0xe)]('info')[_0x211943(0xc,-0x17)](_0x211943(0x5,0x1))['addStringOption'](_0x458ce7=>_0x458ce7[_0x211943(-0x2e,-0xe)]('id')[_0x211943(-0x2a,-0x17)](_0x211943(0x2b,0x9))[_0x211943(-0x34,-0x1a)](!![]))),async 'execute'(_0x25a3f7,_0x5cc23d){const _0x73b184=config[_0x1ba52a(-0x19a,-0x18e)][_0x1ba52a(-0x1b0,-0x191)],_0x5f789f=_0x73b184['some'](_0x597b2d=>_0x25a3f7[_0x1ba52a(-0x196,-0x1b4)][_0x1ba52a(-0x192,-0x19c)][_0x1ba52a(-0x195,-0x17f)]['has'](_0x597b2d));if(!_0x5f789f)return _0x25a3f7[_0x1ba52a(-0x19a,-0x17d)]({'content':lang[_0x1ba52a(-0x192,-0x19e)],'ephemeral':!![]});const _0x38af2d=_0x25a3f7[_0x1ba52a(-0x18f,-0x195)][_0x1ba52a(-0x188,-0x1a6)](),_0x13e307=_0x25a3f7[_0x1ba52a(-0x17b,-0x195)][_0x1ba52a(-0x1cf,-0x1af)]('id');function _0x1ba52a(_0xd42473,_0x341188){return _0x211943(_0xd42473,_0x341188- -0x18b);}switch(_0x38af2d){case _0x1ba52a(-0x1ad,-0x1c4):await createBackup(_0x25a3f7);break;case _0x1ba52a(-0x1ad,-0x1ae):await deleteBackup(_0x25a3f7,_0x13e307);break;case _0x1ba52a(-0x15c,-0x180):await loadBackup(_0x25a3f7,_0x13e307);break;case _0x1ba52a(-0x1b3,-0x1ab):await listBackups(_0x25a3f7);break;case'info':await backupInfo(_0x25a3f7,_0x13e307);break;default:await _0x25a3f7[_0x1ba52a(-0x176,-0x17d)]({'content':_0x1ba52a(-0x1bf,-0x1bd),'ephemeral':!![]});}}};async function createBackup(_0x19f8f9){function _0x11b336(_0x481932,_0x320fa4){return _0x211943(_0x320fa4,_0x481932- -0xb2);}await _0x19f8f9[_0x11b336(-0xa4,-0xc8)]({'content':lang[_0x11b336(-0xbb,-0xa6)],'ephemeral':!![]});try{const _0x31fdb4={'maxMessagesPerChannel':0x3e8,'jsonBeautify':!![],'saveImages':'base64','doNotBackup':[],'doNotSave':[]},_0x3bd1c7=await backup[_0x11b336(-0xeb,-0xf5)](_0x19f8f9[_0x11b336(-0xe5,-0xf4)],_0x31fdb4),_0x3c0a07=new BackupModel({'backupId':_0x3bd1c7['id'],'guildId':_0x19f8f9[_0x11b336(-0xe5,-0x107)]['id'],'data':_0x3bd1c7,'createdAt':new Date()});await _0x3c0a07[_0x11b336(-0xde,-0xcc)]();const _0x3eedf5=new EmbedBuilder()[_0x11b336(-0xc6,-0xe0)]({'name':lang[_0x11b336(-0xab,-0xca)],'iconURL':'https://i.imgur.com/7SlmRRa.png'})[_0x11b336(-0xa8,-0x93)](config['SuccessEmbedColor'])['setDescription'](_0x11b336(-0xac,-0x92)+_0x3bd1c7['id']);await _0x19f8f9[_0x11b336(-0xdf,-0xcb)]({'embeds':[_0x3eedf5],'ephemeral':!![]});}catch(_0x220ca4){console[_0x11b336(-0xd0,-0xd2)](_0x11b336(-0xc8,-0xd1),_0x220ca4),await _0x19f8f9[_0x11b336(-0xdf,-0xdc)]({'content':_0x11b336(-0xaa,-0xa9),'ephemeral':!![]});}}async function deleteBackup(_0x5624e0,_0x18e349){function _0xbcba4(_0x422cc6,_0x27b364){return _0x211943(_0x27b364,_0x422cc6- -0xb3);}try{const _0x4f662f=await BackupModel[_0xbcba4(-0xe9,-0x102)]({'backupId':_0x18e349});if(!_0x4f662f){const _0x35ea7a=new EmbedBuilder()[_0xbcba4(-0xc7,-0xdd)]({'name':lang[_0xbcba4(-0xc8,-0xd4)],'iconURL':_0xbcba4(-0xed,-0xf0)})['setColor'](config[_0xbcba4(-0xe8,-0x10d)])[_0xbcba4(-0xca,-0xc8)]('No\x20backup\x20found\x20with\x20ID:\x20'+_0x18e349);await _0x5624e0['reply']({'embeds':[_0x35ea7a],'ephemeral':!![]});return;}const _0x1c7120=new EmbedBuilder()[_0xbcba4(-0xc7,-0xd4)]({'name':lang[_0xbcba4(-0xac,-0x9c)],'iconURL':_0xbcba4(-0xba,-0xc0)})[_0xbcba4(-0xa9,-0xae)](config[_0xbcba4(-0xbb,-0xd7)])[_0xbcba4(-0xca,-0xd0)](_0xbcba4(-0xe1,-0x103));await _0x5624e0[_0xbcba4(-0xa5,-0xc4)]({'embeds':[_0x1c7120],'ephemeral':!![]});}catch(_0xb324dd){console['error'](_0xbcba4(-0xb0,-0xb1),_0xb324dd);const _0x1cdfa1=new EmbedBuilder()['setAuthor']({'name':lang['ErrorEmbedTitle'],'iconURL':'https://i.imgur.com/MdiCK2c.png'})[_0xbcba4(-0xa9,-0xc3)](config[_0xbcba4(-0xe8,-0xda)])[_0xbcba4(-0xca,-0xa5)](_0xbcba4(-0xcf,-0xc3)+_0xb324dd[_0xbcba4(-0xeb,-0xde)]);await _0x5624e0[_0xbcba4(-0xa5,-0xb3)]({'embeds':[_0x1cdfa1],'ephemeral':!![]});}}async function loadBackup(_0x18832f,_0x359a19){function _0x1ee5c2(_0x54836e,_0x48ba6f){return _0x211943(_0x54836e,_0x48ba6f- -0xfb);}try{const _0x2ba11b=await BackupModel[_0x1ee5c2(-0x11f,-0x10a)]({'backupId':_0x359a19});if(!_0x2ba11b){await _0x18832f[_0x1ee5c2(-0x100,-0xed)]({'content':_0x1ee5c2(-0x118,-0x12b)+_0x359a19,'ephemeral':!![]});return;}await backup[_0x1ee5c2(-0xcf,-0xf0)](_0x359a19,_0x18832f[_0x1ee5c2(-0x144,-0x12e)]),await _0x18832f[_0x1ee5c2(-0x10d,-0xed)]({'content':_0x1ee5c2(-0x102,-0xf9),'ephemeral':!![]});}catch(_0x6b1636){console[_0x1ee5c2(-0x107,-0x119)](_0x1ee5c2(-0x106,-0x126),_0x6b1636),await _0x18832f[_0x1ee5c2(-0x110,-0xed)]({'content':_0x1ee5c2(-0x112,-0x120)+_0x6b1636[_0x1ee5c2(-0x13e,-0x133)],'ephemeral':!![]});}}async function listBackups(_0x14a803){function _0x820c0e(_0x2148f1,_0x3b2a1c){return _0x211943(_0x2148f1,_0x3b2a1c-0x186);}try{const _0xb5b278=await BackupModel['find']({'guildId':_0x14a803[_0x820c0e(0x178,0x153)]['id']});if(_0xb5b278['length']===0x0){await _0x14a803[_0x820c0e(0x173,0x194)]({'content':'No\x20backups\x20available.','ephemeral':!![]});return;}const _0x10c161=_0xb5b278['map']((_0x325fec,_0x1238b1)=>{function _0x242c7f(_0x14a91f,_0x43411c){return _0x820c0e(_0x14a91f,_0x43411c- -0x9b);}return _0x242c7f(0xca,0xef)+_0x325fec['backupId']+_0x242c7f(0x106,0xf8)+_0x325fec[_0x242c7f(0xbd,0xc4)][_0x242c7f(0xd0,0xf0)]();})['join']('\x0a');await _0x14a803[_0x820c0e(0x18d,0x194)]({'content':'Available\x20Backups:\x0a'+_0x10c161,'ephemeral':!![]});}catch(_0x8e279d){console[_0x820c0e(0x16f,0x168)](_0x820c0e(0x18e,0x181),_0x8e279d),await _0x14a803[_0x820c0e(0x177,0x194)]({'content':'An\x20error\x20occurred\x20while\x20listing\x20the\x20backups.','ephemeral':!![]});}}function _0x3281(){const _0xb61ae5=['guild','Unknown\x20subcommand','278232XSShrs','No\x20backup\x20found\x20with\x20ID:\x20','5772840yHdmQQ','Backup\x20deleted\x20successfully.','followUp','save','Error\x20loading\x20backup:','addStringOption','member','\x0aGuild\x20ID:\x20','createdAt','addSubcommand','An\x20error\x20occurred\x20while\x20loading\x20the\x20backup:\x20','getString','delete','guildId','utf8','list','An\x20error\x20occurred\x20while\x20retrieving\x20backup\x20information:\x20','error','11752672grPKCk','An\x20error\x20occurred\x20while\x20trying\x20to\x20delete\x20the\x20backup:\x20','getSubcommand','setRequired','js-yaml','4182230rpWuXK','setDescription','Error\x20creating\x20backup:','ErrorEmbedTitle','setAuthor','NoPermsMessage','Manage\x20server\x20backups','roles','524904cJmOkM','findOne','setName','backupId','././lang.yml','78694ExCZuO','options','BackupCreating','SuccessEmbedColor','https://i.imgur.com/7SlmRRa.png','backup','Error\x20listing\x20backups:','\x0aCreated:\x20','Backups','20pvSglU','readFileSync','Error\x20retrieving\x20backup\x20info:','Get\x20information\x20about\x20a\x20backup','Backup\x20loaded\x20successfully.','Error\x20deleting\x20backup:','ID:\x20','toLocaleDateString','Backup\x20created\x20successfully.\x20Backup\x20ID:\x20','SuccessEmbedTitle','An\x20error\x20occurred\x20while\x20creating\x20the\x20backup.','The\x20backup\x20ID','setColor','load','cache',',\x20Created:\x20','reply','112004tMcdcV','https://i.imgur.com/MdiCK2c.png','create','message','exports','findOneAndDelete','ErrorEmbedColor','List\x20all\x20server\x20backups'];_0x3281=function(){return _0xb61ae5;};return _0x3281();}async function backupInfo(_0x376fb8,_0x40eb73){function _0x57f6a8(_0x2ae3c6,_0x4b8f4e){return _0x211943(_0x4b8f4e,_0x2ae3c6-0x199);}try{const _0x81f7e8=await BackupModel[_0x57f6a8(0x18a,0x180)]({'backupId':_0x40eb73});if(!_0x81f7e8){await _0x376fb8[_0x57f6a8(0x1a7,0x1bb)]({'content':_0x57f6a8(0x169,0x189)+_0x40eb73,'ephemeral':!![]});return;}const _0x348afc='Backup\x20ID:\x20'+_0x81f7e8[_0x57f6a8(0x18c,0x183)]+_0x57f6a8(0x195,0x199)+_0x81f7e8['createdAt'][_0x57f6a8(0x19e,0x1b0)]()+_0x57f6a8(0x171,0x183)+_0x81f7e8[_0x57f6a8(0x177,0x165)];await _0x376fb8[_0x57f6a8(0x1a7,0x191)]({'content':_0x348afc,'ephemeral':!![]});}catch(_0x4e7679){console[_0x57f6a8(0x17b,0x197)](_0x57f6a8(0x199,0x19c),_0x4e7679),await _0x376fb8['reply']({'content':_0x57f6a8(0x17a,0x177)+_0x4e7679[_0x57f6a8(0x161,0x146)],'ephemeral':!![]});}}