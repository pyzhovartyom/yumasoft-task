import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './components/editor/editor.component';
import { TableComponent } from './components/table/table.component';
import { TextareaComponent } from './components/textarea/textarea.component';

const routes: Routes = [
  {
    path: '',
    component: TextareaComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
  {
    path: '**',
    redirectTo: "/",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
