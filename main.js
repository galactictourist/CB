var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;

var debug = false

if (process.argv[2] == 'debug') {
    debug = true
    let reload = require('electron-reload')
    reload(`${__dirname}/app`)
}

var mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        width: 1324,
        height: 968,
        title: 'Cattle Barn 1.0',
        backgroundColor: '#555555',
        useContentSize: true


    });

    mainWindow.loadURL('file://' + __dirname + '/main.html');

    if (debug) {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
