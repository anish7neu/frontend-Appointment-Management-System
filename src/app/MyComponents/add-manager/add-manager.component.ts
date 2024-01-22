import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Manager } from 'src/app/model/manager';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css'],
})
export class AddManagerComponent {
  addManagerForm = this.formBuilder.group({
    managerId: 0,
    firstName: new FormControl('', [
      Validators.maxLength(20),
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.maxLength(20),
      Validators.required,
    ]),
    address: new FormControl('', [
      Validators.maxLength(30),
      Validators.required,
    ]),
    phone: new FormControl('', [
      Validators.pattern('^[0-9]{10}$'),
      Validators.required,
    ]),
    gender: new FormControl('', [Validators.required]),
  });

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(): void {
    this.dataService
      .addManagerData(this.addManagerForm.value as Manager)
      .subscribe((data) => {
        if (data) {
          console.warn('Added Successfully');
          this.addManagerForm.reset();
          this.router.navigate(['']);
        } else {
          alert('Error Adding Manager');
        }
      });
  }

  //Form validators text
  get firstName() {
    return this.addManagerForm.get('firstName');
  }
  get lastName() {
    return this.addManagerForm.get('lastName');
  }
  get address() {
    return this.addManagerForm.get('address');
  }
  get phone() {
    return this.addManagerForm.get('phone');
  }
  get gender() {
    return this.addManagerForm.get('gender');
  }
}
