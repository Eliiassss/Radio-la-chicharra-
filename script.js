function enviarMensaje() {
    // Obtener el nombre de usuario y el mensaje
    const nombreUsuario = document.getElementById('nombre-usuario').value;
    const mensaje = document.getElementById('mensaje').value;
  
    // Validar que los campos no estén vacíos
    if (nombreUsuario === '' || mensaje === '') {
      alert('Completa ambos campos para enviar el mensaje.');
      return;
    }
  
    // Almacenar mensajes en Local Storage
    const mensajesGuardados = localStorage.getItem('mensajes') || '[]';
    const mensajesArray = JSON.parse(mensajesGuardados);
    mensajesArray.push({ nombre: nombreUsuario, mensaje: mensaje });
    const mensajesString = JSON.stringify(mensajesArray);
    localStorage.setItem('mensajes', mensajesString);
  
    // Crear un nuevo elemento para el mensaje
    const nuevoMensaje = document.createElement('div');
    nuevoMensaje.classList.add('mensaje'); // Añadir una clase para el estilo
  
    // Crear el contenido del mensaje
    const contenidoMensaje = document.createTextNode(`${nombreUsuario}: ${mensaje}`);
    nuevoMensaje.appendChild(contenidoMensaje);
  
    // Obtener el contenedor del chat
    const chatContainer = document.getElementById('chat-container');
  
    // Añadir el nuevo mensaje al contenedor
    chatContainer.appendChild(nuevoMensaje);
  
    // Limpiar los campos para el siguiente mensaje
    document.getElementById('nombre-usuario').value = '';
    document.getElementById('mensaje').value = '';
  }
  
  function cargarMensajes() {
    const mensajesGuardados = localStorage.getItem('mensajes') || '[]';
    const mensajesArray = JSON.parse(mensajesGuardados);
  
    mensajesArray.forEach(mensaje => {
      // Crear elemento de mensaje
      const nuevoMensaje = document.createElement('div');
      nuevoMensaje.classList.add('mensaje');
  
      // Añadir contenido del mensaje
      const contenidoMensaje = document.createTextNode(`${mensaje.nombre}: ${mensaje.mensaje}`);
      nuevoMensaje.appendChild(contenidoMensaje);
  
      // Añadir el elemento de mensaje al contenedor del chat
      const chatContainer = document.getElementById('chat-container');
      chatContainer.appendChild(nuevoMensaje);
    });
  }
  
  // Cargar mensajes al iniciar la página
  cargarMensajes();