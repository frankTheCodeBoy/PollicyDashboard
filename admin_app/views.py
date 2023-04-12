from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.views.generic import ListView

from .models import Document
from .forms import DocumentForm

class DocumentCreateView(CreateView):
    model = Document
    form_class = DocumentForm
    template_name = 'admin_app/upload.html'
    success_url = reverse_lazy('pollicy_app:index')

class DocumentListView(ListView):
    model = Document
    template_name = 'admin_app/documents.html'
    context_object_name = 'documents'

def download(request, document_id):
    document = get_object_or_404(Document, pk=document_id)
    response = HttpResponse(document.document, content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename="{document.document.name}"'
    return response