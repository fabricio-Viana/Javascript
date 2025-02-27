const bodyParser = require('body-parser')
const express = require('express')

const app = express()


app.use(express.static('./'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/teste', (req,res)=> res.send(new Date))


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,'./upload')
    },
    filename: function(req,file,callback){
        callback(null,`${Date.now()}_${file.originalname}`)
    }   
})

const upload = multer({storage}).single('arquivo')

app.post('/upload',(req,resp)=>{
    upload(req,res,err => {
        if(err){
            return res.enc('Ocorreu um erro.')
        }
        res.end('concluido com sucesso')
    })
})

app.post('/formulario',(req,res) => {
    res.send({
        ...req.body,
        id:1
    })
})

app.get('/parOuImpar', (req,res) => {
    const par = parseInt(req.query.numero)% 2 === 0
    res.send({
        resultado: par ? 'par':'impar'
    })
})

app.listen(8081,()=>console.log("Excutando..."))