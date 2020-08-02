//Comando para establecer la comunicación o la conexion
var socket = io();
var label = $('#lblNuevoTicket');
socket.on('connect', function() {
    console.log('Servidor Conectado');

});

socket.on('disconnect', function() {
    console.log('Servidor desconectado');
});

//on 'estadoActual'
socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
    console.log('Ticket actual: ', resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) { //cuando termine de emitir ejecuta la funcion
        label.text(siguienteTicket);
    });

});