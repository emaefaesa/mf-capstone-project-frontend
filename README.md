# CADDS!😺 Building (and assimilating) my first MERN app! (Mongo, Express, React.JS, Node)

Ok, ok... CADDS is is a MERN app that displays some of the coolest restaurants around the world and allows
experienced users to create more restaurants and display them on the web.

     /\_/\
    ( o.o )
     > ^ <


# Deployed Application

The deployed application can be found at the following link: "####".

To install all the dependencies used in the project, simply run the command:

```
npm install
```

# Environment Variables

You will need to create a .env (or .env.local) file if you want to run this project locally. In order to do so you will also need variable:

- REACT_APP_GOOGLE_MAPS_API_KEY
- REACT_APP_API_URL

# Application Routes:

|              URL path               |        Description        | Protected |
| :---------------------------------: | :-----------------------: | :-------: |
|                  /                  |         Home page         |    ❌     |
|               /login                |        Login page         |    ❌     |
|               /signup               |        Signup page        |    ❌     |
|              /profile               |       Profile Page        |    ❌     |
|            /cats                    |     Cats Page             |    ✅     |
|          /cats/:id                  |  Cats Details Page        |    ✅     |
|         /cats/create                | Cats Creation Page        |    ✅     |
| /cats/reviews/:restaurant_id        |     Cats Page             |    ✅     |