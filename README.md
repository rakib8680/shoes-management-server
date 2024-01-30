# Shoe Management Server

## Project Live Link: https://shoes-management-server-two.vercel.app

## Project Description

- This is a Shoe Management System where you can add, update, delete, sell shoes and also can see all the shoes and sales history.
- This is the client side of the project. You can find the client side of the project here: https://shoes-management.vercel.app



## How to Run Locally

First Clone My Project Repository by running the following command in your terminal

```bash
  git clone this_repository
```

Then Go to the project directory and open the project in your favorite code editor

```bash
  cd shoe-management-server
```

Then Install all the necessary dependencies by running the following command

```bash
  npm install (all dependencies)
```

And At-last Start the server by running the following command

```bash
  npm run dev
```


## Environment Variables

add the following environment variables to your .env file and replace the values with your own

`PORT`
`DATABASE_URL`
`JWT_ACCESS_SECRET`
`JWT_EXPIRES_IN`
`BCRYPT_SALT`
`NODE_ENV`



## Technologies Used:

**Server:** Node, Express, Mongoose, TypeScript, Nodemon, Cors, Dotenv,

**Validation**: Zod, EsLint, Prettier

**Database**: MongoDB, Mongoose, MongoDB Atlas, MongoDB Compass

**Authentication**: JWT, Bcrypt

**Deployment**: Vercel



## Features

- Create Shoes
- Update Shoes
- Delete Shoes
- Get All Shoes
- Get Single Shoe
- Register User
- Login User



## API Reference

#### Get all shoes
```http
  GET /api/products/all-shoes
```

#### Get single shoe by id
```http
  GET /api/products/:id
```

#### Create new  shoe
```http
  POST /api/products/add-shoes
```

#### Update shoe by id
```http
  PUT /api/products/update-shoe/:id
```

#### Delete shoe by id
```http
  DELETE /api/products/delete-shoe/:id
```

#### Sell shoes by id
```http
  PUT /api/products/sell-shoes/:id
```


#### Register User
```http
  POST /api/auth/register-user
```

#### Login User
```http
  POST /api/auth/login-user
```



## Author

- [@Rakib](https://www.github.com/rakib8680) - github
