const db = require('../connection');

exports.getAllGame = (req, res) => {

    db.query('CALL getAllGames', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};
exports.getGameById = (req, res) => {

    const id = req.params.id;
    db.query('CALL getGameById(?)',[id], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};
exports.deleteGame = (req, res) => {

    const id = req.params.id;
    db.query('CALL deleteGame(?)',[id], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};
exports.getAllBySearch = (req, res) => {

    const term = req.params.term;
    db.query('CALL getAllBySearch(?)',[term], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};
exports.getAllByTag = (req, res) => {

    const tag = req.params.tag;
    db.query('CALL getAllByTag(?)',[tag], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};

exports.getAllGameByCustomer = (req, res) => {

    const id = req.params.id;
    db.query('CALL getAllGameByCustomer(?)',[id], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};




exports.createGame = (req, res) => {

    try{
        const body = req.body;

        db.query('CALL insertGame(?,?,?,?,?,?,?,?,?)', 
            [body.gamename, 
            body.price,
            body.des, 
            body.dev, 
            body.logo, 
            body.banner, 
            body.ss1, 
            body.ss2, 
            body.ss3], 
            (err, results) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi', error: err });
            } else {
                res.status(200).json(results[0]);
            }
        });
    }catch (error){
        console.error('Lỗi:', error);
        res.status(500).json({ error: 'Đã có lỗi xảy ra.' });
    }
    
};
exports.editGame = (req, res) => {

    try{
        const body = req.body;

        db.query('CALL updateGame(?,?,?,?,?,?,?,?,?,?)', 
            [body.gameid,
            body.gamename, 
            body.price,
            body.des, 
            body.dev, 
            body.logo, 
            body.banner, 
            body.ss1, 
            body.ss2, 
            body.ss3], 
            (err, results) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi', error: err });
            } else {
                res.status(200).json(results[0]);
            }
        });
    }catch (error){
        console.error('Lỗi:', error);
        res.status(500).json({ error: 'Đã có lỗi xảy ra.' });
    }
    
};

exports.buyGame = (req, res) => {

    try{
        const body = req.body;

        db.query('CALL buyGame(?,?)', 
            [body.cusId, 
            body.gameid], 
            (err, results) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi', error: err });
            } else {
                res.status(200).json(results[0]);
            }
        });
    }catch (error){
        console.error('Lỗi:', error);
        res.status(500).json({ error: 'Đã có lỗi xảy ra.' });
    }
    
};

