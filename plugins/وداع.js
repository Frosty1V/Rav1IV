const handler = async (m, {conn, text, isROwner, isOwner}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_setbye

  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply(tradutor.texto1);
  } else throw `${tradutor.texto2}\n*احسن مكوناش طايقينك !*\n*أكــتب @user تم خروج!*${tradutor.texto3}`
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['الوداع'] 
handler.admin = true

export default handler
