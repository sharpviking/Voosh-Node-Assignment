const bcrypt = require('bcrypt');
function encrpty(pwd){
return new Promise((resolve,reject)=>{
    const saltRounds = 2;
bcrypt.hash(pwd, saltRounds, function(err, hash){
    if(err){
        reject(err);
    } else{
        resolve(hash);
    }
})
})
}

function compare(pwd,hash){
    return new Promise((resolve,reject)=>{
        bcrypt.compare(pwd, hash, function(err, result){
        if(err){
            reject(err);
        } else{
            resolve(result);
        }
    })
    })
    }
module.exports = encrpty;
module.exports = compare;