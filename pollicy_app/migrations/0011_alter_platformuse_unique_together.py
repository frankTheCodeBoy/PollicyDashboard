# Generated by Django 4.1.7 on 2023-03-17 09:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pollicy_app', '0010_socialmediaovawp'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='platformuse',
            unique_together={('gendercategory', 'socialplatform', 'frequency')},
        ),
    ]
