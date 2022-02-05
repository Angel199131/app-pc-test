import mongoose from 'mongoose'

const URI = 'mongodb://localhost/app-pc-test'

mongoose.connect(process.env.MONGODB_URI || URI)
  .then(() => console.log('Db is connected'))
