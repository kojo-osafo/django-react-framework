from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets
from .models import Recipe
from .serializers import RecipeSerializer
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def view_recipe(request):
    if request.method == "GET":
        try:
            title = request.GET.get("title")
            
            if not title:
                return JsonResponse({"error": "Missing required fields"}, status=400)
            
            recipeData = Recipe.objects.filter(title=title).values()

            if recipeData.exists():
                return JsonResponse({"recipes": list(recipeData)}, status=200)

            return JsonResponse({"error": "No recipe was found"}, status=404)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=400)

@csrf_exempt
def add_new_recipe(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            
            if not data.get("title") or not data.get("ingredients") or not data.get("instructions"):
                return JsonResponse({"error": "Missing required fields"}, status=400)
            
            new_recipe = Recipe(
                title=data["title"],
                ingredients=data["ingredients"],
                instructions=data["instructions"]
            )
            new_recipe.save()

            return JsonResponse({"message": "Recipe added successfully", "recipe_id": new_recipe.id})

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=400)