from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from machine_script import machine_fun
from django.http import JsonResponse
from django.template.loader import render_to_string
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

def intro_view(request):
	return render(
		request, "pollicy_app/intro.html", {}
	)

def research_view(request):
	return render(
		request, "pollicy_app/researchobjects.html", {}
	)

def findings_view(request):
	return render(
		request, "pollicy_app/findings.html", {}
	)

def women_sm_view(request):
	if request.method == 'GET':
		data = render_to_string("pollicy_app/women_using_sm.html", {})
		return JsonResponse(data, safe=False)
	
def social_response_view(request):
	if request.method == 'GET':
		data = render_to_string("pollicy_app/social_media_response.html", {})
		return JsonResponse(data, safe=False)

def ovawp_proof_view(request):
	if request.method == 'GET':
		data = render_to_string("pollicy_app/ovawp_evidence.html", {})
		return JsonResponse(data, safe=False)
	
def variables_view(request):
	return render(
		request, "pollicy_app/ovawp_vs_factors.html", {}
	)

def rels_view(request):
	if request.method == 'GET':
		data = render_to_string("pollicy_app/apparent_rels.html", {})
		return JsonResponse(data, safe=False)

def fb_post_view(request):
	return render(
		request, "social_share/fb-social.html", {}
	)

def twitter_post_view(request):
	return render(
		request, "social_share/twitter-social.html", {}
	)

def google_post_view(request):
	return render(
		request, "social_share/google-social.html", {}
	)

def telegram_post_view(request):
	return render(
		request, "social_share/telegram-social.html", {}
	)