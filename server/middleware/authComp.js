import jwt from "jsonwebtoken";

const secret = 'test';

const authComp = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.competeId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.competeId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default authComp;
