# Angular
## why Angular?
1.  Angular is an open source front-end JS framework.
2.  Angular uses modular components to increase code reuse.
3.  Angular application in written in TS.
4.  Angular has been used long enough and has support.

## what is Angular
        Angular is javascript framework that allows you to create a single page application(SPA).


## Difference between Angular, React & Vue   
![](assests/01_angular_vs_react.png)    


## Angular Setup
1. Install visual studio code ide
    https://code.visualstudio.com/download

2. Install node js (window installer 64 bit)
    https://nodejs.org/en/download
    
        to test , run the below command 
        node -v
        npm -v

3. Install angular CLI
    - execute the below command
  
            npm install -g @angular/cli

    - to check angular is installed, execute the below command

            ng version

## create the new project 
### Angular 17
    ng new <project_name>
    ng new 01_demo

    Which stylesheet format would you like to use? (Use arrow keys)
    >css
    Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N) N

### Angular 16
    ng new <project_name>
    ng new 01_demo
    Which stylesheet format would you like to use? (Use arrow keys)
    >css
    Would you want routing? (y/N) Y

### Angular 17 similar to Angular 16 structure
    ng new <project_name> --standalone false
    ng new 02_demo --standalone false

    
    Which stylesheet format would you like to use? (Use arrow keys)
    >css
    Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N) N



### run the project
    cd project_folder
    npm start
    ng serve

    ? Would you like to share pseudonymous usage data about this project with the Angular Team
    at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
    details and how to change this setting, see https://angular.io/analytics. (y/N) N


### add the bootstrap in the project
    cd project_path
    npm intall bootstrap@3

-   add the path in angular.json file(style property) (line no 37)

        "./node_modules/bootstrap/dist/css/bootstrap.min.css",

- changes in the angular files will look like as below

        "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
