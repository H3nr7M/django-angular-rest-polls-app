//question-detail-component.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollsService } from '../polls.service'; 
import { Question } from '../models/question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail-component.component.html',
  styleUrls: ['./question-detail-component.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: Question[] = []; // Objeto para almacenar los detalles de la pregunta

  constructor(private route: ActivatedRoute, private pollsService: PollsService) { }

  ngOnInit(): void {
    // Obtener el id de la pregunta de los parámetros de la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Llamar al servicio para obtener los detalles de la pregunta por su id
    this.pollsService.getPollDetail(id).subscribe(question => {
      this.question = question;
    });
  }
}

