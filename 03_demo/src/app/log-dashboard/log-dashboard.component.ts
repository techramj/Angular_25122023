import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-dashboard',
  templateUrl: './log-dashboard.component.html',
  styleUrl: './log-dashboard.component.css'
})
export class LogDashboardComponent implements OnInit {

  logs:any[] = [];

  constructor(private logService:LogService){}

  ngOnInit(): void {
    this.logs = this.logService.getLogs();
  }

}
