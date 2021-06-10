from api.Products.models import Product
from rest_framework import serializers
from api.Products.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"