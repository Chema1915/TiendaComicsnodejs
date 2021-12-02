const conexion = require('../database/db');

exports.save = (req, res)=>{

    const nombre = req.body.nombre;
    const apellidos = req.body.apellido;
    const user = req.body.user;
    const pass = req.body.password;

    console.log(nombre + " , " + apellidos + " , " + user + " , " + pass);

    conexion.query('INSERT INTO MUsuario SET ?' ,{nom_usu:nombre, ape_usu:apellidos, user_usu:user, pass_usu:pass}, (error, results)=>{

                      if(error){
                          console.log(error);
                      }  
                      else{
                          res.redirect('/login');
                      }

                    })

}