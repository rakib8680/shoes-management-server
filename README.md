# 👟 Shoe Management Server

🔗 **Live Project**: [Shoe Management](https://shoes-management-server-two.vercel.app)

## 📝 Project Overview

Welcome to the **Shoe Management System** - your one-stop solution for managing a shoe business. This platform is packed with features that allow you to:

- 🛠️ Add, update, and delete shoes
- 💰 Sell shoes and track sales history
- 🔍 Use advanced filtering options to sort shoes by brand, size, price, model, release date, color, style, and more
- 🔑 Seamlessly register and login for user convenience

The platform caters to two distinct user types:

- 🏪 **Sellers**: Manage shoe inventory and monitor sales history
- 🛍️ **Buyers**: Access the full shoe catalog, request shoe polishing services, and customize shoes by selecting their preferred color and size

This repository houses the server-side code of the project. For the client-side code, visit: [Shoe Management Client](https://github.com/rakib8680/shoes-management-client)

## 🚀 Getting Started with Shoe Management Server

Follow these steps to set up the project locally:

1. **📥 Clone the Project**

   Use the following command in your terminal to clone the project repository:

   ```bash
   git clone <https://github.com/rakib8680/shoes-management-server>
   ```

2. **📂 Navigate to the Project Directory**

   Change your current directory to the project directory:

   ```bash
    cd shoe-management-server
   ```

3. **🔧 Install Dependencies**

   Install all the necessary dependencies using npm:

   ```bash
    npm install
   ```

4. **🎉 Start the Project**

   Finally, start the project with the following command:

   ```bash
    npm run dev
   ```

## 🌍 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file. Don't forget to replace the placeholders with your actual values!

```env
🚪 PORT=your_port_number
🗄️ DATABASE_URL=your_database_url
🔐 JWT_ACCESS_SECRET=your_jwt_access_secret
⏳ JWT_EXPIRES_IN=your_jwt_expiration_time
🧂 BCRYPT_SALT=your_bcrypt_salt
🌐 NODE_ENV=your_node_environment

Each of these variables plays a crucial role in the configuration of your application. Make sure to keep them safe!
```

# 🛠️ Tech Stack

This project is built with a powerful set of technologies to ensure high performance, security, and scalability. Here's a quick overview:

- 🚀 **Server**: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [Mongoose](https://mongoosejs.com/), [TypeScript](https://www.typescriptlang.org/), [Nodemon](https://nodemon.io/), [Cors](https://expressjs.com/en/resources/middleware/cors.html), [Dotenv](https://www.npmjs.com/package/dotenv)

- 🧪 **Validation**: [Zod](https://www.npmjs.com/package/zod), [EsLint](https://eslint.org/), [Prettier](https://prettier.io/)

- 🗄️ **Database**: [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/), [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), [MongoDB Compass](https://www.mongodb.com/products/compass)

- 🔐 **Authentication**: [JWT](https://jwt.io/), [Bcrypt](https://www.npmjs.com/package/bcrypt)

- 🚀 **Deployment**: [Vercel](https://vercel.com/)

Click on any of the technologies to learn more about them!

## 🌟 Project Features

- 🛠️ **Create Shoes**
- 🔄 **Update Shoes**
- 🗑️ **Delete Shoes**
- 📦 **Bulk Delete Shoes**
- 📚 **Get All Shoes**
- 🔍 **Get Single Shoe**
- 💰 **Sell Shoes**
- 🔄 **Duplicate Shoes**
- 📈 **Get Sales History**
- 📝 **Register User**
- 🔑 **Login User**
- ✨ **Polishing Request**
- 🎨 **Customize Shoes**
- 🔍 **Filter Shoes**
- 🕵️ **Search Shoes**
- 🔄 **Sort Shoes**

## 🔍 Filtering Options

- 🏷️ **Brand**
- 📏 **Size**
- 💰 **Price**
- 🎨 **Model**
- 📅 **Release Date**
- 🌈 **Color**
- 👗 **Style**
- 👟 **Sizes**

## API Reference

#### 👟 Get all shoes

```http
GET /api/products/all-shoes
```

#### 🔍 Get single shoe by id

```http
  GET /api/products/:id
```

#### ➕ Create new shoe

```http
  POST /api/products/add-shoes
```

#### 🔄 Update shoe by id

```http
  PUT /api/products/update-shoe/:id
```

#### 🗑️ Delete shoe by id

```http
  DELETE /api/products/delete-shoe/:id
```

#### 📦 Delete Multiple shoes

```http
  DELETE /api/products/delete-shoes
```

#### 💰 Sell shoes by id

```http
  PUT /api/products/sell-shoes/:id
```

#### 🔄 Duplicate shoes by id

```http
  POST /api/products/duplicate-shoes/:id
```

#### 📈 Get Sales History

```http
  GET /api/products/sales-history
```

#### ✅ Verify Shoes by id

```http
  PUT /api/products/verify-product/:id
```

#### 📝 Register User

```http
  POST /api/auth/register-user
```

#### 🔑 Login User

```http
  POST /api/auth/login-user
```

#### ✨ Polishing Request

```http
  POST /api/products/polishing-request
```

#### 🎨 Customize Shoes

```http
  POST /api/products/customize-shoes
```

#### 🔍 Get All Polish Services Request

```http
  GET /api/products/polishing-request
```

#### 🗑️ Delete Polishing Request

```http
  DELETE /api/products/delete-polishing-request/:id
```

## 🖋️ Authored by

- [🚀 Rakib](https://www.github.com/rakib8680) - Visionary behind this project. Find more about me on [GitHub](https://www.github.com/rakib8680).hub and [Instagram](https://www.instagram.com/rakib_8680_)
