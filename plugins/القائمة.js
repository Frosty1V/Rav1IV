import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayWAMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'قـائـمـة الـاوامــر'
            },
            body: {
              text: '*▫️  اسم البوت , 𝑅𝒶𝓋𝓑𝓸𝓽*\n*▫️ حط قبل كل امر* *(.)*\n*▫️ اســم الـمطور  𝓕𝓻𝓸𝓼𝓽*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس هنا ',
                    sections: [
                      {
                        title: 'قوائم البوت',
                        highlight_label: 'اختار',
                        rows: [
                          {
                            header: 'قسم الانمي',
                            title: '.الانمي',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: 'قسم الاوامر',
                            title: '.المهام',
                            description: '',
                            id: 'te'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    })

}

handler.help = ['main']
handler.tags = ['group']
handler.command = ['القائمه', 'قائمه', 'قائمة', 'القائمة', 'ترفيه', 'مشرفين', 'اوامر']

export default handler
