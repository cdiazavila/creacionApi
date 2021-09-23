const express = require('express')
const router = express.Router();
const pacienteController = require('../controllers/pacienteController')

module.exports = function(){
    // agregar pacientes 

    router.post('/pacientes',
      pacienteController.nuevoPaciente
    )

    // obtener todo los pacientes 
    router.get('/pacientes',
     pacienteController.odtenerPaccientes
      )
        // Obtiene un paciente en especifico (ID)
      router.get('/pacientes/:id',
      pacienteController.obtenerPaciente
       )

   // Actualizar un paciente en especifico (ID)
   router.put('/pacientes/:id',
   pacienteController.actualizarPaciente
    )
   

    // eliminar un paciente con Id
    router.delete('/pacientes/:id',
    pacienteController.eliminarPaciente
    )

 return router;
}