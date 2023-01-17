import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar los componentes
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  //ponemos los objetos
  { path: '', component:ShowComponent},
  { path: 'create', component:CreateComponent},
  { path: 'edit/:id', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
