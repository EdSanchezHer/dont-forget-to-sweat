// WorkOut Form
const muscleSelect = document.getElementById("muscle-selection");
muscleSelect.addEventListener("change", getMuscleGroup);
let ids = {}

const dropDownOne = document.getElementById("muscle-selection");

async function getMuscleGroup() {
  const workoutForm = document.getElementById("workout-form");
  const dropDownTwo = document.getElementById("chosen-exercise");
  const dropDownOne = document.getElementById("muscle-selection");

  if (dropDownOne.value !== "---Please select one---") {
    workoutForm.classList.remove("hidden");
    const listOfObjects = await fetch(`/exercises/${dropDownOne.value}`)
      .then((res) => res.json())
      // .then(jsonList => console.log('jsonObjec: ', jsonList))
      // .then(obj => {
      //   const myList = obj.exerciseList.map()
      //   return myList
      // })
      .then((objList) => {
        dropDownTwo.innerHTML = "";
		ids = new Object()
        for (const exercise of objList.exerciseList) {
          const newEle = document.createElement("option");
          newEle.classList.add('ex-select')
          newEle.setAttribute('id', exercise.exerciseTitle)
          newEle.setAttribute("value", exercise.exerciseTitle);
          newEle.setAttribute("muscle", exercise.muscleName);
          newEle.setAttribute("exerciseType", exercise.exerciseType);
          newEle.setAttribute("numbah", exercise.id);
          newEle.innerHTML = `${exercise.exerciseTitle} -- ${exercise.muscleName}`;
          dropDownTwo.appendChild(newEle);
		  ids[exercise.exerciseTitle] = exercise.id
          
        }
      });
	  console.log(ids)
    return listOfObjects;
  } else {
    workoutForm.classList.add("hidden");
  }
}


const checkType = (type) => {
  if (type === "Power-lift") {
    return ["weight", "repetitions", "sets"];
  } else if (type === "Machine") {
    return ["resistance", "repetitions", "sets"];
  } else if (type === "Calesthenics") {
    return ["resistance", "repetitions", "sets"];
  } else if (type === "Cardio") {
    return ["distance", "resistance"];
  }
};
let holder;
// async function unhide() {
//   const dropDownTwo = document.getElementById("chosen-exercise");
//   // const targetOption = dropDownTwo.selected.numbah;
//   console.log(targetOption)
//   return holder = targetOption;
  // const exType = dropDownTwo.exerciseType;

  // const boxes = await document.querySelectorAll(".workout__input")
  //   boxes.forEach((ele) => ele.setAttribute("disabled", "true"));

  // 	const middleList = checkType(exType);
  // 	middleList.forEach((eles) => {
  // 		const htmlElement = document
  // 			.getElementById(eles)
  // 			.then(() => htmlElement.setAttribute("disabled", "false"));
  // 	});
  // 	return middleList;
// }

const dropDownTwo = document.getElementById("chosen-exercise");

dropDownTwo.addEventListener('change', (eve) => {
  const path = document.getElementById("workout-form")
  const exId = document.getElementById(dropDownTwo.value)
  console.log("exID: ",  exId)
  const result = exId.getAttribute('numbah')
  console.log('numbah: ', result)
  path.setAttribute('action', `/workouts/exid/${result}`)
})

// workout counter

let workouts = 0
const currentWorkouts = []
// workout post

const workoutContainer = document.querySelector('.workoutList')

async function addWorkoutToRoutine(obj){
  workouts++
  const newEle = 
    `<div class="workout__subcontainer" id="workout_${workouts}><p class="exerciseTitle workout_routine">${obj.exerciseTitle}<span class="weight">${obj.weight}</span><span class="reps">${obj.repetitions}</span><span class="sets">${obj.sets}<span class="resistance">${obj.resistance}</span><span class="distance">${distance}</span><input type="checkbox" class="completed"></input><button class="delete__button" id="delete_${workouts}></p></div>`
  return newEle;
}
const workoutForm = document.getElementById('workout-form')

function makeNewWorkout(){
  const newWorkout = new FormData(workoutForm)
  
}


const subButton = document.querySelectorAll('.form-button')
workoutForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const csrfToken = document.getElementsByName('_csrf').value
  const exId = document.getElementById(dropDownTwo.value)
  const holder = document.getElementById('hidey-hole')
  const exerciseId = exId.getAttribute('numbah')
  holder.setAttribute("value", exerciseId)

  //gather form values

  const newWorkout = new FormData(workoutForm);
  
  const request = await fetch('/workouts', {
    // credentials: include,
    method: 'POST',
    body: newWorkout,
    headers: { 'CSRF-Token': csrfToken }
  })
  const { workout } = await res.json()
  console.log(workout);  
  // => workoutContainer.innerHTML = addWorkoutToRoutine(workout))
  
  //   const newEle = addWorkoutToRoutine(newWorkout)
  // return workoutContainer.innerHTML += newEle
})



// Quotes

async function loadQuote() {
  const quoteContainer = document.getElementById("quote");

  const res = await fetch("/quotes");
  const newQ = await res.json();

  if (!newQ.author) newQ.author = "Unknown";

  console.log(newQ.author);

  quoteContainer.innerHTML = `<p class="italic">"${newQ.quote}"</p>- ${newQ.author}`;
}

const quoteButton = document.getElementById("new-quote");

quoteButton.addEventListener("click", loadQuote);

loadQuote();

// Sidebar

// Navbar

// Workout List
const workoutList = [];
const workoutListElement = document.getElementById("workoutList__list")

const addWorkoutButton = document.querySelector(".form-button")

addWorkoutButton.addEventListener("click", addWorkout);
workoutListElement.addEventListener("keydown", (event) => {
  if(event.keyCode === 13) {
    addWorkout();
  }
});



