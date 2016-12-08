/**
 * Created by mac on 12/7/16.
 */
const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.createElement('button')
button.textContent = 'Submit'

button.addEventListener('click', () => { //electron submit form
    main.submitFriend() //client function?
    let window = remote.getCurrentWindow()
    window.close()
}, false)

document.body.appendChild(button)