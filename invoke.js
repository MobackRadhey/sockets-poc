const fetch = require("node-fetch");
const PORT = 8000;
const url = `http://localhost:${PORT}/status`;
let args = process.argv.slice(2);
let uuid = args[0];
let message = args[1];
const promise = fetch(url, {
  method: "post",
  headers: {
    "Content-type": "application/json",
    Accept: "*",
    "Accept-Charset": "utf-8"
  },
  body: JSON.stringify({
    uuid,
    message
  })
});
promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
