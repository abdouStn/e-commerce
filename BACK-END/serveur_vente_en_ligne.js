var MongoClient = require('/usr/local/lib/node_modules/mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('/usr/local/lib/node_modules/mongodb').ObjectID;
var url = 'mongodb://localhost:27017/VentesEnLigneDB';
express  = require("/usr/local/lib/node_modules/express");
var app = express();

/*
Nom de la base : VentesEnLigneDB
Nom de la collection : Produits
Documents : listeProduits.json
*/

MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  db = database;             //db : equivalent de pdo, recupère la base
  app.listen(8888);
});

// recherche de toutes les marques
app.get("/produits/marques", function(req, res) {
    db.collection('Produits').distinct('marque', function(err, json) {
		console.log(json);
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(json));
    });
});
//recherche de tous les types de produits
app.get("/produits/types", function(req, res) {
    db.collection('Produits').distinct('marque', function(err, json) {
		console.log(json);
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(json));
    });
})
//recherche d'une marque donée
app.get("/produits/marque/:marque", function(req, res) {
    var marqueARechercher = req.params.marque;
    console.log("Marque à rechercher : "+marqueARechercher);
    rechercheProduits(db, {"marque":marqueARechercher}, function(json) {
         console.log(json);
         res.setHeader('Access-Control-Allow-Origin', '*');
         res.setHeader('Content-Type', 'application/json');
         res.end(JSON.stringify(json));
    });
})
//recherche d'une type doné
app.get("/produits/type/:type", function(req, res) {
    var typeARechercher = req.params.type;
    console.log("type à rechercher : "+typeARechercher);
    rechercheProduits(db, {"type":typeARechercher}, function(json) {
         console.log(json);
         res.setHeader('Access-Control-Allow-Origin', '*');
         res.setHeader('Content-Type', 'application/json');
         res.end(JSON.stringify(json));
    });
})


var rechercheProduits = function(db, search,  callback) {
   var cursor = db.collection('Produits').find( search );
   var res = [];
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
          //console.log(doc);
           res.push(doc);
        }
      else { callback(res); }
   });
};

//=================Panier===============================
app.get("/panier/ajout/:id/:nom/:prix/:stock", function(req, res) {
    var id = req.params.id; var nom = req.params.nom; var prix = req.params.prix; var stock = req.params.stock;
    console.log(nom);
    //db.collection('Panier').update({}, {$addToSet : {"idP":id, "nom":nom, "prix":prix, "stock":stock, "quantite":"1"}}, function(err, json) {
    db.collection('Panier').insert({"idP":id, "nom":nom, "prix":prix, "stock":stock, "quantite":"1"}, function(err, json) {
        //console.log(json);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(json));
    });

})
//recherche de la liste de produits dans panier
app.get("/panier/liste", function(req, res) {
    //db.collection('Panier').distinct('nom', function(err, json) {
    /*db.collection('Panier').find({}, function(err, json) {
		console.log(json);
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(json));
    });*/
    recherchePanier(db, {}, function(json) {
         console.log(json);
         res.setHeader('Access-Control-Allow-Origin', '*');
         res.setHeader('Content-Type', 'application/json');
         res.end(JSON.stringify(json));
    });
})

var recherchePanier = function(db, search,  callback) {
   var cursor = db.collection('Panier').find( search );
   var res = [];
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
          //console.log(doc);
           res.push(doc);
        }
      else { callback(res); }
   });
};

/*
app.get("/panier/produits/:id", function(req, res) {
    var id = req.params.id;
    db.collection('Produits').find({}, {$addToSet : {produits : {"idP":idAAjouter, "quantite":"1"}}}, function(err, json) {
        //console.log(json);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(json));
    });
})*/


 //ne marche pas : Erreur avec le ObjectId()
app.get("/panier/produits/:list", function(req, res) {
    var idss = req.params.list;
    for (var i = 0; i < idss.length; i++) {
        console.log(idss[i]);
    }
    var ids = [ObjectId('5876bc452d06af7dd5067939')]
    //ids = ids.map(function(id) { return ObjectId(id); });
    //db.test.find({_id: {$in: ids}});
    rechercheProduitsPanier(db, ids, function(json) {
         console.log(json);
         res.setHeader('Access-Control-Allow-Origin', '*');
         res.setHeader('Content-Type', 'application/json');
         res.end(JSON.stringify(json));
    });
})

var rechercheProduitsPanier = function(db, searchList,  callback) {
   var cursor = db.collection('Produits').find({_id: {$in: searchList}});
   var res = [];
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
          //console.log(doc);
           res.push(doc);
        }
      else { callback(res); }
   });
};
