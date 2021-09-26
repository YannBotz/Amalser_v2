const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Language = require('../language');

const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'janiya', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();

    

    

   

  r_text[0] = "https://www.linkpicture.com/q/20210908_183431.jpg";

    

    

    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '╔════════════════❍ꕥ\n║┏━━⊱ *👾ᴊᴀɴɪʏᴀ ᴏꜰꜰɪᴄɪᴀʟ ʙᴏᴛ👾* \n║┃\n║┣❏ ```.help ❲All Menu❳```\n║┣❏ ```.vtalk```\n║┣❏ ```.xmedia```\n║┣❏ ```.codtts```\n║┣❏ ```.adan```\n║┣❏ ```.print```\n║┣❏ ```.bashmedia```\n║┣❏ ```.addserver```\n║┣❏ ```.term1```\n║┣❏ ```.findvid```\n║┣❏ ```.pmsend```\n║┣❏ ```.pmttssend```\n║┣❏ ```.anime```\n║┣❏ ```.apkmod```\n║┣❏ ```.tatp```\n║┣❏ ```.ttp ❲text❳```\n║┣❏ ```.attp ❲text❳```\n║┣❏ ```.sticker ❲tag photo❳```\n║┣❏ ```.removebg ❲tag photo❳```\n║┣❏ ```.carbon```\n║┣❏ ```.mp3 ❲tag video❳```\n║┣❏ ```.photo ❲tag sticker❳```\n║┣❏ ```.mp4 ❲tag animated sticekr❳```\n║┣❏ ```.txtit```\n║┣❏ ```.emo ❲💋❳```\n║┣❏ ```.moretxt```\n║┣❏ ```.song ❲link or song name❳```\n║┣❏ ```.video ❲yt link❳```\n║┣❏ ```.yt  ❲video name❳```\n║┣❏ ```.img ❲image name❳```\n║┣❏ ```.twt ❲twiter video link❳```\n║┣❏ ```.insta ❲instragram links❳```\n║┣❏ ```.ss ❲website link❳```\n║┣❏ ```.hmod ❲app name❳```\n║┣❏ ```.sing```\n║┣❏ ```.git```\n║┣❏ ```.wallpaper```\n║┣❏ ```.liric ❲song name❳```\n║┣❏ ```.sweather ❲name country❳```\n║┣❏ ```.news```║┣❏ ```.weather```\n║┣❏ ```.jid```\n║┣❏ ```.trt ❲en❳```\n║┣❏ ```.tts ❲voice❳```\n║┣❏ ```.ig ❲account name❳```\n║┣❏ ```.movei ❲movei name❳```\n║┣❏ ```.animesay```\n║┣❏ ```.random```\n║┣❏ ```.currency```\n║┣❏ ```.wiki ❲wikipedia❳```\n║┣❏ ```.calc```\n║┣❏ ```.a ❲audio to sound❳```\n║┣❏ ```.github```\n║┣❏ ```.joke```\n║┣❏ ```.scan```\n║┣❏ ```.alive```\n║┣❏ ```.whoid```\n║┣❏ ```.changesay```\n║┣❏ ```.trumpsay```\n║┣❏ ```.covid```\n║┣❏ ```.unvoice```\n║┣❏ ```.short ❲link❳```\n║┗━━━━━━━━━━━━━━❍ꕥ\n╚═══════════❍ꕥ'}) 

}));
