"""Defines URL patterns for admin_app"""
from django.urls import path
from . import views

app_name = "admin_app"

urlpatterns = [
    path(
        "upload_document/",
        views.DocumentCreateView.as_view(),
        name='upload_document',
    ),
    path(
        "view_documents/",
        views.DocumentListView.as_view(),
        name='view_documents',
    ),
    path(
        "download/<int:document_id>/",
        views.download,
        name='download',
    ),
]