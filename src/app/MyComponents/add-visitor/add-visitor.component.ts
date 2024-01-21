import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Visitor } from 'src/app/model/visitor';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css'],
})
export class AddVisitorComponent implements OnInit {
  addVisitorForm = this.formBuilder.group({
    id: 0,
    firstName: new FormControl('', [
      Validators.maxLength(20),
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.maxLength(20),
      Validators.required,
    ]),
    address: new FormControl('', [
      Validators.maxLength(20),
      Validators.required,
    ]),
    phone: new FormControl('', [
      Validators.pattern('^[0-9]{10}$'),
      Validators.required,
    ]),
    gender: new FormControl('', [
      Validators.maxLength(20),
      Validators.required,
    ]),
    remarks: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
    managerId: new FormControl(0, [Validators.required]),
    date: new FormControl('', [Validators.min(1), Validators.required]),
  });

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
          console.log('Added Successfully');
          this.addVisitorForm.reset();
        } else {
          alert('Error Adding Manager');
        }
      });
    this.router.navigate(['']);
  }

  newdate() {
    let currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    return formattedDate;
  }

  //Get form value for validating
  get firstName() {
    return this.addVisitorForm.get('firstName');
  }
  get lastName() {
    return this.addVisitorForm.get('lastName');
  }
  get address() {
    return this.addVisitorForm.get('address');
  }
  get phone() {
    return this.addVisitorForm.get('phone');
  }
  get managerId() {
    return this.addVisitorForm.get('managerId');
  }
  get gender() {
    return this.addVisitorForm.get('gender');
  }
  get remarks() {
    return this.addVisitorForm.get('remarks');
  }
  get date() {
    return this.addVisitorForm.get('date');
  }
}
