document.addEventListener("DOMContentLoaded", () => {
  function fetchDogBreedDetails(dogEnergy) {
    var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "2ujXDP62s+wRKQKcy/7fng==PsgZKBri0ByBkKtn");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.api-ninjas.com/v1/dogs?energy=${dogEnergy}`, requestOptions)
  .then(response => response.json())
      .then((data) => {
       //const DogImage = document.getElementById("image_link");
        const dogName = document.getElementById("name");
        const dogGrooming = document.getElementById("grooming");
        const strangerRel = document.getElementById("goodWithStrangers");
        const dogPlayfulness = document.getElementById("playfulness")
        const dogTrainability = document.getElementById("trainability");
        const dogEnergy = document.getElementById("energy");
        const dogBarking = document.getElementById("barking");
       /*  const maxWeightMale = document.getElementById("maxMale");
        const maxWeightFemale = document.getElementById("maxFemale");
        const minWeightMale = document.getElementById("minMale");
        const minWeightFemale = document.getElementById("minFemale"); */

        /* DogImage.src = data.image_link; */
        //
        dogName.textContent = data.name;
       
        dogGrooming.textContent = data.grooming;
        strangerRel.textContent = data.good_with_strangers;
        dogPlayfulness.textContent = data.playfulness;
        dogTrainability.textContent = data.trainability;
        dogEnergy.textContent = data.energy;
        dogBarking.textContent = data.barking;
        /* maxWeightMale.textContent = data.max_weight_male;
        maxWeightFemale.textContent = data.max_weight_female;
        minWeightMale.textContent = data.min_weight_male;
        minWeightFemale.textContent = data.min_weight_female; */
      })
      .catch((error) =>
        console.error("Error fetching dog breed details:", error)
      );
  }


  function PopulateDogBreedMenu(){
    const dogBreeds = document.getElementById("breeds");
    fetch(
      `https://api.api-ninjas.com/v1/dogs?name=${dogName}`,
      requestOptions
    )
    .then((response) => response.json())
    .then((data) => {
      data.foreach((breed) => {
        const p = document.createElement('p');
        p.className = "dog breed";
        p.textContent = breed.name;
        p.setAttribute("data-energy", dogEnergy);
        p.addEventListener("click", () => {
          fetchDogBreedDetails(dogEnergy);
        });
        dogBreeds.appendChild(p);
      });
    });
  } 
  fetchDogBreedDetails('3');
  PopulateDogBreedMenu();

});

