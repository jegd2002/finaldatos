import express from 'express';

exports.getData = (req, res) =>{
    res.send({data:"esto viene desde ruta"})
}