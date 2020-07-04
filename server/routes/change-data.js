const express = require("express");
const router = express.Router();
const coronaModel = require("../models/corona");
const checkAuth = require("../middleware/checkAuth"); //check authentication middleware
const jwt = require("jsonwebtoken"); //npm install jsonwebtoken --save

//autentifikacia (overenie hesla):
router.post("/", (req, res, next) => {
  const heslo = req.body.heslo;

  if (heslo === "1") {
    //- vytvorenie tokenu (kvoli autorizacii - aby som nemusel pri kazdom requeste
    //zadavat heslo, token bude ulozeny u klienta (bud v localStorage, alebo v cookie),
    //preto je vhodny pri REST (stateless) apkach, kedze state (udaje) su u klienta a
    //ten to posiela na server, lebo server nic o klientovi neuklada
    //- cize tu je rozdiel oproti session, ktory je ulozeny na serveri a klient posiela
    //cez cookie len jeho ID (tento pristup je vhodny pri klasickych web apkach)
    //a pri requestoch odosielany v hlavicke requestu)
    //- prvy argument je payload (to co pride od klienta a potrebujem to zakodovat do tokenu, ktory mu potom poslem a ktory bude posielat pri requestoch na server),
    //- druhy argument je private key - ten bude na serveri - v environment premennej,
    //vid subor nodemon.json, bude sluzit na overenie public key (cize tokena, ktory
    //vytvorim a poslem ho klientovi a ktory bude zas posielat pri requestoch na server)
    //- treti argument je options objekt, kde nastavim expiraciu tokenu
    const token = jwt.sign({ heslo: heslo }, process.env.JWT_KEY, {
      expiresIn: "1h"
    });

    res.status(200).json({ message: "Auth successful", token: token });
  } else {
    res.status(401).json({ message: "Auth failed", auth: false });
  }
});

//vytvorenie dennych dat:
router.post("/create", checkAuth, (req, res, next) => {
  const data = {
    datum: req.body.datum,
    testy: req.body.testy,
    pozitivni: req.body.pozitivni,
    kumulativ: req.body.kumulativ,
    vylieceni: req.body.vylieceni,
    umrtia: req.body.umrtia
  };

  const corona = new coronaModel(data);
  corona
    .save()
    .then(doc => {
      res.status(200).json({
        message: `dokument vytvorený: ${doc}`
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//uprava dennych dat:
router.patch("/update/:datum", checkAuth, (req, res, next) => {
  const datum = req.params.datum;

  coronaModel
    .findOne({ datum: datum })
    .exec()
    .then(doc => {
      for (let key in req.body) {
        if (req.body[key]) {
          doc[key] = req.body[key];
        }
      }
      doc
        .save()
        .then(docup => {
          res.status(200).json({
            message: `dokument upravený: ${docup}`
          });
        })
        .catch(err => {
          console.log("Druhy: " + err);
          res.status(500).json(err);
        });
    })
    .catch(err => {
      console.log("Prvy: " + err);
      res.status(500).json(err);
    });

  /* SKRATENEJSIA VERZIA:

  coronaModel
    .findOne({ datum: datum })
    .exec()
    .then(doc => {
      for (let key in req.body) {
        if (req.body[key]) {
          doc[key] = req.body[key];
        }
      }
      return doc.save();
    })
    .then(docup => {
      res.status(200).json({
        message: `dokument upravený: ${docup}`
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
*/
});

//vymazanie dennych dat:
router.delete("/delete/:datum", checkAuth, (req, res, next) => {
  const datum = req.params.datum;
  coronaModel
    .findOneAndRemove({ datum: datum })
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json({
          message: `dokument vymazaný: ${doc}`
        });
      } else {
        res.status(200).json({
          message: "dokument nenájdený"
        });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
