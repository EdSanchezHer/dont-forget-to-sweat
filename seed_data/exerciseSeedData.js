const exercises = [
{muscleGroup: "Chest", muscleName: "Pectoralis",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Barbell Bench Presses",     exerciseType: "Power-lift", spotter: true},
{muscleGroup: "Chest", muscleName: "Pectoralis",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Barbell Incline Presses",   exerciseType: "Power-lift", spotter: true},
{muscleGroup: "Chest", muscleName: "Pectoralis",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Dumbbell Bench Press",      exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Chest", muscleName: "Pectoralis",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Dumbell Incline Press",     exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Chest", muscleName: "Pectoralis",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Dumbbell Flyes",            exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Chest", muscleName: "Pectoralis",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Cable Crossovers - Mid",     exerciseType: "Machine", spotter: false},
{muscleGroup: "Chest", muscleName: "Pectoralis",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Cable Crossovers - Low",     exerciseType: "Machine", spotter: false},
{muscleGroup: "Chest", muscleName: "Pectoralis",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Cable Crossovers - High",    exerciseType: "Machine", spotter: false},
{muscleGroup: "Back",  muscleName: "Latissimus Dorsi",  createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Pull-Ups",                  exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Back",  muscleName: "Latissimus Dorsi",  createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Wide-Grip Lat PullDown",    exerciseType: "Machine", spotter: false},
{muscleGroup: "Back",  muscleName: "Latissimus Dorsi",  createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "One-Arm Dumbbell Row",      exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Back",  muscleName: "Latissimus Dorsi",  createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Seated Cable Rows",         exerciseType: "Machine", spotter: false},
{muscleGroup: "Back",  muscleName: "Latissimus Dorsi",  createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Straight Arm Pulldowns",    exerciseType: "Machine", spotter: false},
{muscleGroup: "Arms",  muscleName: "Biceps",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Dumbbell Curls",            exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Arms",  muscleName: "Biceps",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Barbell Curls",             exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Arms",  muscleName: "Biceps",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Preacher Curls",            exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Arms",  muscleName: "Biceps",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Concentration Curls",       exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Arms",  muscleName: "Biceps",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Cable Curls",               exerciseType: "Machine", spotter: false},
{muscleGroup: "Arms",  muscleName: "Biceps",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Hammer Curls",              exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Arms",  muscleName: "Triceps",           createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Seated Triceps Presses",    exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Arms",  muscleName: "Triceps",           createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Lying Triceps Presses",     exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Arms",  muscleName: "Triceps",           createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Tricep Kickbacks",          exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Arms",  muscleName: "Triceps",           createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Tricep Pushdowns",          exerciseType: "Machine", spotter: false},
{muscleGroup: "Arms",  muscleName: "Triceps",           createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Cabel Extensions",          exerciseType: "Machine", spotter: false},
{muscleGroup: "Arms",  muscleName: "Triceps",           createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "BenchDips",                 exerciseType: "Machine", spotter: false},
{muscleGroup: "Legs",  muscleName: "Quadraceps",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Barbell Squats",            exerciseType: "Power-lift", spotter: true},
{muscleGroup: "Legs",  muscleName: "Quadraceps",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Leg Presses",               exerciseType: "Machine", spotter: false},
{muscleGroup: "Legs",  muscleName: "Quadraceps",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Leg Extensions",            exerciseType: "Machine", spotter: false},
{muscleGroup: "Legs",  muscleName: "Hamstrings",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Dumbbell Lunges",           exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Legs",  muscleName: "Hamstrings",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Straight-Leg Deadlifts",    exerciseType: "Power-lift", spotter: true},
{muscleGroup: "Legs",  muscleName: "Hamstrings",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Lying Leg Curls",           exerciseType: "Machine", spotter: false},
{muscleGroup: "Legs",  muscleName: "Calves",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Seated Calf Raises",        exerciseType: "Machine", spotter: false},
{muscleGroup: "Legs",  muscleName: "Calves",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Standing Heel Raises",      exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Core",  muscleName: "Abdominals",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Floor Crunches",            exerciseType: "Calisthenics", spotter: false},
{muscleGroup: "Core",  muscleName: "Abdominals",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Oblique Floor Crunches",    exerciseType: "Calisthenics", spotter: false},
{muscleGroup: "Core",  muscleName: "Abdominals",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Decline Crunches",          exerciseType: "Calisthenics", spotter: false},
{muscleGroup: "Core",  muscleName: "Abdominals",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Decline Oblique",           exerciseType: "Calisthenics", spotter: false},
{muscleGroup: "Core",  muscleName: "Abdominals",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Hanging Knee Raises",       exerciseType: "Calisthenics", spotter: false},
{muscleGroup: "Core",  muscleName: "Abdominals",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Reverse Crunches",          exerciseType: "Calisthenics", spotter: false},
{muscleGroup: "Core",  muscleName: "Abdominals",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Cable Crunches",            exerciseType: "Calisthenics", spotter: false},
{muscleGroup: "Core",  muscleName: "Abdominals",        createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Cable Oblique Crunches",    exerciseType: "Calisthenics", spotter: false},
{muscleGroup: "Legs",  muscleName: "Glutes",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Romanian Deadlift",         exerciseType: "Power-lift", spotter: true},
{muscleGroup: "Legs",  muscleName: "Glutes",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Single-Leg-RDL",            exerciseType: "Power-lift", spotter: true},
{muscleGroup: "Legs",  muscleName: "Glutes",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Sumo Deadlift",             exerciseType: "Power-lift", spotter: true},
{muscleGroup: "Legs",  muscleName: "Glutes",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Single-Leg Bridge",         exerciseType: "Cardio", spotter: false},
{muscleGroup: "Legs",  muscleName: "Glutes",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Hip Thrusts",               exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Legs",  muscleName: "Glutes",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Back Extensions",           exerciseType: "Cardio", spotter: false},
{muscleGroup: "Legs",  muscleName: "Glutes",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Cable Pull-Through",        exerciseType: "Machine", spotter: false},
{muscleGroup: "Legs",  muscleName: "Glutes",            createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Kettlebell Swings",         exerciseType: "Power-lift", spotter: false},
{muscleGroup: "Cardio", muscleName: "Cardio",           createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Treadmill",                 exerciseType: "Cardio", spotter: false},
{muscleGroup: "Cardio", muscleName: "Cardio",           createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Bike",                      exerciseType: "Cardio", spotter: false},
{muscleGroup: "Cardio", muscleName: "Cardio",           createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Jogging",                   exerciseType: "Cardio", spotter: false},
{muscleGroup: "Cardio", muscleName: "Cardio",           createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Swimming",                  exerciseType: "Cardio", spotter: false},
{muscleGroup: "Cardio", muscleName: "Cardio",           createdAt: new Date(), updatedAt: new Date(), exerciseTitle: "Eliptical",                 exerciseType: "Cardio", spotter: false},
]

module.exports = exercises