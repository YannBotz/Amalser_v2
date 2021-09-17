const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://m.imgur.com/a/bV9ednf.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Janiya*
*owner number wa.me/94703767171*

*bot setting video : https://youtube.com/channel/UCCtyinnnHW_10jom_efwusA*

*githublink : https://github.com/JanithaChathuranga/Amalser_v2*

*Fallow : https://www.instagram.com/janitha129?r=nametag*
`}) 

}));
