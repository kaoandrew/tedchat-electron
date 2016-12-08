/**
 * Created by mac on 12/7/16.
 */
const remote = require('electron').remote
const main = remote.require('./main.js')

var friendButton = document.createElement('button')
var registerButton = document.createElement('button')
friendButton.textContent = 'Add Friend'
registerButton.textContent = 'Register'

friendButton.addEventListener('click', () => {
    main.openFriendWindow()
}, false)

registerButton.addEventListener('click', () => {
    main.openRegisterWindow()
}, false)

document.body.appendChild(friendButton)
document.body.appendChild(registerButton)