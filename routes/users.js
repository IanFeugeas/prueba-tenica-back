import express from 'express'
import controller from '../controllers/auth/auth.js'
import accountExistsSignUp from '../middlewares/accountExistsSignUp.js'
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js'
import passwordIsOk from '../middlewares/passwordIsOk.js'
import passport from '../middlewares/passport.js'

const { sign_up,sign_in,sign_out,token } = controller

let router = express.Router();

router.post('/signup', accountExistsSignUp, sign_up)
router.post('/signin', accountExistsSignIn, passwordIsOk,sign_in)
router.post('/token', passport.authenticate('jwt', {session:false}), token)
router.post('/signout', passport.authenticate('jwt', {session:false}), sign_out)

export default router