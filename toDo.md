# 1) Download and apply/install skeleton for project

    * merge the reorg branch into repo
    * adjust package.json file
    * create an example.env file
    * merge this branch into repo
    * everyone pull

# 2) Install modules

    * initialize sequelize
    * generate express
    * create POSTGRESQL users


# 3) ServerSide steps

    * instantiate models

        npx sequelize-cli model:generate --name Quote --attributes "author:string,quote:text"

        npx sequelize-cli model:generate --name Exercise --attributes "muscleGroup:enum,muscleName:string,exerciseTitle:string,exerciseType:enum,imageLocation:string,tips:string,spotter:boolean"

        npx sequelize-cli model:generate --name User --attributes "fullName:string,email:string,hashedPassword:string.binary,bodyWeight:integer,bodyFatPercentage:decimal,fitnessLevel"

        npx sequelize-cli model:generate --name Workout --attributes "weight:integer,resistance:integer,repetitions:integer,sets:integer,distance:integer,exerciseId:integer"

        npx sequelize-cli model:generate --name Routine --attributes "userId:integer,title:string,completionTime:integer,tags:enum,expiration:integer"

        npx sequelize-cli model:generate --name Session --attributes "userId:integer,expire:date,sess:json"

        npx sequelize-cli model:generate --name WorkoutRoutine --attributes "workoutId:integer,routineId:integer"


    * create references/associations
    * seed data
    * Handle authentication/login
    * creating new users
    * create routes
        I) GET
        II) POST
        III) PUT
        IV) DELETE
    * establish validations

# 4) Front End

    * create welcome page
    * create new user page
    * create log in page
    * create user home page
        I) Create Workout
            * attach muscle groups to dropdown
            * attach exercises to dropdown
            * create relative input boxes (or possibly unhide them)
            * make "add workout" button (or enable it/or unhide) - create new entry on Workouts table
            * make "edit" and "delete" buttons (or enable them/or unhide) - update /delete Workouts table entry
            * add each workout id to a list or object for routine creation
        II) Create Routine
            * checkbox for "save for later" (will enable tags dropdown)
            * create dropdown for tags(Mo/Tu/We/Th/Fr/Sa/Su/CUSTOM)
            * Create Routine button - post to db
            * after creating routine, should reload workouts and routine w/ "completed" checkboxes
    * create nav bar
    * create my routines
    * create exercise card
    * create quote card

# 5) hybrid

    * write function to check experation date of routines and/or workouts and "delete" expired ones from database upon login
    * new quote functionality
