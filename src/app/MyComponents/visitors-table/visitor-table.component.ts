import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Visitor } from 'src/app/model/visitor';

@Component({
  selector: 'app-visitor-table',
  templateUrl: './visitor-table.component.html',
  styleUrls: ['./visitor-table.component.css'],
})
export class VisitorTableComponent implements OnInit {
  visitors: Visitor[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getVisitorData()
      .subscribe((data) => (this.visitors = data));
  }
}
