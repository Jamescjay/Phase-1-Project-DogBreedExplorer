var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "2ujXDP62s+wRKQKcy/7fng==PsgZKBri0ByBkKtn");


document.addEventListener("DOMContentLoaded", () => {
  function fetchDogBreedDetails(dogName) {
    fetch(`https://api.api-ninjas.com/v1/dogs?energy=3/${dogName}`)
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
  }
});
