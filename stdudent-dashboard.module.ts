import { NgModule } from '@angular/core';

import { StudentDashRoutingModule, routedComponents } from './student-dashboard-routing.module';

@NgModule({
  imports: [StudentDashRoutingModule],
  declarations: [routedComponents]
})
export class StudentDashBoardModule { }
