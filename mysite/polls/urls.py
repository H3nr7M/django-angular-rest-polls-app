from django.urls import path
from .views import QuestionListCreateView, QuestionRetrieveUpdateDestroyView, ChoiceVoteView

app_name = 'polls' #especificar espacio de nombres, para poder utilizar las mismas vistas en diferentes apps del proyecto

urlpatterns = [
    path("", QuestionListCreateView.as_view(), name="question-list-create"),
    path("<int:pk>/", QuestionRetrieveUpdateDestroyView.as_view(), name="question-retrieve-update-destroy"),
    path("<int:pk>/vote/", ChoiceVoteView.as_view(), name="choice-vote"),
    # path("", views.IndexView.as_view(), name="index"),
    # path("api/polls/<int:pk>/", views.DetailView.as_view(), name="detail"),
    # path("api/polls/<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    # path("api/polls/<int:question_id>/vote/", views.vote, name="vote"),
]