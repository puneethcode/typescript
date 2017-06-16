import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentBoardComponent } from './student-dashboard';

const routes: Routes = [
  { path: '', component: StudentBoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentDashRoutingModule { }

export const routedComponents = [StudentBoardComponent];
