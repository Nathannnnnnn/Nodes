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
module.exports.test = function(LettreVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "select photo_adresse as Photo_star from photo p inner join vip v ON v.vip_numero = p.vip_numero Where vip_nom like '"+LettreVip+"%' and photo_numero =1;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
