fetch("https://monte-api.vercel.app/api")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayUser(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayUser(data) {
    const user = data.namaProvinsi[1];
    const userDiv = document.getElementById("user-id"); 
    const userProvinsi = user.namaProvinsi;
    const heading = document.createElement("h1");
    heading.innerHTML = userProvinsi;
    userDiv.appendChild(heading);
  }   
