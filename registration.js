/**
 * Created by mac on 12/7/16.
 */
//import the generateKeys javascript file
//generate the keys here
//save them to file
const remote = require('electron').remote
const main = remote.require('./main.js')
const createKeys = require('./createKeys')

var button = document.createElement('button')
button.textContent = 'Submit'

button.addEventListener('click', () => { //where to pass the inputs of the textboxes?
    var dhKeys = createKeys.GenerateDHKeys()
    var signingKeys = createKeys.GenerateSigningKeys()
    var publicKey = createKeys.GetPublic(dhKeys)

    //jsonparse

    //curl
    //if have time: promise/ deferred object

    //write keys to local file

    main.openRegisterWindow() //this should be a client function right?
    let window = remote.getCurrentWindow()
    window.close()
}, false)

document.body.appendChild(button)




