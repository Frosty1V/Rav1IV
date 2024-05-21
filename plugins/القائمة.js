let handler = async (m, { conn, args, usedPrefix, command }) => {
let pp = './Menu.png'

    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'قـائـمـة الـاوامــر'
            },
            body: {
              text: '🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة'
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
                            title: '.RavO"L',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: 'قسم الاوامر',
                            title: '.RavO!L',
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
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['قايمه']

export default handler
