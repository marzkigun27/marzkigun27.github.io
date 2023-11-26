console. log("ok")

fetch("https://monte-api.vercel.app/api")
    .then((res) => res.json)
    .then((data) => console.log(data));