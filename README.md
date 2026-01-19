### 💻 Project Description

- This project is an API that simulates the management of a financial system, with integration into the payment process using `PIX` and `CREDIT_CARD`.

### 🚀 Technologies

- Typescript
- Nodejs in version v24.12.0 (LTS)
- Nest
- Docker
- Postgres
- Prisma

### 🚀 End-Points

###### POST: `/api/payment`
###### PUT: `/api/payment/{id}`
###### GET: `/api/payment/{id}`
###### GET: `/api/payment/`


### 🛠️ About .env.example file

- Make sure that all the enviroment variables is filled with the rigth configurations, you can rename this file after do it from `.env.example` to `.env`, or create a new one ........... it is very `IMPORTANT` to the all the stuffs working well.

### 🛠️🚀 How to running this application

- For running application in Docker container you should have docker installed on your system.

- Copy the url of this repo in tab `< > CODE`, and running in terminal .... `git clone "link...."`
- Go to project folder .... `cd Desafio-Backend-Node-Capco
- Install dependencies .... `npm install` or `yarn install`, depends on the installed package manager.
- You will need to create a `.env` file on `root` of this application, and copy the environment variables that is in `.env.example` of this application.  

- After following check the steps above, you can running the application with the follow comand `yarn dc:up`.
- Since the containers on `docker are running`, Open a second tab on your terminal and make sure to do the set-up of `prisma` and `postgres`, you will need to run this command on your terminal, only the first time `yarn setup:prisma`, so you can test the end-points of the application.
- For stop and remove containers, you can use the follow comand `yarn dc:down`.

### 🛠️🚀 To run the Prisma Database Visualization Interface tool

- With the application already started... open a second tab on your terminal and type `npx prisma studio`

### 📚 About the architecture of the application

- This app was created as the same as `MVC` architecture, trying to keep the good organization and responsability of the layers, to make easy to give maintenance and to be able to implement new stuffs as well.
