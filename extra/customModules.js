let checkType = (obj) => {
    let typeOfExercise = obj.exerciseType;
    
    if(typeOfExercise === 'Power-lift'){
        return [weight, repetitions, sets];
    }
    else if(typeOfExercise === 'Machine' ){
        return [resistance, repetitions, sets];
    }
    else if(typeOfExercise === 'Calesthenics'){
        return [resistance, repetitions, sets];
    }
    else if(typeOfExercise === 'Cardio'){
        return [distance, resistance];
    }
}





module.exports = {
    checkType,
}