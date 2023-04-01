from django.contrib import admin
import datetime

from .models import Intro, Finding, Objective

admin.site.register(Intro)
admin.site.register(Finding)
admin.site.register(Objective)
