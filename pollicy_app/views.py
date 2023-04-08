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
	input_text = request.GET.get('txt_input')
	display_text = machine_fun(input_text)
	response = {
		'display_text': display_text,
	}
	data = json.dumps(response)
	return HttpResponse(data, content_type='application/json')

def flourish_view(request):
	return render(
		request, "pollicy_app/flourish.html", {}
	)

def intro_view(request):
	return render(
		request, "pollicy_app/intro.html", {}
	)