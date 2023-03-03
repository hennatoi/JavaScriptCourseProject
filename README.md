Shared shopping list

This is an individual course project related to Aalto University's FITech course
Web Software Development.

With the Shopping list application, the user can create shopping lists in which
he can save the products he wants. Shopping lists can also be deactivated, and
individual products from shopping lists can be marked as collected. The front
page of the application keeps track of the number of created shopping lists and
products.

Project structure:

To run the Shopping list application locally, open up the terminal in the folder
that contains the docker-compose.yml file and type docker-compose up. To stop
the Shopping list application, press ctrl+c and after that press docker-compose
down.

Deno application, a PostgreSQL server, and a database migration process (Flyway)
starts automatically when launching the project with docker-compose up. By
default, the application starts on the port 7777 and when run locally, can be
accessed at http://localhost:7777.

Flyway is used to run the SQL commands in the database migration files that
reside in the flyway/sql-folder. Database uses a connection pool. Deno is the
runtime that we use for running web applications.

Application structure:

The application is launched using a file called app.js. Dependencies are defined
in a file called deps.js, which exports them into use of the project. The
application follows a three-tier architecture. Application uses a layered
architecture with views, controllers, services, and database.

Installations:

Deno extension for VSCode. Docker Desktop for Windows
