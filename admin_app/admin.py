from django.contrib import admin
import datetime

from .models import Document, Intro, Finding, Objective, MediaUsage, MediaResponse
from .models import OvawpOtherFactors, ApparentRelations

admin.site.register(Document)
admin.site.register(Intro)
admin.site.register(Finding)
admin.site.register(Objective)
admin.site.register(MediaUsage)
admin.site.register(MediaResponse)
admin.site.register(OvawpOtherFactors)
admin.site.register(ApparentRelations)

