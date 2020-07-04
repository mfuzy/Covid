const jwt = require("jsonwebtoken");

//check authentication middleware (sluzi na protect routes):

module.exports = (req, res, next) => {
  try {
    //split sluzi na to, aby som odstranil "Bearer" z tokena
    const token = req.headers.authorization.split(" ")[1];

    //- jwt.verify porovna public key (token, ktory pride od clienta v hlavicke requestu) s private key (ulozeny na serveri)
    //- a ak to sedi, vrati dekodovany payload (cize tu {heslo: "xyz"})
    //- ak token nepride, alebo nebude sediet s private key, alebo expiruje, tak hodi error
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    //aby som mohol v dalsom middleware extrahovat dekodovany payload z req:
    req.userData = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Auth failed" });
  }
};
