// Example:
// Answer: 80


function maxLivingPeople(lifespans) {
  

  const sortByBirth = lifespans.sort((a,b)=> a[0]-b[0]);
  // earliest birth was sortByBirth[0][0]
  
  const earliestBirth = sortByBirth[0][0];
  // console.log("earliestBirth",earliestBirth)

  const sortByDeath = lifespans.sort((a,b)=> b[1] -a[1]);
  // sorts in place meaning that it is sorted last by sortByDeath

  const lastestDeath = sortByDeath[0][1]
  // console.log("lastestDeath",lastestDeath)
  
  const yearCount = {};

  for (let i= earliestBirth ; i <= lastestDeath; i++){
    if (!yearCount[i]){
      yearCount[i] = 0;
    } else {
      yearCount[i] += 0;
    }
  }

// year with count established 

 // birth is equal to or less than and death is greater than increment count my one 


  for (const key in yearCount){
    for (let l=0; l <lifespans.length; l++){
      if (lifespans[l][0] <= key && lifespans[l][1] > key){
        yearCount[key] += 1;
      }
    }
  }
  // console.log(yearCount)

  let maxPopulation = 0
  let yearMaxPop = 0;
  for (const key in yearCount){
    if (yearCount[key] > maxPopulation){
      maxPopulation = yearCount[key];
      yearMaxPop = key;
    }
  }
  return yearMaxPop;
}

const humans = [ [10, 90], [80, 99], [15, 90], [10,91] ]
maxLivingPeople(humans);
// solve as dev

//  create an object with year : totalAlive

// then go through the object and subract from year when there is a death 

// return the key where the value is the greatest 

