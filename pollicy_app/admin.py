from django.contrib import admin
import datetime
from .models import StatsPeriod, GenderCategory, SocialPlatform, PlatformUse
from .models import CommentStats, Party, AgeBracket
from .models import GenderOvawp, PartyOvawp, AgeOvawp, SocialMediaOvawp

class StatsPeriodAdmin(admin.ModelAdmin):
    list_display = ('year',)
    search_fields = ('year',)
    prepopulated_fields = {'slug': ("year",),}

admin.site.register(StatsPeriod, StatsPeriodAdmin)

class GenderCategoryAdmin(admin.ModelAdmin):
    list_display = ('statsperiod','gender',)
    search_fields = ('gender',)
    prepopulated_fields = {'slug': ("gender",),}
    autocomplete_fields = ('statsperiod',)

admin.site.register(GenderCategory, GenderCategoryAdmin)

class SocialPlatformAdmin(admin.ModelAdmin):
    list_display= ('gendercategory','platform',)
    search_fields = ('platform',)
    prepopulated_fields = {'slug': ("platform",),}
    autocomplete_fields = ('gendercategory',)

admin.site.register(SocialPlatform, SocialPlatformAdmin)

class PlatformUseAdmin(admin.ModelAdmin):
    list_display = ('gendercategory','socialplatform','frequency','usagepercent')
    search_fields = ('frequency',)
    prepopulated_fields = {'slug': ("frequency",),}
    autocomplete_fields = ('socialplatform','gendercategory')

admin.site.register(PlatformUse, PlatformUseAdmin)

class CommentStatsAdmin(admin.ModelAdmin):
    list_display = ('gendercategory','socialplatform','commentcategory','percentage',)
    search_fields = ('commentcategory',)
    autocomplete_fields = ('gendercategory','socialplatform')

admin.site.register(CommentStats, CommentStatsAdmin)

class PartyAdmin(admin.ModelAdmin):
    list_display= ('name',)
    search_fields = ('name',)
    prepopulated_fields = {'slug': ("name",),}

admin.site.register(Party, PartyAdmin)

class AgeBracketAdmin(admin.ModelAdmin):
    list_display = ('agegroup',)
    search_fields = ('agegroup',)
    prepopulated_fields = {'slug': ("agegroup",),}

admin.site.register(AgeBracket, AgeBracketAdmin)


# Ovawp Model Registration
class GenderOvawpAdmin(admin.ModelAdmin):
    list_display = ('gendercategory','ovawp','percentage')
    search_fields = ('ovawp',)
    autocomplete_fields = ('gendercategory',)

admin.site.register(GenderOvawp, GenderOvawpAdmin)

class PartyOvawpAdmin(admin.ModelAdmin):
    list_display = ('partyname','ovawp','percentage')
    search_fields = ('ovawp',)
    autocomplete_fields = ('partyname',)

admin.site.register(PartyOvawp, PartyOvawpAdmin)

class AgeOvawpAdmin(admin.ModelAdmin):
    list_display = ('agegroup','ovawp','percentage')
    search_fields = ('ovawp',)
    autocomplete_fields = ('agegroup',)

admin.site.register(AgeOvawp, AgeOvawpAdmin)

class SocialMediaOvawpAdmin(admin.ModelAdmin):
    list_display = ('platformuse','ovawp','percentage')
    search_fields = ('ovawp',)
    autocomplete_fields = ('platformuse',)

admin.site.register(SocialMediaOvawp, SocialMediaOvawpAdmin)