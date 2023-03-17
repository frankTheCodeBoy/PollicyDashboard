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
]
