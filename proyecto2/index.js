import express from 'express';
import { agregarProducto } from './mongo_config/config.js';


const app = express();

app.set('views', './vistas');
app.set('view engine', 'ejs');

app.use(express.static("./estilos"));
app.use(express.urlencoded({extended: true}));

app.listen('8000',(req, res)=>{
    console.log("montado en puerto 8000");
});

app.get('/', async(req, res) => {
    
    res.render('index');
});

app.post('/agregar', (req, res) => {
    agregarProducto(req, res)
});
