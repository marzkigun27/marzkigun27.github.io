console. log("ok")
const endpoint = "https://monte-api.vercel.app/api"

async function hitAPI(){
    const api = await fetch(endpoint);
    const { data } = await api.json();
    console.log(data);
}
hitAPI();