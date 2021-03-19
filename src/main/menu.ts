import { app, Menu, MenuItemConstructorOptions, shell } from 'electron';

const appName = 'vite-electron'
const template: MenuItemConstructorOptions[] = [
  {
    label: '修改',
    submenu: [
      { label: '撤销', enabled: false, role: 'undo' },
      { label: '重做', role: 'redo' },
      { type: 'separator' },
      { label: '剪切', role: 'cut' },
      { label: '复制', role: 'copy' },
      { label: '粘贴', role: 'paste' },
      { label: '粘贴并匹配样式', role: 'pasteAndMatchStyle' },
      { label: '删除', role: 'delete' },
      { label: '全选', role: 'selectAll' }
    ]
  },
  {
    role: 'window',
    label: '窗口',
    submenu: [
      {label: '重新加载', role: 'reload'},
      { label: '最小化', role: 'minimize' }
    ]
  },
  {
    role: 'help',
    label: '帮助',
    submenu: [
      {
        label: '反馈建议',
        click() {
          shell.openExternal('https://github.com/cyytemplate/vite-electron-ts/issues')
        }
      },
      {
        label: 'GitHub',
        click() {
          shell.openExternal('https://github.com/cyytemplate/vite-electron-ts')
        }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.name,
    submenu: [
      { label: '关于' + appName, role: 'about' },
      // {type: 'separator'},
      // {label: '服务', role: 'services', submenu: []},
      { type: 'separator' },
      { label: '隐藏' + appName, role: 'hide' },
      { label: '隐藏其他', role: 'hideOthers' },
      { label: '显示全部', role: 'unhide' },
      { type: 'separator' },
      { label: '退出' + appName, role: 'quit' }
    ]
  })
}
const menu = Menu.buildFromTemplate(template)

app.on('ready', () => {
  Menu.setApplicationMenu(menu)
})
