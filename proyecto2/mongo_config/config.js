import mongoose from "mongoose";

const {Schema} = mongoose;

const connect = 'mongodb+srv://jaedgodi:Jegd.2002@cluster0.qfvbifu.mongodb.net/productos?retryWrites=true&w=majority'
mongoose.connect(connect, {useNewUrlParser: true,useUnifiedTopology: true});

const productoSchema = new Schema({
    nombre: String,
    precio: Number,
    cantidad: Number,
    imagen: String,
    descripcion: String
});

const Producto = mongoose.model('producto',productoSchema)

const agregarProducto = (req, res) => {
    const producto = new Producto({
        nombre: req.body.nombre,
        precio: Number(req.body.precio),
        cantidad: Number(req.body.cantidad),
        imagen: req.body.imagen,
        descripcion: req.body.descripcion

    })
    producto.save()
    .then(re =>{
        res.redirect('/')
    })
}


export  {agregarProducto}


