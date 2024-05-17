const { WAConnection, MessageType, Mimetype } = require('@adiwajshing/baileys');

const conn = new WAConnection();
conn.connectOptions.timeoutMs = 30 * 1000;

conn.on('chat-update', async (chatUpdate) => {
    if (chatUpdate.messages && chatUpdate.count === 1) {
        const message = chatUpdate.messages.all()[0];
        const userJid = message.key.remoteJid;

        // التحقق من الرسائل الخاصة (DM)
        if (userJid.endsWith('@s.whatsapp.net') && !message.key.fromMe) {
            // إرسال رسالة تحذيرية
            const warningMessage = 'تم حظرك من استخدام البوت في الخاص. يرجى الانضمام إلى المجموعة لاستخدام البوت.';
            await conn.sendMessage(userJid, warningMessage, MessageType.text);

            // حظر المستخدم بعد إرسال الرسالة التحذيرية
            await conn.blockUser(userJid, 'add');
            console.log(`User ${userJid} has been blocked.`);
        }
    }
});

// تسجيل الدخول إلى WhatsApp
async function connectToWhatsApp() {
    await conn.connect();
    console.log('Connected to WhatsApp!');
}

connectToWhatsApp().catch(console.error);
