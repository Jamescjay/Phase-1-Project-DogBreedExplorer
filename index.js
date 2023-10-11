var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "2ujXDP62s+wRKQKcy/7fng==PsgZKBri0ByBkKtn");


document.addEventListener("DOMContentLoaded", () => {
  function fetchDogBreedDetails(dogName) {
    fetch(`https://api.api-ninjas.com/v1/dogs?energy=3/${dogName}`)
      .then((response) => response.json())
      .then((data) => {
        const DogImage = document.getElementById("image_link");
        const DogName = document.getElementById("name");
        const childRel = document.getElementById("goodWithChildren");
        const dogRel = document.getElementById("goodWithDogs");
        const dogShedding = document.getElementById("shedding");
        const dogGrooming = document.getElementById("grooming");
        const dogDrooling = document.getElementById("drooling");
        const strangerRel = document.getElementById("goodWithStrangers");
        const dogPlayfulness = documet.getElementById("playfulness");
        const dogProtectiveness = document.getElementById("protectiveness");
        const dogTrainability = document.getElementById("trainability");
        const dogEnergy = document.getElementById("energy");
        const dogBarking = document.getElementById("barking");
        const maxWeightMale = document.getElementById("max_weight_male");
        const maxWeightFemale = document.getElementById("max_weight_female");
        const minWeightMale = document.getElementById("min_weight_male");
        const minWeightFemale = document.getElementById("min_weight_female");
      })
      
  }
});
