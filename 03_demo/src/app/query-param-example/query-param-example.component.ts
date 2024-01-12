import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param-example',
  templateUrl: './query-param-example.component.html',
  styleUrl: './query-param-example.component.css'
})
export class QueryParamExampleComponent implements OnInit{

  constructor(private route:ActivatedRoute){
  }

  ngOnInit(): void {
    console.log(this.route.queryParamMap);
    console.log(this.route.queryParams);

    this.route.queryParams.subscribe(params=> {
      let a = params['a'];
      let b = params['b'];
      let c = params['r'];
      console.log('a= ',a);
      console.log('b= ',b);
      console.log('r= ',c);
    });
  }

}
