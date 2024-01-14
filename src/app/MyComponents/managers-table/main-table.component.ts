import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Manager } from 'src/app/model/manager';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent implements OnInit {
  managers: Manager[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService
      .getManagerData()
      .subscribe((data) => (this.managers = data));
  }

  btnClick(id: number) {
    this.router.navigate([`addVisitor/${id}`]);
  }
}
