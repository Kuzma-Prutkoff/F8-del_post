from django.db import models


class Post(models.Model):
    text = models.CharField(max_length=500)
    likes_count = models.IntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text
