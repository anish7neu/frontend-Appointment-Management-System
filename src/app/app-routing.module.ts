import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddManagerComponent } from './MyComponents/add-manager/add-manager.component';
import { AddVisitorComponent } from './MyComponents/add-visitor/add-visitor.component';
import { MainTableComponent } from './MyComponents/managers-table/main-table.component';

const routes: Routes = [
  {
    component: AddManagerComponent,
    path: 'addManager',
  },
  {
    component: AddVisitorComponent,
    path: 'addVisitor/:id',
  },
  {
    component: AddVisitorComponent,
    path: 'addVisitor',
  },

  {
    component: MainTableComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
