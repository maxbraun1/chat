'use strict';

const path = require('path');
const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
const Menu = electron.Menu;
var io = require('socket.io');

require('./server/server');

app.on('ready', function(){
  var win = new BrowserWindow({
    width:800,
    height:600
  });

  win.on('close',function(){

  });

  win.loadURL("File://"+__dirname+"/client/index.html");
  win.toggleDevTools();

});
