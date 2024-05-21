import fs from 'fs'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let pp = './Menu.png'

    const sections = [
        {
            title: 'قوائم البوت',
            rows: [
                {
                    title: 'قسم المشرفين',
                    rowId: `${usedPrefix}مشرفين`
                },
                {
                    title: 'قسم الترفيه',
                    rowId: `${usedPrefix}الترفيه`
                },
                {
                    title: 'قسم الاوامر',
                    rowId: `${usedPrefix}الاوامر`
                }
            ]
        }
    ]

    const listMessage = {
        text: '*▫️  اسم البوت , 𝑅𝒶𝓋𝓑𝓸𝓽*\n*▫️ حط قبل كل امر* *(.)*\n*▫️ اســم الـمطور  𝓕𝓻𝓸𝓼𝓽*'
        footer: '𝑅𝒶𝓋𝓑𝓸𝓽',
        title: 'الـاوامــر',
        buttonText: '...',
        sections
    }

    let imageBuffer = fs.readFileSync(pp)

    await conn.sendMessage(m.chat, { image: imageBuffer, caption: listMessage.title }, { quoted: m })
    await conn.sendMessage(m.chat, listMessage, { quoted: m })
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['قايمه']

export default handler
