import path from 'path'
import multer from 'multer'
import fs from 'fs'

const readImage = async (req, res) => {

  var options = {root: path.resolve('./public/images')}

  res.sendFile(req.params.id, options)
  
}


const readImages = async (req, res) => {

  fs.readdir('./public/images', (err, images) => {

    res.json(images)
    
  })

}

const deleteImage = async (req, res) => {

  fs.unlink('./public/images/' + req.params.id, (err) => {
    
  })

  res.json(true)

}

const createImage = async (req, res) => {

  res.json(true)

}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage})

const uploadImage = upload.single('image')
 


export default {readImages,
                readImage, 
                createImage,
                uploadImage, 
                deleteImage}