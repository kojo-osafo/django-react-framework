from django.contrib import admin
from django.urls import path
from recipes import views

# can condense recipe/add/ and recipe/view/ into a singular recipe/ endpoint and handle
# them differently based on the request type

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/recipe/view/', views.view_recipe, name='recipe-list'),
    path('api/recipe/add/', views.add_new_recipe, name='recipe-add'),
    path('api/recipe/surprise/', views.groq_query, name='recipe-ai'),

]
