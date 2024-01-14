import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Visitor } from 'src/app/model/visitor';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css'],
})
export class AddVisitorComponent implements OnInit {
  addVisitorForm = this.formBuilder.group({
    visitorId: 0,
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    gender: '',
    remarks: '',
    managerId: 0,
    date: '',
  });

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      if (data['id']) {
        this.addVisitorForm.patchValue({ managerId: data['id'] });
      }
    });
  }

  onVisitorSubmit(): void {
    this.dataService
      .addVisitorData(this.addVisitorForm.value as Visitor)
      .subscribe((data) => {
        if (data) {
          console.warn('Added Successfully');
          this.addVisitorForm.reset();
        } else {
          alert('Error Adding Manager');
        }
      });
  }
}
