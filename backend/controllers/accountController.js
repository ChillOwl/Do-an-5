

const jwt = require('jsonwebtoken');
const db = require('../connection');

exports.postLogin = (req, res) => {
    const body = req.body;

    db.query('CALL customerLogin(?,?)', [body.account, body.password], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            const user = results[0][0]; // Access the first row of the first array

            if (user) {
                const userWithToken = generateTokenRes(user);
                res.status(200).json(userWithToken);
            } else {
                res.status(400).send("Wrong user name or password");
            }
        }
    });
};

exports.adminLogin = (req, res) => {
    const body = req.body;

    db.query('CALL adminLogin(?,?)', [body.account, body.password], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            const user = results[0][0]; // Access the first row of the first array

            if (user) {
                const userWithToken = generateTokenRes(user);
                res.status(200).json(userWithToken);
            } else {
                res.status(400).send("Wrong user name or password");
            }
        }
    });
};


exports.getCustomerById = (req, res) => {

    const id = req.params.id;
    db.query('CALL getCustomerById(?)',[id], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};

const generateTokenRes = (user) => {
    const token = jwt.sign(
        {
            account: user.account,
            isAdmin: user.isAdmin
        },
        "texx", // Secret key used to sign the token
        { expiresIn: "30d" } // Options, including the expiration time
    );

    user.token = token;
    return user;
};
