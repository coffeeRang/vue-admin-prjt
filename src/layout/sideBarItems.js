const sideBarItems = [
  { icon: 'contacts', text: '사용자관리 메뉴', pageId: '/' },
  { icon: 'history', text: '사이트 이력' },
  { icon: 'g_translate', text: '언어변경' },
  {
    icon: 'keyboard_arrow_up',
    'icon-alt': 'keyboard_arrow_down',
    text: 'Main Label',
    model: true,
    children: [
      { icon: 'contacts', text: '사용자 목록', pageId: 'userList' },
      // inner depth 2 동작 안됨 원인 찾기
      {
        icon: 'assignment',
        text: '2뎁스 메뉴',
        pageId: 'menu2depth'
        // model: true,
        // children: [
        //   { icon: 'add', text: 'Inner Label_2' },
        // ]
      }
    ]
  },
  {
    icon: 'keyboard_arrow_up',
    'icon-alt': 'keyboard_arrow_down',
    text: 'More',
    model: false,
    children: [
      { text: 'Import' },
      { text: 'Export' },
      { text: 'Print' },
      { text: 'Undo changes' },
      { text: 'Other contacts' }
    ]
  },
  { icon: 'settings', text: '사이트 설정 관리' },
  // { icon: 'chat_bubble', text: 'Send feedback' },
  { icon: 'help', text: '도움말' },
  // { icon: 'phonelink', text: 'App downloads' },
  // { icon: 'keyboard', text: 'Go to the old version' }
]

export default sideBarItems;