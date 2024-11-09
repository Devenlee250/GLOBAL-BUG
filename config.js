global.namaown = "JAMIE" // your owner name here
global.namabot = "𝐍𝐎𝐕𝐀 🅱︎🆄︎🅶︎ ᵇᵒʸ " // your bot name here
global.versisc = "9.5.0" //
global.owner = ["263714321578"] // your owner number here
global.tele = "https://t.me/strikerboy" // your telegram here
global.url = "https://www.youtube.com/@GlobalTechInfo" // Your YouTube Here
global.namastore = "LynnZxD" // UBAH NAMA STORE LU
global.simbol = "✪" // You Can Change Simbol
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Ganti Logo Disini
global.painlogo = "https://i.imgur.com/3Fq3Ucq.jpeg" 

global.my = {
      saluran: "https://whatsapp.com/channel/0029VafbajGDuMRoRlel7k1p",
      idCH: "",
      youtube: "https://www.youtube.com/@GlobalTechInfo",
      telegram: "https://t.me/Strikerboy350",
      Instagram: "https://www.instagram.com/"
   }


global.mess = {
    success: 'ᴅᴏɴᴇ',
    admin: '_*❗ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴀɴ ᴀᴅᴍɪɴ !*_',
    botAdmin: '_*❗ʙᴏᴛ ᴍᴜꜱᴛ ʙᴇ ᴛʜᴇ ᴀᴅᴍɪɴ !*_',
    OnlyOwner: '_*❗ᴏᴡɴᴇʀꜱ ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ !*_',
    OnlyGrup: '_*❗ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ ꜰᴏʀ ɢʀᴏᴜᴘ !*_',
    private: '_(❗ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ ꜰᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ !*_',
    wait: '_*ᴘʀᴏᴄᴇꜱꜱɪɴɢ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ*_',
    notregist: '_*ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ*_',
    premium: '_*ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴘʀᴇᴍɪᴜᴍ_*',
    endLimit: '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 WIB_*.',
     bugrespon: `\`[ ! ]\`ᴡᴀɪᴛ ; ᴄᴜʀʀᴇɴᴛʟʏ ꜱᴇɴᴅɪɴɢ ᴠɪʀᴜꜱ ᴀᴛᴛᴀᴄᴋ`,
     donebug: `\`[ ! ]\`ᴠɪʀᴜꜱ ʜᴀꜱ ʙᴇᴇɴ ꜱᴇɴᴛ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ`,
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
