from django.contrib import admin
from django.urls import path
from recipes import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/recipe/view/', views.view_recipe, name='recipe-list'),
    path('api/recipe/add/', views.add_new_recipe, name='recipe-add'),


]
