const handler = async (m, {conn, text, isROwner, isOwner}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_setbye

  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply(tradutor.texto1);
  } else throw `*أدخــل رســالــة الوداع !*\n*عــشان تــعـمل مـنــشن أكــتب @user, عــشان تـحط أســم الـجروب أكـتب @group, عــشان تـحط وصــف أكــتب @desc*`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['وداع'] 
handler.admin = true

export default handler
