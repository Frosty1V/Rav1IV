import { createHash } from 'crypto'
import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, command }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    let pp = './Menu.png'
    let username = conn.getName(who)
    let sn = createHash('md5').update(who).digest('hex')
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850)
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

    const buttons = [
        { buttonId: `${usedPrefix}ترفيه`, buttonText: { displayText: 'الترفيه' }, type: 1 },
        { buttonId: `${usedPrefix}مشرفين`, buttonText: { displayText: 'المشرفين' }, type: 1 },
        { buttonId: `${usedPrefix}اوامر`, buttonText: { displayText: 'الاوامر' }, type: 1 },
    ]
    const buttonMessage = {
        image: { url: pp },
        caption: `
*▫️  اسم البوت , 𝑅𝒶𝓋𝓑𝓸𝓽*
*▫️ حط قبل كل امر* *(.)*
*▫️ اســم الـمطور  𝓕𝓻𝓸𝓼𝓽*
╾━━━━━━━━━━━━━━━━━╼
*يرجى اختيار القسم الذي ترغب في عرضه:*`,
        footer: 'اختر قسمًا',
        buttons: buttons,
        headerType: 4
    }

    await conn.sendMessage(m.chat, buttonMessage)
}

handler.help = ['main']
handler.tags = ['group']
handler.command = ['القائمه', 'قائمه', 'قائمة', 'القائمة', 'ترفيه', 'مشرفين', 'اوامر']

export default handler
