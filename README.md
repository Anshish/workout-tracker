# workout-tracker

A Excercise Tracker app build using MERN stack. You can login/signup. Details of users will be store in database deployed over MongoDB Atlas. Details such as password will be encrypted using bcrypt. Users can create/delete excercises and store their data. It also shows time when data was last updated.

## Setting up the project

Go to the folder in which you want to work. You can either clone or download the zip file.

### Setting up backend

To set up backend run following commands

```
cd backend
npm install
```

After installing all dependencies you have to configure environmental variables by creating config.env file in backend folder.

Structure of config.env file

```
MONGO_URI=<your MongoDB URI>
SECRET=<your secret key for hashing passwords>
```

### Setting up frontend

Go to frondend folder and run

```
npm install
```

All the dependencies should be installed. Now, you just have to start the React server by following command

```
npm start
```

You also have to keep the mongodb cluster open in order to run the app properly.



### Tech Stack

* React
* Node.js
* Express.js
* MongoDB
* JWT
* Bcrypt
### Check demo here

https://drive.google.com/file/d/1nxzYwNn-rALJkuGAHlnxavrHA1zrqxq5/view?usp=sharing