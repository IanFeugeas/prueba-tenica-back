import User from "../models/User.js";

async function accountExistsSignIn(req,res,next){
    const user = await User.findOne({email: req.body.email})
    if(user){
        req.user = {
            id: user._id,
            email: user.email,
            password: user.password,
        }
        return next()
    }
    return res.status(400).json({
        success: false,
        message: 'User not found, check that it is registered'
    })
}

export default accountExistsSignIn