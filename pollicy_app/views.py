from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from machine_script import machine_fun
import json

def index(request):
	return render(
		request, "pollicy_app/index.html", {}
	)

def hate_speech(request):
	return render(
		request, "pollicy_app/hatespeech.html", {}
	)

def output_text(request):
	input_text = request.GET.get('query','')
	text = list(input_text.strip().split())
	display_text = machine_fun(text)
	response = {
		'display_text': display_text,
	}
	data = json.dumps(response)
	return HttpResponse(data, content_type='application/json')

		