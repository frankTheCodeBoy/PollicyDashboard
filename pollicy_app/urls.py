"""Defines URL patterns for pollicy_app"""
from django.urls import path
from . import views

app_name = "pollicy_app"

urlpatterns = [
	path(
		"", 
		views.index, 
		name='index',
	),
    path(
		"hate_speech/",
        views.hate_speech,
        name='hate_speech',
	),
    path(
		"output/",
        views.output_text,
        name='output_text',
	),
    path(
		"intro_view/",
        views.intro_view,
        name='intro_view',
	),
    path(
		"research_view/",
        views.research_view,
        name='research_view',
	),
]
