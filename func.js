function fnValidatePhone() {
  // Variables
  var phone = document.getElementById('txtPhone').value;
  var message = document.getElementById('txtMessage');

  // Verificación del campo para garantizar que no este vacio
  if (phone != '') {
    // Validación del formato esperado
    if (/^(\+)+(\d{1})+(\s)+([2-9]{1})+(\d{2})+(-)+([2-9]{1})+(\d{2})+(-)+(\d{3})$/i.test(phone)) {
      phone = phone.replace(/\+|-|\s/gi,'');
      message.innerHTML = 'Teléfono correcto: ' + phone;
      message.style.color = 'green';
    } else {
      // Mensaje de error
      message.innerHTML = 'El número de teléfono no concuerda con el patrón establecido: +1 222-222-222';
      message.style.color = 'red';
    }
  } else {
    // Mensaje de error
    message.innerHTML = 'El campo no puede enviarse vacio';
    message.style.color = 'red';
  }
}