'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt = require('bcrypt');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
// bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
//     console.log(hash);
//     //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
//     bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
//       console.log(res); //true
//     });
//   });

  async function bcryptHash() {
     await bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
        console.log(hash)
        // return hash  
        bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
            console.log(res)
            // return res
        })
        
    })
    

  }

  bcryptHash();
//END_ASYNC

//START_SYNC
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);


//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
