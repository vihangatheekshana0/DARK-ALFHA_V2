const _0x52a890=_0x2355;(function(_0x416f7d,_0x1cb106){const _0x1ff763=_0x2355,_0x245edf=_0x416f7d();while(!![]){try{const _0x407b45=parseInt(_0x1ff763(0x1a9))/0x1*(-parseInt(_0x1ff763(0x1b1))/0x2)+-parseInt(_0x1ff763(0x1a3))/0x3+parseInt(_0x1ff763(0x18b))/0x4*(parseInt(_0x1ff763(0x192))/0x5)+parseInt(_0x1ff763(0x193))/0x6*(parseInt(_0x1ff763(0x1a5))/0x7)+-parseInt(_0x1ff763(0x1c3))/0x8+parseInt(_0x1ff763(0x196))/0x9*(-parseInt(_0x1ff763(0x1b0))/0xa)+parseInt(_0x1ff763(0x1ad))/0xb;if(_0x407b45===_0x1cb106)break;else _0x245edf['push'](_0x245edf['shift']());}catch(_0x1824c2){_0x245edf['push'](_0x245edf['shift']());}}}(_0x4fe4,0x19a17));const {proto,getContentType,jidDecode,downloadContentFromMessage}=require('@whiskeysockets/baileys'),decodeJid=_0x57a702=>{const {user:_0x11d377,server:_0x1a830b}=jidDecode(_0x57a702)||{};return _0x11d377&&_0x1a830b?(_0x11d377+'@'+_0x1a830b)['trim']():_0x57a702;},downloadMedia=async _0x35e731=>{const _0x188e14=_0x2355;let _0x552f7f=Object[_0x188e14(0x1b5)](_0x35e731)[0x0],_0x3dd125=_0x35e731[_0x552f7f];if(_0x552f7f===_0x188e14(0x1af)||_0x552f7f===_0x188e14(0x189)){if(_0x552f7f==='viewOnceMessageV2')_0x3dd125=_0x35e731[_0x188e14(0x189)]?.[_0x188e14(0x1b8)],_0x552f7f=Object[_0x188e14(0x1b5)](_0x3dd125||{})[0x0];else _0x552f7f=Object['keys'](_0x3dd125||{})[0x1];_0x3dd125=_0x3dd125[_0x552f7f];}const _0x1e64bd=await downloadContentFromMessage(_0x3dd125,_0x552f7f[_0x188e14(0x1a1)]('Message',''));let _0x76a6f8=Buffer['from']([]);for await(const _0x2cee56 of _0x1e64bd){_0x76a6f8=Buffer[_0x188e14(0x1b4)]([_0x76a6f8,_0x2cee56]);}return _0x76a6f8;};function serialize(_0x47a9be,_0x35cac0){const _0x1abb84=_0x2355;_0x47a9be[_0x1abb84(0x186)]&&(_0x47a9be['id']=_0x47a9be['key']['id'],_0x47a9be[_0x1abb84(0x190)]=_0x47a9be[_0x1abb84(0x186)][_0x1abb84(0x194)],_0x47a9be['from']=decodeJid(_0x47a9be['key'][_0x1abb84(0x1ac)]),_0x47a9be['isGroup']=_0x47a9be[_0x1abb84(0x19d)][_0x1abb84(0x18a)](_0x1abb84(0x1c0)),_0x47a9be[_0x1abb84(0x1aa)]=_0x47a9be[_0x1abb84(0x1a4)]?decodeJid(_0x47a9be[_0x1abb84(0x186)][_0x1abb84(0x1b6)]):_0x47a9be['isSelf']?decodeJid(_0x35cac0[_0x1abb84(0x18e)]['id']):_0x47a9be['from']);if(_0x47a9be['message']){_0x47a9be[_0x1abb84(0x191)]=getContentType(_0x47a9be[_0x1abb84(0x1b8)]);if(_0x47a9be[_0x1abb84(0x191)]===_0x1abb84(0x19b)){_0x47a9be[_0x1abb84(0x1b8)]=_0x47a9be[_0x1abb84(0x1b8)][_0x47a9be['type']][_0x1abb84(0x1b8)];const _0x1cb13f=Object[_0x1abb84(0x1b5)](_0x47a9be['message'])[0x0];_0x47a9be[_0x1abb84(0x191)]=_0x1cb13f,_0x1cb13f===_0x1abb84(0x189)&&(_0x47a9be['message']=_0x47a9be[_0x1abb84(0x1b8)][_0x47a9be[_0x1abb84(0x191)]][_0x1abb84(0x1b8)],_0x47a9be[_0x1abb84(0x191)]=getContentType(_0x47a9be[_0x1abb84(0x1b8)]));}_0x47a9be[_0x1abb84(0x191)]==='viewOnceMessageV2'&&(_0x47a9be[_0x1abb84(0x1b8)]=_0x47a9be[_0x1abb84(0x1b8)][_0x47a9be[_0x1abb84(0x191)]][_0x1abb84(0x1b8)],_0x47a9be[_0x1abb84(0x191)]=getContentType(_0x47a9be['message']));_0x47a9be[_0x1abb84(0x18f)]=[];const _0x1e62b0=_0x47a9be?.[_0x1abb84(0x1b8)]?.[_0x47a9be['type']]?.[_0x1abb84(0x1c4)]?.[_0x1abb84(0x187)]||[];_0x47a9be[_0x1abb84(0x18f)]['push'](..._0x1e62b0['filter'](Boolean));try{const _0x2fad38=_0x47a9be[_0x1abb84(0x1b8)][_0x47a9be[_0x1abb84(0x191)]]?.['contextInfo'];if(_0x2fad38[_0x1abb84(0x18d)]['ephemeralMessage']){const _0x381bcb=Object[_0x1abb84(0x1b5)](_0x2fad38[_0x1abb84(0x18d)][_0x1abb84(0x19b)]['message'])[0x0];_0x381bcb===_0x1abb84(0x189)?_0x47a9be['quoted']={'type':_0x1abb84(0x1c5),'stanzaId':_0x2fad38[_0x1abb84(0x197)],'participant':decodeJid(_0x2fad38[_0x1abb84(0x1b6)]),'message':_0x2fad38['quotedMessage'][_0x1abb84(0x19b)][_0x1abb84(0x1b8)][_0x1abb84(0x1ae)][_0x1abb84(0x1b8)]}:_0x47a9be[_0x1abb84(0x19a)]={'type':_0x1abb84(0x1bb),'stanzaId':_0x2fad38[_0x1abb84(0x197)],'participant':decodeJid(_0x2fad38[_0x1abb84(0x1b6)]),'message':_0x2fad38[_0x1abb84(0x18d)][_0x1abb84(0x19b)][_0x1abb84(0x1b8)]};}else _0x2fad38[_0x1abb84(0x18d)]['viewOnceMessageV2']?_0x47a9be[_0x1abb84(0x19a)]={'type':'view_once','stanzaId':_0x2fad38[_0x1abb84(0x197)],'participant':decodeJid(_0x2fad38[_0x1abb84(0x1b6)]),'message':_0x2fad38[_0x1abb84(0x18d)][_0x1abb84(0x1ae)][_0x1abb84(0x1b8)]}:_0x47a9be[_0x1abb84(0x19a)]={'type':'normal','stanzaId':_0x2fad38[_0x1abb84(0x197)],'participant':decodeJid(_0x2fad38[_0x1abb84(0x1b6)]),'message':_0x2fad38[_0x1abb84(0x18d)]};_0x47a9be[_0x1abb84(0x19a)][_0x1abb84(0x190)]=_0x47a9be['quoted'][_0x1abb84(0x1b6)]===decodeJid(_0x35cac0[_0x1abb84(0x18e)]['id']),_0x47a9be['quoted'][_0x1abb84(0x1b3)]=Object[_0x1abb84(0x1b5)](_0x47a9be[_0x1abb84(0x19a)][_0x1abb84(0x1b8)])[_0x1abb84(0x198)](_0x539fc7=>_0x539fc7[_0x1abb84(0x19e)](_0x1abb84(0x1bc))||_0x539fc7['includes'](_0x1abb84(0x1bf)))[0x0],_0x47a9be[_0x1abb84(0x19a)][_0x1abb84(0x1a2)]=_0x47a9be[_0x1abb84(0x19a)]['message'][_0x47a9be[_0x1abb84(0x19a)][_0x1abb84(0x1b3)]]?.[_0x1abb84(0x1a2)]||_0x47a9be[_0x1abb84(0x19a)][_0x1abb84(0x1b8)][_0x47a9be[_0x1abb84(0x19a)][_0x1abb84(0x1b3)]]?.[_0x1abb84(0x199)]||_0x47a9be['quoted'][_0x1abb84(0x1b8)][_0x47a9be[_0x1abb84(0x19a)][_0x1abb84(0x1b3)]]?.[_0x1abb84(0x19f)]||_0x47a9be['quoted'][_0x1abb84(0x1b8)][_0x47a9be[_0x1abb84(0x19a)][_0x1abb84(0x1b3)]]?.[_0x1abb84(0x1a8)]?.[_0x1abb84(0x1b7)]||_0x47a9be[_0x1abb84(0x19a)]['message'][_0x47a9be[_0x1abb84(0x19a)][_0x1abb84(0x1b3)]]||'',_0x47a9be['quoted'][_0x1abb84(0x186)]={'id':_0x47a9be[_0x1abb84(0x19a)]['stanzaId'],'fromMe':_0x47a9be['quoted']['isSelf'],'remoteJid':_0x47a9be[_0x1abb84(0x19d)]},_0x47a9be[_0x1abb84(0x19a)]['download']=()=>downloadMedia(_0x47a9be[_0x1abb84(0x19a)]['message']);}catch{_0x47a9be[_0x1abb84(0x19a)]=null;}_0x47a9be[_0x1abb84(0x1b2)]=_0x47a9be[_0x1abb84(0x1b8)]?.[_0x1abb84(0x1bf)]||_0x47a9be[_0x1abb84(0x1b8)]?.[_0x47a9be[_0x1abb84(0x191)]]?.[_0x1abb84(0x1a2)]||_0x47a9be['message']?.[_0x47a9be[_0x1abb84(0x191)]]?.[_0x1abb84(0x19f)]||_0x47a9be[_0x1abb84(0x191)]===_0x1abb84(0x1ba)&&_0x47a9be['message']?.[_0x47a9be[_0x1abb84(0x191)]]?.[_0x1abb84(0x1a7)]?.['selectedRowId']||_0x47a9be[_0x1abb84(0x191)]===_0x1abb84(0x1c2)&&_0x47a9be[_0x1abb84(0x1b8)]?.[_0x47a9be[_0x1abb84(0x191)]]?.[_0x1abb84(0x1a6)]||_0x47a9be[_0x1abb84(0x191)]===_0x1abb84(0x188)&&_0x47a9be[_0x1abb84(0x1b8)]?.[_0x47a9be[_0x1abb84(0x191)]]?.[_0x1abb84(0x1be)]||'',_0x47a9be[_0x1abb84(0x1c1)]=_0x275efc=>_0x35cac0[_0x1abb84(0x1b9)](_0x47a9be[_0x1abb84(0x19d)],{'text':_0x275efc},{'quoted':_0x47a9be}),_0x47a9be['download']=()=>downloadMedia(_0x47a9be[_0x1abb84(0x1b8)]),_0x47a9be[_0x1abb84(0x195)]=_0x35cac0[_0x1abb84(0x1bd)][_0x1abb84(0x1ab)](_0x47a9be['body']),_0x47a9be[_0x1abb84(0x19c)]=_0x35cac0['utils'][_0x1abb84(0x1a0)](_0x47a9be[_0x1abb84(0x1b2)]);}return _0x47a9be;}function _0x2355(_0x412d0c,_0x3b16f7){const _0x4fe466=_0x4fe4();return _0x2355=function(_0x23553a,_0x51c64d){_0x23553a=_0x23553a-0x186;let _0x3f769f=_0x4fe466[_0x23553a];return _0x3f769f;},_0x2355(_0x412d0c,_0x3b16f7);}function _0x4fe4(){const _0xd6f9c1=['from','includes','caption','extractUrls','replace','text','365163vBEonE','isGroup','7koQqZO','selectedButtonId','singleSelectReply','hydratedTemplate','187909OmKLBR','sender','extractNumbers','remoteJid','7208157GpjiCi','viewOnceMessage','buttonsMessage','1738410RDMTVa','2AGLdOG','body','mtype','concat','keys','participant','hydratedContentText','message','sendMessage','listResponseMessage','ephemeral','Message','utils','selectedId','conversation','@g.us','reply','buttonsResponseMessage','1556008RcXfJc','contextInfo','view_once','key','mentionedJid','templateButtonReplyMessage','viewOnceMessageV2','endsWith','92PvZZnA','exports','quotedMessage','user','mentions','isSelf','type','4985FGdelU','628422SjxNmv','fromMe','numbers','9AAISdT','stanzaId','filter','description','quoted','ephemeralMessage','urls'];_0x4fe4=function(){return _0xd6f9c1;};return _0x4fe4();}module[_0x52a890(0x18c)]={'serialize':serialize,'decodeJid':decodeJid};