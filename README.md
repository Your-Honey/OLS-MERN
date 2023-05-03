# OLS-MERN

PORT=8080
DB_URI = "mongodb://localhost:27017/OLS_mern"
COOKIE_EXPIRE = 5
put this code in env inside backend

The project is designed to enable an admin to create organizations, allow users to sign up, and track their activities, 
such as login time, device information, and last activity time. The admin can monitor and manage all users in an organization, 
including logging them out and logging out all users from an organization. 

Models Created:-
    • User Model:- It contains all the information of users. It will contains field like name,email,password (in encrypted from), 
      organisationId (reference from organisation Model), admin (it will contain boolen value for admin is will be true and for user it will be false).
    • Organisation Model:- It contains Organisation details. With fields Name of organisation . Organisation will be created by admin.
    • User Activity/session Model:- It will contain user Activity like when user Login, with which device he had login, when he logout. 
      It will contain feild like userId(reference from user Model),OrganisationId ( reference from organisation) ,device , Login Time,Logout Time.
