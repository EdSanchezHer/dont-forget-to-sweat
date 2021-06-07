// WorkOut Form
const muscleSelect = document.getElementById("muscle-selection");
muscleSelect.addEventListener("change", getMuscleGroup);

async function getMuscleGroup() {
	const workoutForm = document.getElementById("workout-form");
	const dropDownTwo = document.getElementById("chosen-exercise");
	const dropDownOne = document.getElementById("muscle-selection");

	if (dropDownOne.value !== "Select a muscle group to get started") {
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
				for (const exercise of objList.exerciseList) {
					const newEle = document.createElement("option");
					newEle.setAttribute("value", exercise.exerciseTitle);
					newEle.setAttribute("muscle", exercise.muscleName);
					newEle.setAttribute("exerciseType", exercise.exerciseType);
					newEle.setAttribute("exerciseId", exercise.id);
					newEle.innerHTML = `${exercise.exerciseTitle} -- ${exercise.muscleName}`;
					dropDownTwo.appendChild(newEle);
				}
			});
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

async function unhide() {
	const dropDownTwo = document.getElementById("chosen-exercise");
	const exType = dropDownTwo.exerciseType;
	// const boxes = await document.querySelectorAll(".workout__input")
	//   boxes.forEach((ele) => ele.setAttribute("disabled", "true"));

	// 	const middleList = checkType(exType);
	// 	middleList.forEach((eles) => {
	// 		const htmlElement = document
	// 			.getElementById(eles)
	// 			.then(() => htmlElement.setAttribute("disabled", "false"));
	// 	});
	// 	return middleList;
}

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

// Description

const buttonSelect = document.querySelectorAll("button.form-button");
const formSelect = document.getElementById("workout-form");

formSelect.addEventListener("submit", async (event) => {
	event.preventDefault();
	const exercise = document.getElementById("chosen-exercise").value;
	const weight = document.getElementById("weight").value;
	const repetitions = document.getElementById("repetitions").value;
	const sets = document.getElementById("sets").value;
	const resistance = document.getElementById("resistance").value;
	const distance = document.getElementById("distance").value;

	let id = Math.floor(Math.random() * 1000);

	let body = { id, exercise, weight, repetitions, sets, resistance, distance };

	localStorage.setItem(id, JSON.stringify(body));

	displayWorkouts();
	// const exerciseTitle = dropDownTwo.value;
	// console.log(body);
	// const workoutObj = {
	//   exerciseTitle
	// }
	// const workoutInputs = document.querySelectorAll("workout__inputs")
	// const
});

function displayWorkouts() {
	let workoutList = document.getElementById("list");

	let array = [];

	for (var i = 0; i < localStorage.length; i++) {
		let el = localStorage.getItem(localStorage.key(i));

		array.push(el);
	}

	// console.log(array);

	const all = array.map((el) => {
		let parsed = JSON.parse(el);
		// var randomColor = Math.floor(Math.random() * 16777215).toString(16);
		return `<div class="gym-form-border shadow">
              <p class="form-title-gym">
                ${parsed.exercise}
              </p>
              <hr>
              <p>Weight: <span class=right>${parsed.weight}</p>
              <p>Reps: <span class=right>${parsed.repetitions}</p>
              <p>Sets: <span class=right>${parsed.sets}</p>
              <p>Resistance: <span class=right>${parsed.resistance}</p>
              <p>Distance :<span class=right>${parsed.distance}</p>
              <button class=delete-btn onclick=removeWorkout(${parsed.id})>Delete</button>
            </div>`;
	});
	workoutList.innerHTML = all.join("");
}

function removeWorkout(id) {
	localStorage.removeItem(id);
	displayWorkouts();
}

displayWorkouts();

// console.log(JSON.stringify(inputs))

// eval(`${ele}x`).classList.remove("hidden")

//   .then((jsonObj) => {
// return jsonObj[exerciseList];

//   .then((rawList) =>
//     rawList.filter((obj) => obj.muscleGroup === muscleGroupx)

// }.then(res => populate(res))

// optionList => optionList.forEach((exer) => {

// return populate;

// const weight = document.getElementsById('weight')
// const weightx = document.getElementsById('weightx')
// const set = document.getElementsById('sets')
// const setx = document.getElementsById('setsx')
// const repititions = document.getElementsById('repititions')
// const repititionsx = document.getElementsById('repititionsx')
// const resistance = document.getElementsById('resistance')
// const resistancex = document.getElementsById('resistancex')
// const distance = document.getElementsById('distance')
// const distancex = document.getElementsById('distancex')

// return list;

// module.exports = listOexercises

// const fetch = requires('fetch')
// const muscleGroup = document.getElementById('mgselection')
// const options = {
//     method: "GET",
//     headers:
// }

// const response = fetch("")

// muscleGroup.addEventListener('', async (event) => {
//     // event.preventDefault()
//     const res = await fetch("/exercises")
//     const jsonObject = await res.json()
//     await console.log("jsonObject:  ", jsonObject)
//     // const disiredList = jsonO

//     const list = await res.filter(obj => obj[muscleGroup]===event.target.value)
//     return list;

// })
// const dropDownTwo = document.getElementById("chosen-exercise");

// dropDownTwo.hidden.addEventListener('onchange')

// let hidden = true;

// let listOexercises=[];

// const options = {

// }

// function populate(list) {
//   for (const ele of list) {
//     const exerciseOptions = document.getElementById("chosen-exercise");
//     const newOpt = document.createElement("option");
//     newOpt.value = ele.title;
//     exerciseOptions.appendChild(newOpt);
//   }
// }
