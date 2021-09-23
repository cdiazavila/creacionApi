const Paciente = require('../models/pacientes');


// Cuando se crea un nuevo paciente
exports.nuevoPaciente = async (req, res, next )  => {

 // crear objeto de paciente con datos de req.body

  const paciente = new  Paciente(req.body)

    try {
        await paciente.save();
         res.json({mensaje:'El paciente se Agrego correctamente'})
    } catch (error) {
        console.log(error)
        next()
    }
    
 }


 // Obtiene todos los pacientes 
exports.odtenerPaccientes= async(req,res,next)=>{
    try {
    
       const pacientes = await Paciente.find({})
       res.json(pacientes);
       
    } catch (error) {
      console.log(error);
      next(); 
    }
    }

    
/** Obtiene un paciente en especifico por su ID */
exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
 }

 // Actualiza un registro por su ID
exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
 }

 // Elimina un paciente por su id
exports.eliminarPaciente = async(req, res, next) => {
    try {
       await Paciente.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El paciente fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
 }