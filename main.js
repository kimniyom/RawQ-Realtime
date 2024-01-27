const express = require("express");
const app = express();
const http = require('http').createServer(app);

const bodyParser = require("body-parser");
const fs = require("fs");

const dotenv = require('dotenv');
dotenv.config();

const io = require('socket.io')(http, {
    transports: ['websocket', 'polling'],
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

    //แสดงคิวที่กำลังเรียก POPUP จอใหญ่ 
    socket.on('callquere-drug', function(data) {
        io.sockets.emit("callquere-drug", data);
        console.log("ShowQ");
    });

    socket.on('callquere-drug-android', function(data) {
        let dataSend = JSON.stringify(data);
        io.sockets.emit("callquere-drug", data);
        console.log("ShowQ ReadQ => To Monitor And Read" + dataSend);
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

    //#########################################################//
    //###################### Service Mobile ###################//
    //#########################################################//
    //ส่งคิวเรียกล่าสุด
    socket.on('call-lastq', function(data) { 
        //=>data ส่งเป็น Json {'lastq': lastq,'qtype': qtype,'qdate': qdate}
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

    //##########################################################//
    //###################### ตู้ Kiosk ระบบคิว หน้าห้อง Counter ####################//
    //##########################################################//

    //ส่วนของตู้ Kiosk เมื่อกดคิวส่งค่าไปยังจอตามรหัสแผนกที่ส่งมาและเลขหน้าจอให้อัพเดทข้อมูล
    socket.on('monitor-counter', function(data) {
        /*Data
        {
            res: 1,
            department: department,
            monitornumber: monitorNumber
        }
        */
        console.log("Monitor Counter Queue => " + data);
        io.sockets.emit("monitor-counter", data);
    });

    //ส่วนของตู้ Kiosk เมื่อกดคิวส่งค่าไปยังจอรอซักประวัติตามแผนกที่ส่งมาให้อัพเดทข้อมูล
    socket.on('queue-counter', function(data) {
        /*
            queue: {
                queue: qnumber, 
                channel: channel
            }, 
            department: department,
            monitornumber: monitorNumber
        */
        console.log("queue-counter => " + data);
        io.sockets.emit("queue-counter", data);
    });

    //แสดงคิวที่กำลังเรียก POPUP จอใหญ่ 
    socket.on('callquere-counter', function(data) {
        io.sockets.emit("callquere-counter", data);
        console.log("ShowQ Counter");
    });


    //รับค่ามาจากเครื่อง client เพื่อส่งไปอ่านกล่อง Android //จุดซักประวัติ,หน้าห้องตรวจ โดยเช็คตามจอ
    socket.on('readqueue-counter-android', function(data) {
        /*{
            queue: qnumber,
            channel: channel,
            department: department,
            monitornumber: monitorNumber,
            fullname: fullname,
            flag: 1
        }
        */
        io.sockets.emit("readqueue-counter", data);//ส่งไปอ่านคิวที่ App Android
        console.log("Send Android ReadQ Counter" + " Dep => " + data.department + " Monitor => " + data.monitornumber);
    });

    //ตรวจสอบว่ามีการอ่านคิวอยู่ไหม ส่งรหัสแผนก,เลขหน้าจอ
    socket.on('check-call-counter', function(data) {
        console.log("check-call-counter => " + data);
        io.sockets.emit("check-call-counter", data);
    });


    //เมื่อมีการส่งคิวไปที่ห้องตรวจสั่งให้อัพเดทข้อมูล
    socket.on('queue-fix-room', function(data) {
        /*
        {
            department: department,
            channel: channel,
            monitornumber: monitorNumber
         }
        */
        console.log(data);
        io.sockets.emit("queue-fix-room", data);
    });


    //ดึง Config หน้าจอใหม่
     socket.on('config-monitor', function(data) {
        /*
        {
            department: department,
            channel: channel,
            monitornumber: monitorNumber
         }
        */
        console.log(data);
        io.sockets.emit("set-monitor", data);
    });

    //ส่งแสดง popup จอ TV
    socket.on('show-popup-queue', function(data) {
        /*
        {
            department: this.departmentLocal,
            monitornumber: this.monitornumber,
            queue: queue,
            channel: channel
         }
        */
        console.log("Show POP UP");
        io.sockets.emit("show-popup-queue-tv", data);
    });

    //ส่งปิด popup จอ TV
    socket.on('exit-popup-queue', function(data) {
        /*
        {
            department: this.departmentLocal,
            monitornumber: this.monitornumber
         }
        */
        io.sockets.emit("exit-popup-queue-tv", data);
    });
    

    //########################################################//
    //#################### Clinic Ramet ######################//
    //########################################################//

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

http.listen(process.env.PORT, () => {
    console.log('listening on *:' + process.env.PORT);
});