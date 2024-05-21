import fs from 'fs'

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

    const listMessage = {
        text: '*▫️  اسم البوت , 𝑅𝒶𝓋𝓑𝓸𝓽*\n*▫️ حط قبل كل امر* *(.)*\n*▫️ اســم الـمطور  𝓕𝓻𝓸𝓼𝓽*',
        footer: '𝑅𝒶𝓋𝓑𝓸𝓣',
        title: 'الـاوامــر',
        buttonText: '...',
        sections
    }

    let imageBuffer = fs.readFileSync(pp)

    await conn.sendMessage(m.chat, listMessage, { quoted: m }) // إرسال الرسالة التفاعلية أولاً
    await conn.sendMessage(m.chat, { image: imageBuffer, caption: listMessage.title }, { quoted: m }) // إرسال الصورة والنص بعدها
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['القائمه', 'قائمه', 'قائمة', 'القائمة']

export default handler
