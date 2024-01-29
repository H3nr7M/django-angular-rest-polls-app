from rest_framework import generics
from rest_framework.response import Response
from .serializers import QuestionSerializer, ChoiceSerializer
from .models import Question, Choice


from typing import Any
from django.db.models.query import QuerySet
from django.utils import timezone
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.urls import reverse
from django.template import loader
from django.shortcuts import render, get_object_or_404
from django.views import generic

# class IndexView(generic.ListView):
#     template_name = 'polls/index.html'
#     context_object_name = 'latest_question_list'

#     def get_queryset(self):
#         return Question.objects.filter(pub_date__lte = timezone.now()).order_by('-pub_date')[:5]
'''maneja la lista y creación de preguntas.'''
class QuestionListCreateView(generics.ListCreateAPIView):
    queryset = Question.objects.filter(pub_date__lte=timezone.now()).order_by('-pub_date')[:5]
    serializer_class = QuestionSerializer

# class DetailView(generic.DetailView):
#     model = Question
#     template_name = 'polls/detail.html'

#     def get_queryset(self) -> QuerySet[Any]:
#         return Question.objects.filter(pub_date__lte = timezone.now())

'''maneja la recuperación, actualización y eliminación de preguntas.'''
class QuestionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.filter(pub_date__lte=timezone.now())
    serializer_class = QuestionSerializer

    def get_object(self):
        pk = self.kwargs.get('pk')
        return get_object_or_404(Question, pk=pk)

# class ResultsView(generic.DetailView):
#     model = Question
#     template_name = 'polls/results.html'

# def vote(request, question_id):
#     question = get_object_or_404(Question, pk=question_id)
#     try:
#         selected_choice = question.choice_set.get(pk=request.POST['choice'])
#     except(KeyError, Choice.DoesNotExist):
#         return render(request, 'polls/detail.html',
#                       {
#                           'question': question,
#                           'error_message': "You didn't select a choice.",    
#                       },)
#     else:
#         selected_choice.votes += 1
#         selected_choice.save()
#         return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
'''maneja la votación de opciones.'''
class ChoiceVoteView(generics.UpdateAPIView):
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.votes += 1
        instance.save()
        return Response({'success': True})
