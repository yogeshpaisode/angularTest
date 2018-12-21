import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import HospitalComponent from './components/hostpital/hospitalComponent';
import DepartmentComponent from './components/department/department.component';
import CommonComponent from './components/common/common.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hospital' },
  { path: 'hospital', component: HospitalComponent },
  { path: 'department', component: DepartmentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    DepartmentComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
