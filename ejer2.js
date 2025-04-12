let correo_base = "Daniel@gmail.com";
let contraseña_base = "1234";

let correo_ingreso = "Daniel@gmail.comm";
let contraseña_ingreso = "12345";

if (correo_ingreso === correo_base && contraseña_ingreso === contraseña_base) {
  console.log("Es correcto, credenciales correctas");
} else if (correo_ingreso === correo_base && contraseña_ingreso !== contraseña_base) {
  console.log("Contraseña incorrecta");
} else {
  console.log("No tengo registro en mi base de datos");
}
