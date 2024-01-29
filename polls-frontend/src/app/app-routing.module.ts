import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './question-list-component/question-list-component.component';
import { QuestionDetailComponent } from './question-detail-component/question-detail-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' }, // Redirecciona al componente de lista de preguntas por defecto
  { path: 'questions', component: QuestionListComponent },
  { path: 'questions/:id', component: QuestionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
