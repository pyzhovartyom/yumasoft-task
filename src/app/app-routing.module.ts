import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './components/editor/editor.component';
import { TableComponent } from './components/table/table.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { NewSessionGuard } from './guards/new-session.guard';

const routes: Routes = [
  {
    path: '',
    component: TextareaComponent,
  },
  {
    path: 'table',
    component: TableComponent,
    canActivate: [NewSessionGuard]
  },
  {
    path: 'editor/:id',
    component: EditorComponent,
    canActivate: [NewSessionGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
