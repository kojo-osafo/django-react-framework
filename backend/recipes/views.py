from django.shortcuts import render

from rest_framework import viewsets
from .models import Recipe
from .serializers import RecipeSerializer
    
class RecipeView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def get_queryset(self):
        ingredients = self.request.query_params.get('ingredients')
        if ingredients:
            ingredients_list = ingredients.split(',')
            return self.queryset.filter(ingredients__icontains=ingredients_list)
        return self.queryset
