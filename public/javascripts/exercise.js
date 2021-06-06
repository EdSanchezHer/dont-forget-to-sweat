
// const fetch = requires('fetch')

const muscleGroup = document.getElementById('mgselection')



muscleGroup.addEventListener('click', async (event) => {
    // event.preventDefault()
    const res = await fetch("/exercises")
    const jsonObject = await res.json()
    await console.log("jsonObject:  ", jsonObject)
    // const disiredList = jsonO

    const list = res.filter(obj => obj[muscleGroup]===event.target.value)
    return list;

})

