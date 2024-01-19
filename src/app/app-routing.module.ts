import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddManagerComponent } from './MyComponents/add-manager/add-manager.component';
import { AddVisitorComponent } from './MyComponents/add-visitor/add-visitor.component';
import { MainTableComponent } from './MyComponents/managers-table/main-table.component';
import { VisitorsOfManagerComponent } from './MyComponents/visitors-of-manager/visitors-of-manager.component';

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
  {
    component: VisitorsOfManagerComponent,
    path: ':id/Visitors',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
