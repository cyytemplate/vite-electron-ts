const Router = require('@cyyjs/electron-router');

Router.get('hello', () => {
  return 'hello word!'
})

export const getHello = () => Router.get('hello')