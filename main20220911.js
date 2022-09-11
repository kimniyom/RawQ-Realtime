const express = require("express");
const mysql = require('mysql');
const MySQLEvents = require('./lib');

const app = express();
const http = require('http').createServer(app);

const bodyParser = require("body-parser");
//const gTTS = require('gtts');
const fs = require("fs");

const dotenv = require('dotenv');
dotenv.config();

const io = require('socket.io')(http, {
    transports: ['websocket', 'polling'],
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use('/audio', express.static(__dirname + '/sound'));

app.get('/', (req, res) => {
    res.send('<h1>WelCome to api rawq</h1>');
});

/*
app.post('/voice', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    let dateNow = yyyy + mm + dd;
    var dir = 'sound/' + dateNow;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    let speech = req.body.txt;
    let vn = req.body.vn;
    let gtts = new gTTS(speech, 'th');
    gtts.save(dir + '/' + vn + '.mp3', function(err, result) {
        if (err) { throw new Error(err); }
        console.log("Text to speech converted!");
        res.send("Unable to download the file")
    });

});
*/


io.on('connection', function(socket) {
    console.log("user connected");

    //เมื่อนำเข้าคิวให้ชื่อในช่องรอเข้าคิวหาย
    socket.on('reset-room', function(data) {
        io.sockets.emit("reset-room", data);
    });

    //เรียกคิวช่องทั่วไป
    socket.on('queue-default', function(data) {
        io.sockets.emit("queue-default", data);
    });

    //เรียกคิวช่องเร่งด่วน
    socket.on('queue-special', function(data) {
        io.sockets.emit("queue-special", data);
    });

    //อัพเดทหน้าจอคิวห้องยา
    socket.on('monitor-drug', function(data) {
        io.sockets.emit("monitor-drug", data);
    });

    //แสดงคิวที่กำลังเรียก POPUP จอใหญ่ 
    socket.on('callquere-drug', function(data) {
        io.sockets.emit("callquere-drug", data);
        console.log("ShowQ");
    });

    //อ่านชื่อคิวหน้าห้อง
    socket.on('readqueue', function(data) {
        io.sockets.emit("readqueue", data);
        console.log("ReadQ");
    });

    //เช็คช่องสัญญาณว่าว่างไหม
    socket.on('check-call', function(data) {
        io.sockets.emit("check-call", data);
    });

    //ล้างค่าหน้าจอ
    socket.on('clear-monitor', function(data) {
        io.sockets.emit("clear-monitor", data);
    });

    //###################### Service Mobile ###################//
    //ส่งคิวเรียกล่าสุด
    socket.on('call-lastq', function(data) { //=>data ส่งเป็น Json {'lastq': lastq,'qtype': qtype,'qdate': qdate}
        io.sockets.emit("call-lastq", data);
    });

    socket.on('mobile-drug', function(data) {
        io.sockets.emit("mobile-drug", data);
    });

    //ส่งไปให้ App อ่านชื่อที่ Android
    socket.on('sendmonitor', function(data) {
        io.sockets.emit("sendmonitor", data);
    });

    socket.on('disconnect', function() {
        console.log("user disconnect");
        //io.sockets.emit('end call');
    });


    //////////////////// Clinic Ramet /////////////////////////////

    socket.on('connect', function() {
        io.emit('connect', { status: 1 });
    });

    socket.on('seqemployeeramet', function(data) {
        io.sockets.emit('seqemployeeramet', data);
    });

    socket.on('seqemployeedoctorramet', function(data, fn) {
        io.sockets.emit('seqemployeedoctorramet', data);
        fn(true);
    });

    socket.on('seqsuccessramet', function(data, fn) {
        io.sockets.emit('seqsuccessramet', data);
        fn(true);
    });

    socket.on('seqramet', function(data) {
        io.sockets.emit('seqramet', data);
        console.log(data);
    });

    socket.on('smartcard', (data) => {
        //console.log(data.cid);
        io.sockets.emit('checksmartcard', data);
    });


});

/*
const program = async() => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT
    });

    const instance = new MySQLEvents(connection, {
        startAtEnd: true,
        excludedSchemas: {
            mysql: true,
        },
    });

    await instance.start();

    instance.addTrigger({
        name: 'checkqueue',
        expression: '*',
        statement: MySQLEvents.STATEMENTS.INSERT,
        onEvent: (event) => {
            let department = event.affectedRows[0].after.department;
            let lastdepartment = event.affectedRows[0].after.lastdepartment;
            let hn = event.affectedRows[0].after.hn;

            if (event.type == "INSERT" || event.type == "insert" || event.type == 1 || event.type == "1") {
                if (event.schema == "queuedb" && event.table == "event_queue") {
                    io.emit('new-queue', { res: 1, department: department, lastdepartment: lastdepartment });
                    console.log("HN => " + hn + " to room => " + department);
                }
            }
        },
    });

    instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error);
    instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error);
};

program()
    .then(() => console.log('Waiting for database events...'))
    .catch(console.error);
*/
http.listen(process.env.PORT, () => {
    console.log('listening on *:' + process.env.PORT);
});