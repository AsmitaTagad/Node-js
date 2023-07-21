/**
 * local module:
 * how to import and export files?
 */
const register=function(username){
  console.log(`${username} registered successfully.`)
}

const login= function(username,password){
  console.log(`user ${username} has been logined.`)
}


//export file using module.export (empty object) 
// module.exports=user;

//output: user Asmita has been logined.


//export more than one files 

//if key and value having same name so we don't have need to write the both
module.exports={
  register,
  login,
}
