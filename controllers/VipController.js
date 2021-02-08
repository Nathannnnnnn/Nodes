
let model = require("../models/vip.js");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = 	function(request, response){
  let data = request.params.lettre;
   response.title = 'Répertoire des stars';

    model.test(function(err, result){  // appel le module test qui exécute la requete SQL
        if (err) {
            console.log(err);
            return;
        }
       response.LettreVip = result; // result contient : [ RowDataPacket { NB: 37 } ]

       response.render('repertoireVips', response); // appel la vue Handlebars qui va afficher le résultat
   } );

let photo = request.params.Photo_star;
response.title = 'Photo des stars';
  model.test(LettreVip,function(err, result){  // appel le module test qui exécute la requete SQL
      if (err) {
          console.log(err);
          return;
      }
     response.photo = result[0]; // result contient : [ RowDataPacket { NB: 37 } ]

     response.render('repertoireVips', response); // appel la vue Handlebars qui va afficher le résultat
 } );

   }
