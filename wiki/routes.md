# Frontend Routes

# User-Facing Routes

1 /login
    This page displays a log in form
        * GET /login
        * POST /login

2 /signump
    This page displays a signup form
        * GET /signup
        * POST /signup

3 /
    This page displays the next available routine that has to be completed, or else a create routine page if one does not exist for logged in users. Otherwise a link to the login and signup pages.

      

4 /routines
    This page will display the personal collection of routines that have been saved for the user
        * GET /:userid/routines

# Back-End

5 /exercises
    This won't actually be a page that gets displayed, only there for reference and QUERY SELECT functionality.  This will be all Seeded data, with possible future feature of adding customizable data.

        * GET /exercises
    
6 /workouts
        * GET /workouts
        * POST /workouts
        * DELETE /workouts/:id
        * EDIT /workouts/:id

7 /routines
        * GET /:userid/routines/
        * POST /:userid/routines/
     
        * DELETE /:userid/routines/:id
        * EDIT /:userid/routines/:id
        

        