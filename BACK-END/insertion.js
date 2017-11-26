var MongoClient = require('/usr/local/lib/node_modules/mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('/usr/local/lib/node_modules/mongodb').ObjectID;
var url = 'mongodb://localhost:27017/VentesEnLigneDB';

var insertProduits = function(db, callback) {
	db.collection('Produits').insert(
		[
		  {
			"type": "Telephone",
			"marque": "Apple",
			"nom": "iphone 7",
			"reference": "t01",
			"prix": "700",
			"stock": "20",
			"image":"iphone_7.jpg"
		  },
		  {
			"type": "Telephone",
			"marque": "Apple",
			"nom": "iphone 6s",
			"reference": "t02",
			"prix": "600",
			"stock": "10",
			"image":"iphone_6s.jpg"
		  },
		  {
			"type": "Telephone",
			"marque": "Samsung",
			"nom": "Galaxy S3",
			"reference": "t01",
			"prix": "500",
			"stock": "28",
			"image":"galaxy_s3.jpg"
		  },
		  {
			"type": "Telephone",
			"marque": "Samsung",
			"nom": "Galaxy S4",
			"reference": "t02",
			"prix": "700",
			"stock": "20",
			"image":"Galaxy_S4.jpg"
		  },
		  {
			"type": "Ordinateur",
			"marque": "Asus",
			"nom": "X541UA-XX264T",
			"reference": "o01",
			"prix": "499,30",
			"stock": "10",
			"image":"X541UA-XX264T.jpg"
		  },
		  {
			"type": "Ordinateur",
			"marque": "Acer",
			"nom": "ES1-520-38FJ",
			"reference": "o01",
			"prix": "289,89",
			"stock": "2",
			"image":"ES1-520-38FJ.jpg"
		  },
		  {
			"type": "Ordinateur",
			"marque": "HP",
			"nom": "17-x035nf",
			"reference": "o03",
			"prix": "329,99",
			"stock": "0",
			"image":"17-x035nf.jpg"
		  },
		  {
			"type": "Ordinateur",
			"marque": "Apple",
			"nom": "MacBook Air",
			"reference": "o01",
			"prix": "1146,93",
			"stock": "5",
			"image":"MacBook_Air.jpg"
		  },
		  {
			"type": "Disque dur",
			"marque": "Samsung",
			"nom": "SSD Externe 250Go Gamme T",
			"reference": "d01",
			"prix": "140",
			"stock": "20",
			"image":"SSD_Externe_250Go_Gamme_T.jpg"
		  },
		  {
			"type": "Disque dur",
			"marque": "OCZ",
			"nom": "ARC 480Go SATA",
			"reference": "d01",
			"prix": "176,58",
			"stock": "20",
			"image":"ARC_480Go_SATA.jpg"
		  }
		]
	  , function(err, result) {
		assert.equal(err, null);
		console.log("Insertions de documents dans la collection Produits.");
		callback(result);
		});
};

var insertPanier = function(db, callback) {
	db.collection('Panier').insert(
		[
			{
				"id":"76bc452d06af7dd5067940",
				"nom":"test",
				"prix":"25",
				"stock":"3",
				"quantite":"1"
			}

  	  	]
  	, function(err, result) {
  	  assert.equal(err, null);
  	  console.log("Insertions de documents dans la collection Panier.");
  	  callback(result);
  	  });
  };

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	insertProduits(db, function() {
	db.close();
	});
});

/*MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	insertPanier(db, function() {
	db.close();
	});
});*/
