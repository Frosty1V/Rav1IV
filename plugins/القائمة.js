const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let pp = './Menu.png'

    const sections = [
        {
            title: 'قسم المشرفين',
            rows: [
                {
                    title: 'ترقية',
                    rowId: `${usedPrefix}ترقية`
                },
                {
                    title: 'اعفاء',
                    rowId: `${usedPrefix}اعفاء`
                },
                {
                    title: 'منشن',
                    rowId: `${usedPrefix}منشن`
                },
                {
                    title: 'حذف',
                    rowId: `${usedPrefix}حذف`
                },
                {
                    title: 'طرد',
                    rowId: `${usedPrefix}طرد`
                },
                {
                    title: 'مخفي',
                    rowId: `${usedPrefix}مخفي`
                }
            ]
        }
    ]

    const buttons = sections.flatMap(section => section.rows.map(row => {
        return {
            buttonId: row.rowId,
            buttonText: {
                displayText: row.title
            },
            type: 1
        }
    }))

    const buttonMessage = {
        contentText: '*▫️  اسم البوت , 𝑅𝒶𝓋𝓑𝓸𝓽*\n*▫️ حط قبل كل امر* *(.)*\n*▫️ اســم الـمطور  𝓕𝓻𝓸𝓼𝓽*',
        footerText: '𝑅𝒶𝓋𝓑𝓸𝓣',
        buttons: buttons,
        headerType: 1
    }

    let imageBuffer = fs.readFileSync(pp)

    await conn.sendMessage(m.chat, { image: imageBuffer, caption: buttonMessage.contentText }, MessageType.image, { quoted: m }) // إرسال الصورة والنص بعدها
    await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { quoted: m }) // إرسال الرسالة التفاعلية
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['القائمه', 'قائمه', 'قائمة', 'القائمة']

export default handler
