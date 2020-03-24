const PORT = 8000;
const url = `http://localhost:${PORT}`;
const socket_client = io.connect(url);
socket_client.on("uuid", token => {
    console.log(token);
});
socket_client.on('status', (message)=>{
    console.log(message);
})
