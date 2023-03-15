from django.db import models
from django.template.defaultfilters import slugify
import datetime

class StatsPeriod(models.Model):
	year = models.IntegerField(unique=True)
	slug = models.SlugField(unique=True)

	class Meta:
		verbose_name_plural = "Stats period"

	def save(self, *args, **kwargs):
		self.slug = slugify(self.year)
		super(StatsPeriod, self).save(*args, **kwargs)

	def __str__(self):
		return str(self.year)

class GenderCategory(models.Model):
	statsperiod = models.ForeignKey(StatsPeriod, on_delete=models.CASCADE)
	gender = models.CharField(max_length=6, unique=True)
	slug = models.SlugField(unique=True)

	class Meta:
		verbose_name_plural = "Gender categories"

	def save(self, *args, **kwargs):
		self.slug = slugify(self.gender)
		super(GenderCategory, self).save(*args, **kwargs)

	def __str__(self):
		return self.gender

class SocialPlatform(models.Model):
	gendercategory = models.ForeignKey(GenderCategory, on_delete=models.CASCADE)
	platform = models.CharField(max_length=12)
	slug = models.SlugField()

	class Meta:
		unique_together = ('gendercategory', 'platform')

	def save(self, *args, **kwargs):
		self.slug = slugify(self.platform)
		super(SocialPlatform, self).save(*args, **kwargs)

	def __str__(self):
		return self.platform

class PlatformUse(models.Model):
	gendercategory = models.ForeignKey(GenderCategory, on_delete=models.CASCADE)
	socialplatform = models.ForeignKey(SocialPlatform, on_delete=models.CASCADE)
	frequency = models.CharField(max_length=40)
	usagepercent = models.IntegerField(default=0)
	slug = models.SlugField()

	class Meta:
		verbose_name_plural = "Platform Use"
		unique_together = ('socialplatform','frequency')

	def save(self, *args, **kwargs):
		self.slug = slugify(self.frequency)
		super(PlatformUse, self).save(*args, **kwargs)

	def __str__(self):
		return self.frequency

class CommentStats(models.Model):
	gendercategory = models.ForeignKey(GenderCategory, on_delete=models.CASCADE)
	commentcategory = models.CharField(max_length=12)
	percentage = models.IntegerField(default=0)

	class Meta:
		verbose_name_plural = "Comment stats"
		unique_together = ('gendercategory','commentcategory')

	def __str__(self):
		return self.commentcategory

class Party(models.Model):
	name = models.CharField(max_length=128, unique=True)

	class Meta:
		verbose_name_plural = "Parties"

	def __str__(self):
		return self.name

class AgeBracket(models.Model):
	agebracket = models.CharField(max_length=128, unique=True)

	def __str__(self):
		return self.agebracket









	

