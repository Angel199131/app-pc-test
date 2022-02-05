import express from 'express'
import productRoute from './routes/ProductRoute'
import imageRoute from './routes/ImageRoute'
import userRoute from './routes/UserRoute'
import orderRoute from './routes/OrderRoute'
import path from 'path'

const app = express()

import './database'

app.set('port', process.env.PORT || 3000);

app.use(express.json())

app.use('/', productRoute)
app.use('/', imageRoute)
app.use('/', userRoute)
app.use('/', orderRoute)

app.use(express.static(path.join(__dirname, '../../public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
});
