#RawQ-Realtime
ดึงข้อมูลเมื่อมีการบันทึกลงฐานข้อมูล
<br/>
Node Version >=16.0.x<br/>
Socket io Version >=2.0.x <=3.0
<br/><br/>
สร้างไฟล .env<br/>
DB_HOST=######<br/>
DB_USER=######<br/>
DB_PASS=######<br/>
DB_NAME=queuedb<br/>
DB_PORT=3306<br/>
<br/><br/>
PORT=5500

<br/><br/>
กำหนดค่าให้ดึงข้อมูลแสดงคิวแบบ Realtime โดยใช้ Socket.io
==> Backup
"scripts": {
        "start": "node main.js",
        "eslint": "eslint . --ext .js",
        "test": "npm run test:55 && npm run test:56 && npm run test:57 && npm run test:80",
        "test:55": "cross-env DATABASE_PORT=3355 jest --forceExit --runInBand",
        "test:56": "cross-env DATABASE_PORT=3356 jest --forceExit --runInBand",
        "test:57": "cross-env DATABASE_PORT=3357 jest --forceExit --runInBand",
        "test:80": "cross-env DATABASE_PORT=3380 jest --forceExit --runInBand",
        "test:local": "./scripts/test.sh",
        "coverage": "nyc --reporter=lcov npm test"
    },
