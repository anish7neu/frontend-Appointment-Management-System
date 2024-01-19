import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Visitor } from 'src/app/model/visitor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visitors-of-manager',
  templateUrl: './visitors-of-manager.component.html',
  styleUrls: ['./visitors-of-manager.component.css'],
})
export class VisitorsOfManagerComponent implements OnInit {
  visitors: Visitor[] = [];
  paramValue: Number = 0;
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      if (data['id']) {
        this.paramValue = data[`id`];
        this.dataService.visitorsOfManager(data['id']).subscribe((data) => {
          this.visitors = data;
        });
      }
    });
  }
}
