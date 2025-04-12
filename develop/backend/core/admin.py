from django.contrib import admin
from .models import (
    CompanyAuthorization, Company,
    EmployeeAuthorization, CompanyEmployee,
    UserAuthorization, User, Category
)

@admin.register(CompanyAuthorization)
class CompanyAuthorizationAdmin(admin.ModelAdmin):
    list_display = ("id", "login")

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("id", "company_name", "email")

@admin.register(EmployeeAuthorization)
class EmployeeAuthorizationAdmin(admin.ModelAdmin):
    list_display = ("id", "login")

@admin.register(CompanyEmployee)
class CompanyEmployeeAdmin(admin.ModelAdmin):
    list_display = ("id", "employee_name", "employee_surname")

@admin.register(UserAuthorization)
class UserAuthorizationAdmin(admin.ModelAdmin):
    list_display = ("id", "login")

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "user_name", "user_surname", "email")

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "category_name")