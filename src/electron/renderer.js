// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.requestIdleCallback(() => {
  const settings = require('electron-settings')

  settings.set('name', {
    first: 'Lewis',
    last: 'Cowper'
  })

  console.log(settings.get('name'))
})
