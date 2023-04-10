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
    path(
		"findings_view/",
    views.findings_view,
    name='findings_view',
),
    path(
    "women_sm_view/",
    views.women_sm_view,
    name='women_sm_view',
),
    path(
    "social_response_view/",
    views.social_response_view,
    name='social_response_view',
),
    path(
    "ovawp_proof_view/",
    views.ovawp_proof_view,
    name='ovawp_proof_view',
),
    path(
    "variables_view/",
    views.variables_view,
    name='variables_view',
),
    path(
    "rels_view/",
    views.rels_view,
    name='rels_view',
),
]
