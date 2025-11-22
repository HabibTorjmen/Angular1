import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactifformComponent } from './reactifform/reactifform.component';
import { TemplateFormComponentComponent } from './template-form-component/template-form-component.component';

const routes: Routes = [
  {path:'template-form', component: TemplateFormComponentComponent},
  {path:'reactive-form', component: ReactifformComponent},
  
  {path:'**', redirectTo:'/template-form', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
