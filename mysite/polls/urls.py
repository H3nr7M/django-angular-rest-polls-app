from django.urls import path
from . import views

app_name = 'polls' #especificar espacio de nombres, para poder utilizar las mismas vistas en diferentes apps del proyecto

urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path("api/polls/<int:pk>/", views.DetailView.as_view(), name="detail"),
    path("api/polls/<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    path("api/polls/<int:question_id>/vote/", views.vote, name="vote"),
]