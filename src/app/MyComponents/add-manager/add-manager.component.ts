import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Manager } from 'src/app/model/manager';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css'],
})
export class AddManagerComponent {
  addManagerForm = this.formBuilder.group({
    managerId: 0,
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    gender: '',
  });

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.dataService
      .addManagerData(this.addManagerForm.value as Manager)
      .subscribe((data) => {
        if (data) {
          console.warn('Added Successfully');
          this.addManagerForm.reset();
        } else {
          alert('Error Adding Manager');
        }
      });
  }
}
