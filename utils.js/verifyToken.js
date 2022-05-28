import jwt from "jsonwebtoken";

export const verifyToken = (req,res, next)=>{
    const token = req.cookies.isLogin;
    if(!token){
        res.status(401).json("You are not authenticated")
    }
    jwt.verify(token,process.env.JWT, (err, user)=>{
        if(err){
            res.status(403).json("Token is not valid");
        }
        req.user = user
        next()
    })
}

export const verifyUser = (req,res, next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not authorized!")
        }
    })
}

export const verifyAdmin = (req,res, next)=>{
    verifyToken(req,res, ()=>{
        if(true){
            next();
        }else{
            res.status(403).json("You are not authorized!")
        }
    })
}