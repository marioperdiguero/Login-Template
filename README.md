
# 💻 Login Template

A simple login and register template with Node Js
## 🛠 Project status

Project finished and ready to use
## 📃 Project task list

- ✅ Folder Structures
- ✅ JWT & Errors Middleware
- ✅ User Controller
- ✅ API Routing
- ✅ User Model
- ✅ User Service
- ✅ API Testing



## ⚙ Run Locally

Clone the project

```bash
  git clone https://github.com/marioperdiguero/Login-Template.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Create a folder at the root of the project called config. Then, inside that folder create a file called "db.config.js", and inside the file paste the following code:
```
  module.exports = {
    db: 'your MongoDB connection string will go here'
  }
```

Start the server

```bash
  npm run start
```

## 🔎 API Reference

#### Register New User

```http
  POST /users/register
```
##### Http Body:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The user name |
| `password` | `string` | **Required**. The user password |
| `email` | `string` | **Required**. The user email |

#### Login User

```http
  POST /users/login
```
##### Http Body:
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `string` | **Required**. The user name |
| `password` | `string` | **Required**. The user password |

#### Example of page protected by authentication

```http
  GET /users/user-profile
```
##### Http Headers:
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Basic + JWT Token of user |

## Authors

- [@marioperdiguero](https://github.com/marioperdiguero)