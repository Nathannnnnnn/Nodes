let db = require('../configDb');


module.exports.test = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT COUNT(*) AS NB FROM vip ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.test = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT LEFT(VIP_NOM, 1) AS Lettre1 from vip ORDER by 1  ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
