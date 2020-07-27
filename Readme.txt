To project works correctly you should enter next command in console(terminal), when you are in project's directory:  npm install --save-dev @angular-devkit/build-angular 

To run the project using docker enter next commands in console(terminal), when you are in project's directory:
 1.ng s -o

To run the project using docker enter next commands in console(terminal), when you are in project's directory:
 1. docker build --pull --rm -f "Dockerfile" -t testapp:latest "."
 2. docker run --rm -d  -p 80:80  testapp:latest

