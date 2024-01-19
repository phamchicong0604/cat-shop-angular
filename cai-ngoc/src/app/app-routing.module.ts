import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';

const routes: Routes = [
  {
    path: '',
    component: DashboadComponent,
  },
  {
    path: 'dashboad',
    component: DashboadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
