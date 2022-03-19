import path from "path"
import express from "express"
import multer from "multer"
const router = express.Router()

const storage = multer.diskStorage({
    // cb: call back
    destination(req, file, cb) {
      cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        // make sure each file name is different with date on file name
      cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    },
  })

//to make sure is picture file - filter
  function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/
    // get the extension from the name - get true/false
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    //  check
    const mimetype = filetypes.test(file.mimetype)
  
    if (extname && mimetype) {
      return cb(null, true)
    } else {
      cb('Please upload images only.')
    }
  }

  const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb)
    },
  })
     
  router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`);
  })

export default router