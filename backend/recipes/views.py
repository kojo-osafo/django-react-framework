from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets
from .models import Recipe
from .serializers import RecipeSerializer
from django.views.decorators.csrf import csrf_exempt
from dotenv import load_dotenv
from groq import Groq
import os
import json

load_dotenv()

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

@csrf_exempt
def groq_query(request):
    if request.method == "POST":
        try:
            prompt = "Give me a delicious food recipe"
            data = json.loads(request.body)
            
            if data.get("ingredients"):
                prompt = "Give me a delicious recipe with the following ingredients:" + data["ingredients"]
            
            client = Groq()
            completion = client.chat.completions.create(
                model="llama3-8b-8192",
                messages=[
                    {
                        "role": "system",
                        "content": "Respond to the prompt in a JSON format with fields \"title\" containing the string of the name of the recipe, \"ingredients\" containing the string of the ingredients, and \"instructions\" containing the string of preparation methodology, or respond with all the fields as \"null\" if the ingredient given cannot be found in any human meal"
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                temperature=1,
                max_tokens=1024,
                top_p=1,
                stream=False,
                response_format={"type": "json_object"},
                stop=None,
            )

            response_data = json.loads(completion.choices[0].message.content)

            return JsonResponse(response_data, status=200)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=400)


# For API debugging
# prompt = "Give me a delicious food recipe"

# client = Groq()
# completion = client.chat.completions.create(
#     model="llama3-8b-8192",
#     messages=[
#         {
#             "role": "system",
#             "content": "Respond to the prompt in a JSON format with fields \"title\" containing the string of the name of the recipe, \"ingredients\" containing the string of the ingredients, and \"instructions\" containing the string of preparation methodology, or respond with all the fields as \"null\" if the ingredient given cannot be found in any human meal"
#         },
#         {
#             "role": "user",
#             "content": prompt
#         }
#     ],
#     temperature=1,
#     max_tokens=1024,
#     top_p=1,
#     stream=False,
#     response_format={"type": "json_object"},
#     stop=None,
# )

# print(completion.choices[0].message.content)
# print(json.loads(completion.choices[0].message.content))