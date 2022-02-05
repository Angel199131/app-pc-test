import User from '../models/UserModel'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from '../config/config'

const createUser = async (req, res) => {

  const count = await User.estimatedDocumentCount()

  if(count >= 1){

    return res.json(null)

  }

  const user = new User(req.body)

  await user.save()

  res.json(user)

}

const signIn = async (req, res) => {


  const user = await User.findOne({
    "name": req.body.name
  })

  if (user == null){
    return res.json(null)
  }

  if(user.authenticate(req.body.password)){

    const auxToken = jwt.sign({_id: user._id}, config.secretKey)

    return res.json({token: auxToken})
  }
  else{
    res.json(null)
  }
}

const requireSignin = expressJwt({
  secret: config.secretKey,
  algorithms: ['HS256']
})


export default {signIn, createUser, requireSignin}