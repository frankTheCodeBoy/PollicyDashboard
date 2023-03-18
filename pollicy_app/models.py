from django.db import models
from django.template.defaultfilters import slugify
import datetime

# All Models will fall under a specific year/ statistic period
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

# The Gender model defined here
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

# Social Platform model defined here
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

# Model for Social Media Usage 
class PlatformUse(models.Model):
	gendercategory = models.ForeignKey(GenderCategory, on_delete=models.CASCADE)
	socialplatform = models.ForeignKey(SocialPlatform, on_delete=models.CASCADE)
	frequency = models.CharField(max_length=40)
	usagepercent = models.IntegerField(default=0)
	slug = models.SlugField()

	class Meta:
		verbose_name_plural = "Platform Use"
		unique_together = ('gendercategory','socialplatform','frequency')

	def save(self, *args, **kwargs):
		self.slug = slugify(self.frequency)
		super(PlatformUse, self).save(*args, **kwargs)

	def __str__(self):
		return self.frequency

# Model for classing of comments (Pos or Neg)
class CommentStats(models.Model):
	socialplatform = models.ForeignKey(SocialPlatform,on_delete=models.CASCADE)
	gendercategory = models.ForeignKey(GenderCategory, on_delete=models.CASCADE)
	commentcategory = models.CharField(max_length=12)
	percentage = models.IntegerField(default=0)

	class Meta:
		verbose_name_plural = "Comment stats"
		unique_together = ('gendercategory','socialplatform','commentcategory')

	def __str__(self):
		return self.commentcategory

# Political party model
class Party(models.Model):
	name = models.CharField(max_length=128, unique=True)
	slug = models.SlugField(unique=True)

	class Meta:
		verbose_name_plural = "Parties"

	def save(self, *args, **kwargs):
		self.slug = slugify(self.name)
		super(Party, self).save(*args, **kwargs)

	def __str__(self):
		return self.name

# Age bracket model
class AgeBracket(models.Model):
	agegroup = models.CharField(max_length=128, unique=True)
	slug = models.SlugField(unique=True)

	def save(self, *args, **kwargs):
		self.slug = slugify(self.agegroup)
		super(AgeBracket, self).save(*args, **kwargs)

	def __str__(self):
		return self.agegroup


# Ovawp Models begin here
class GenderOvawp(models.Model):
	gendercategory = models.ForeignKey(GenderCategory, on_delete=models.CASCADE)
	ovawp = models.CharField(max_length=128)
	percentage = models.IntegerField(default=0)

	class Meta:
		verbose_name_plural = "Gender ovawp"
		unique_together = ('gendercategory', 'ovawp')

	def __str__(self):
		return self.ovawp

class PartyOvawp(models.Model):
	partyname = models.ForeignKey(Party, on_delete=models.CASCADE)
	ovawp = models.CharField(max_length=128)
	percentage = models.IntegerField(default=0) 

	class Meta:
		verbose_name_plural = "Party ovawp"
		unique_together = ('partyname','ovawp')

	def __str__(self):
		return self.ovawp

class AgeOvawp(models.Model):
	agegroup = models.ForeignKey(AgeBracket, on_delete=models.CASCADE)
	ovawp = models.CharField(max_length=128)
	percentage = models.IntegerField(default=0)

	class Meta:
		verbose_name_plural = "Age ovawp"
		unique_together = ('agegroup','ovawp')

	def __str__(self):
		return self.ovawp
	
class SocialMediaOvawp(models.Model):
	platformuse = models.ForeignKey(PlatformUse, on_delete=models.CASCADE)
	ovawp = models.CharField(max_length=128)
	percentage = models.IntegerField(default=0)

	class Meta:
		verbose_name_plural = "Social Media ovawp"
		unique_together = ('platformuse','ovawp')

	def __str__(self):
		return self.ovawp
