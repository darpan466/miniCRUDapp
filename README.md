# miniCRUDapp

# Installing the app 
  * step 1: open the project in vscode
  * step 2: create a new cluster in your mongoDB account and copy the mongoDB url string for your database
  * step 3: in project folder open .env.example file and enter your mongodb url string
  * step 4: after editing the above file, rename the file from .env.example to .env
  * step 5: run the command : npm i in integrated terminal to install the dependencies
  * step 6: run the command : npm start in the integrated terminal to start the server.
  * step 7: to stop the app press ctrl + C.


# APIs
  * To create a new user make post request on the following route with user data as request body: 
    * YOUR_HOST_ADDRESS/api/user/create
  * To update an existing user make put request on the following route with updated data as request body and user id as url parameter: 
    * YOUR_HOST_ADDRESS/api/user/update/:id
  * To delete a user make a delete request on the folllowing route with user id as url parameter: 
    * YOUR_HOST_ADDRESS/api/user/delete/:id
  * To fetch a user data make a get request on the following route with user id as url parameter:
    * YOUR_HOST_ADDRESS/api/user/get/:id
  * To fetch all users data make a get request on the following route: 
    * YOUR_HOST_ADDRESS/api/user/getAll

