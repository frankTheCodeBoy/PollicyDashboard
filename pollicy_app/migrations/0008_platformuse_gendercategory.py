# Generated by Django 4.1.7 on 2023-03-15 16:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pollicy_app', '0007_alter_commentstats_unique_together_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='platformuse',
            name='gendercategory',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='pollicy_app.gendercategory'),
            preserve_default=False,
        ),
    ]
