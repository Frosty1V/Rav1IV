//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('*الوداع!*')
  } else throw `*احسن مكوناش طايقينك !*\n*أكــتب @user تم خروج!*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['الوداع'] 
handler.admin = true

export default handler
