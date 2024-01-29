// question-list.component.ts

import { Component, OnInit } from '@angular/core';
import { PollsService } from '../polls.service'; // Importa el servicio para obtener la lista de preguntas
import { Question } from '../models/question'; 

// decorador Angular que la clase es un componente y tiene metadatos
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list-component.component.html',
  styleUrls: ['./question-list-component.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = []; 

  constructor(private pollsService: PollsService) { }

  ngOnInit(): void {
    this.pollsService.getPolls().subscribe((questions: Question[]) => {
      this.questions = questions;
    });
  }
}
