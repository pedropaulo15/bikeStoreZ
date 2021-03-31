# Bike Store 

This is a simple implementation of a Bike Store system, where customers are able to customize and purchase bicycles based on
their needs, while admin users are able to add new bikes to the inventory and also add new bike suppliers.

Please note that, no authentication/login was implemented in this application

Here are some important notes before testing this application locally.
* Admin users are not able to create a new purchase (only customer users)
* A customer will be able to purchase one bike at a time as there is no implementation of a shopping cart
* The form to create a new bike does not support image upload


### Validations

1. Bike with `wheel_size` set to `17` can **ONLY** have 1 color - Green
2. Bike with `wheel_size` set to `19` can **ONLY** have 2 colors - Green and Blue
2. Bike with `wheel_size` set to `21` can **ALL** 3 colors - Green, Blue and Black

### Environment Setup

This project should run with the following setup:
- Yarn -> 1.22.10
- Node -> 10.17.0
- Ruby -> 2.7.0
- Rails -> 6.1.3

Now you can just run the following commands:

* Installing the gems
```bash
bundle install
```

* Installing yarn dependencies
```bash
yarn install
```

Once all gems and frontend packages are installed, the next step is to run a couple of commands to setup the DB locally
and seed some data for testing.

* Setup the DB 
```bash
rails db:setup db:migrate db:seed
```
With this command the DB will be created, it runs all migrations and also seeds some data into the DB, so it doesn't 
need to be done manually while testing.

Note: This application is setup to use the `sqlite` database.

### Running Application Locally

Start the rails server:
```
rails s --binding=127.0.0.1
```

Start webpack:
```bash
./bin/webpack-dev-server
```

### Running Tests

In order to run the beautiful set of tests on this application, just run the following on your terminal: 
```bash
bundle exec rake test
```

Note: This project is NOT using RSpec for unit tests, instead it is using the default test framework from rails in order to
save some time during the implementation.

### React Components

In order to save time during the implementation and styling of this application, the components from [material-ui](https://material-ui.com/)
was used, so there was no much time required to add styles and some functionality to each individual component. 

### CI - GitHub Actions

There was an attempt to add a GitHub action to run the tests on each push/pull_request; however since it was not required for now, I've
decided to stop it and start investing time on functionality that was actually required.
