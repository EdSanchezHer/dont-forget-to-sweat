function checkType(obj) {
    if (obj.exerciseType === 'Power-lift){
        return [weight, repetitions, sets]
    } else if (obj.exerciseType === 'Machine'){
        return [ resistance, repetitions, sets ]
    } else if (obj.exerciseType === 'Calesthenics'){
        return [ resistance, repetitions, sets ]        
    } else if (obj.exerciseType === 'Cardio'){
        return [distance, resistance]
    }
}


module.exports= 