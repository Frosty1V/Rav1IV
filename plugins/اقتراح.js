let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `هذا الامر اذا كنت تمتلك اقتراح تريد ان تضاف الى البوت`
  if (text.length < 3) throw `يجب ان تكون الرسالة فيها اكثر من اربع كلمات `
  if (text.length > 1000) throw `الحد الادنى هو 1000 حرف اختر ما تريد قوله !`
  let teks = `*${command.toUpperCase()}!*\n\nمن : *@${m.sender.split`@`[0]}*\n\nالرساله : ${text}\n`
  conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
      contextInfo: {
          mentionedJid: [m.sender]
      }
  })
  m.reply(`*تم الارسال لصاحب البوت*`)
}
handler.help = ['report']
handler.tags = ['infobot']
handler.command = /^(اقتراح)$/i
export default handler
