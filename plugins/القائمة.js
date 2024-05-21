
let handler = async (m, { conn, args, usedPrefix, command }) => {


    const sections = [
        {
            title: 'قوائم البوت',
            rows: [
                {
                    title: 'قسم الانمي',
                    rowId: `${usedPrefix}anime`
                },
                {
                    title: 'قسم الاوامر',
                    rowId: `${usedPrefix}commands`
                }
            ]
        }
    ]

    const listMessage = {
        text: '🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة',
        footer: '𝑅𝒶𝓋𝓑𝓸𝓽',
        title: 'قـائـمـة الـاوامــر',
        buttonText: 'دوس هنا',
        sections
    }

    await conn.sendMessage(m.chat, { image: imageBuffer, caption: listMessage.title }, { quoted: m })
    await conn.sendMessage(m.chat, listMessage, { quoted: m })
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['قايمه']

export default handler
