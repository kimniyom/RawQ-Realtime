const mysql = require('mysql');
const MySQLEvents = require('./lib');

const app = require('express')();
const http = require('http').createServer(app);

const dotenv = require('dotenv');
dotenv.config();

const io = require('socket.io')(http, {
    transports: ['websocket', 'polling'],
});

app.get('/', (req, res) => {
    res.send('<h1>WelCome to api rawq</h1>');
});

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

    //อ่านชื่อคิวหน้าห้องยา
    socket.on('callquere-drug', function(data) {
        io.sockets.emit("callquere-drug", data);
    });

    //เช็คช่องสัญญาณว่าว่างไหม
    socket.on('check-call', function(data) {
        io.sockets.emit("check-call", data);
    });

    //ล้างค่าหน้าจอ
    socket.on('clear-monitor', function(data) {
        //console.log(data);
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

    socket.on('disconnect', function() {
        console.log("user disconnect");
        //io.sockets.emit('end call');
    });

});


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
    /*
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
    */
};

program()
    .then(() => console.log('Waiting for database events...'))
    .catch(console.error);

http.listen(process.env.PORT, () => {
    console.log('listening on *:' + process.env.PORT);
});
