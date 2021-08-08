import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    // console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];
    decodedData = jwt.decode(token);
    req.userId = decodedData?.sub;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
