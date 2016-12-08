/**
 * Created by mac on 12/7/16.
 */
const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
    let window = new BrowserWindow({width:800, height:600})
    window.loadURL(`file://${__dirname}/index.html`)
})

exports.openRegisterWindow = () => {
    let window = new BrowserWindow({width:400, height:200})
    window.loadURL(`file://${__dirname}/registration.html`)
}

exports.openFriendWindow = () => {
    let window = new BrowserWindow({width:400, height:200})
    window.loadURL(`file://${__dirname}/addFriend.html`)
}
