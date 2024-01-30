import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list-component/question-list-component.component';
// import { QuestionDetailComponentComponent } from './question-detail-component/question-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent
    // QuestionDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
