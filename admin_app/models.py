from django.db import models
import datetime

class Intro(models.Model):
    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        if len(self.text) <= 50:
            return self.text
        else:
            return f"{self.text[:50]}...."
        
class Finding(models.Model):
    title = models.CharField(max_length=128)
    text = models.TextField()
    image = models.ImageField(blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Objective(models.Model):
    title = models.CharField(max_length=128)
    text = models.TextField()
    image = models.ImageField(blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title