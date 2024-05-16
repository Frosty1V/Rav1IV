import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

const apiurl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const apiKey = 'sk-proj-1oudPc3iGcYQTOH2yHeOT3BlbkFJnKvAo00mFFTNk02dENGY'; // تأكد من صحة مفتاح API

let handler = async (msg, { text, conn, usedPrefix, command }) => {
    if (!text && !(msg.quoted && msg.quoted.text)) {
        throw '❌ أدخل نصًا أو قم بالرد على رسالة بنص لاستخدام رافف.\n\nمثال:\n' + usedPrefix + command + ' كيف الطقس اليوم؟';
    }

    try {
        const query = text || msg.quoted.text;

        // إذا كان هناك صورة مرفقة، قم بمعالجتها هنا (كما في الكود الأصلي)
        let imageUrl = null;
        if ((msg.quoted || msg).mimetype || msg.mediaType) {
            let mimetype = (msg.quoted || msg).mimetype || msg.mediaType;
            if (mimetype.startsWith('video/')) return msg.reply('❌ يرجى الرد على صورة، لا فيديو!');
            const media = await (msg.quoted || msg).download();
            imageUrl = await uploadImage(media);
        }

        // إعداد بيانات الطلب
        const requestBody = {
            prompt: query,
            max_tokens: 150
        };

        console.log('Request Body:', requestBody); // إضافة تسجيل للطلب

        // استدعاء Chat GPT API
        const response = await fetch(apiurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        // التحقق من استجابة API
        if (!response.ok) {
            const errorDetails = await response.text();
            console.error('API Error Details:', errorDetails);
            throw new Error(`حدث خطأ في الاتصال بـ Chat GPT API: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('API Response:', data); // إضافة تسجيل للاستجابة

        const reply = data.choices && data.choices[0] ? data.choices[0].text.trim() : '❌ لم يتم العثور على رد مناسب.';

        msg.reply(reply);

    } catch (error) {
        console.error('Error:', error);
        throw 'حدث خطأ في الاتصال بـ Chat GPT API';
    }
};


handler.help = ['chatgpt'];
handler.tags = ['AI'];
handler.command = ['رافف', 'شاتجيبيتي'];

export default handler;
