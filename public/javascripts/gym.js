// WorkOut Form
const muscleSelect = document.getElementById("muscle-selection");
muscleSelect.addEventListener("change", getMuscleGroup);

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

async function unhide() {
	const dropDownTwo = document.getElementById("chosen-exercise");
	const exType = dropDownTwo.exerciseType;
	// const boxes = await document.querySelectorAll(".workout__input")
	//   boxes.forEach((ele) => ele.setAttribute("disabled", "true"));

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
	const middleList = checkType(exType);
	middleList.forEach((eles) => {
		const htmlElement = document
			.getElementById(eles)
			.then(() => htmlElement.setAttribute("disabled", "false"));
	});
	return middleList;
}

// Quotes

async function loadQuote() {
	const quoteContainer = document.getElementById("quote");

	const res = await fetch("/quotes");
	const newQ = await res.json();

	console.log(newQ.author);

	quoteContainer.innerHTML = newQ.quote;
}

const quoteButton = document.getElementById("new-quote");

quoteButton.addEventListener("click", loadQuote);

loadQuote();

// Sidebar

// Navbar

// Description

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
