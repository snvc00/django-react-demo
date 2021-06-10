from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=60)
    price = models.PositiveIntegerField()
    stock = models.PositiveIntegerField()
    image = models.CharField(max_length=200)

