# Generated by Django 3.2.5 on 2021-07-13 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_alter_todo_datecompleted'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='is_email_verified',
            field=models.BooleanField(default=False),
        ),
    ]