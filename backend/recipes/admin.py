from django.contrib import admin
from .models import Recipe

# create a class for the admin-model integration
class RecipeAdmin(admin.ModelAdmin):
    list_display = ("title","ingredients","instructions")

admin.site.register(Recipe, RecipeAdmin)
