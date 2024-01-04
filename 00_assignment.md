# Assignment 01
    create the project: assignment
    create two component => servers, server
    ng g c servers
    ng g c server

    servers.component.ts
    servers{name:string, desc:string}[] =[];
    <div *ngFor="let item of servers">
        <app-server [name]="item.name"  [desc]="item.desc"></app-server>
    </div>

    html
    <app-server> with a loop passing the value


    server
    name
    description


# Assignment 02
    In app.component
    serversOrBluePrints:{name:string, content:string, type:string}[] = [];
    type = server or blueprint

    In Html, display the panel with the details.


# Assignment 03
    create three component
    compA => call compA as element selector
    compB => attribute selector
    compC => class selector

# Assignment 04
    create the component evenOdd
    initally, It will display number 1 to 10;
    for even number, text will be in blue color
    for odd number, text will be in red color
    add two button 
        button1 => Even
        button2 => Odd


# Assignment 05
   do the pratice of pipe operator