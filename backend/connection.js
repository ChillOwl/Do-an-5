const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'gamestore'
});

db.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối đến cơ sở dữ liệu:', err);
    } else {
        console.log('Kết nối đến cơ sở dữ liệu thành công.');
    }
});

module.exports = db;