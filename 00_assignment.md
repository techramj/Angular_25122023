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
