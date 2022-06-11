const UserModel = require('../models/userModel');
const responseOK = require('../utils/responseOk');
const responseError = require('../utils/responseError');

const auth = async (email, password) => {
  try {
    const user = await UserModel.findOne({ email: email, password : password});  
    if (user) {
      return responseOK({ token: "xxxyyyzzzzwwwwwwwttttt"}, user);
    }
    return responseError(401, "user Unauthorized");
  }
  catch (error) {
    return responseError(500, "Server Error");
  }
};

const info = async (id) => {
  try {
      const user = await UserModel.findById(id); // findOne({ _id : id})
      return responseOK({ user });
      
  }
  catch (error) {
    return responseError(500, "Server Error");
  }
};


const register = async (userData) => {
  try {
    if(await validateEmail(userData.email)){
      return responseError(400, 'Email is a already used');
    }
    const user = new UserModel(userData);
    await user.save();
    return responseOK({ user });
  }
  catch (error) {
    console.log('error',error);
    return responseError(500, 'Server Error');
  } 
};





//   if (email === "wilsongilr@gmail.com" && password === "123456") {
// return responseOK({token: "xxxxyyyyzzzzwwwwttttt"});
   
//   }
//   return responseError(401,"User UnAuthorized");
// };


const validateEmail = async (email) => {
  try {
      const checkEmail = await UserModel.findOne( { email: email});
      return checkEmail ? true : false;
  } catch (error) {

  }
};

module.exports = {
    auth,
    register,
    info
}
