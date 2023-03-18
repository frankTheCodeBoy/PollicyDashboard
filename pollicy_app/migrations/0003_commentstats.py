# Generated by Django 4.1.7 on 2023-03-17 16:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pollicy_app', '0002_delete_commentstats'),
    ]

    operations = [
        migrations.CreateModel(
            name='CommentStats',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('commentcategory', models.CharField(max_length=12)),
                ('percentage', models.IntegerField(default=0)),
                ('gendercategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pollicy_app.gendercategory')),
                ('socialplatform', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pollicy_app.socialplatform')),
            ],
            options={
                'verbose_name_plural': 'Comment stats',
                'unique_together': {('gendercategory', 'socialplatform', 'commentcategory')},
            },
        ),
    ]
