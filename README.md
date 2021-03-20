# Boilerplate for graphql-vue2-express-mongoose app.

## Technologies used in this boilerplate

* [VueJS 2](https://vuejs.org) Frontend framework<br>
* [Express](https://expressjs.com) Web app framework<br>
* [GraphQL](https://graphql.org/learn/schema) API query language<br>
* [MongoDB](https://www.mongodb.com) Database<br>


## Usage

Install dependancies in both root and front folder with `npm install`

Make sure your instance of MongoDB is running

Rename `.env.sample` by `.env` file in the root folder


## Database

By default, the used port is `27017`, the db name is `test` and the collection name is `cats`. It can be configured in .env file.


## Start servers

### GraphQL Server
Start the GraphQL server by tapping `npm serve` in root folder

Visit [localhost:5000](http://localhost:5000)

### Front Server

Start the Vuejs server by tapping `npm serve` in front folder

Visit [localhost:8080](http://localhost:8080)


## Endpoints provided

To use this endpoints, you juste have to paste them in your graphQL interface. Press the play button and choose the query that you want execute.


````graphQL
# Get all cats 
query getCats {
  getCats {
    id
    name
  }
}

# Get one specific cat
query getCatById {
  getCatById(catId: "MONGO_ID") {
    id
    name
  }
}

# Create cat
mutation createCat {
  createCat(name: "YOUR_CUTE_CAT_NAME") {
    id
    name
  }
}

# Kill cat
mutation removeCatById {
  removeCatById(catId: "MONGO_ID")
}
````
