from django.contrib import admin
from .models import CompanyAuthorization, Company, CompanyEmployee, EmployeeAuthorization, EmployeeRequests, User, UserAuthorization


admin.site.register(CompanyAuthorization)
admin.site.register(Company)
admin.site.register(CompanyEmployee)
admin.site.register(EmployeeAuthorization)
admin.site.register(EmployeeRequests)
admin.site.register(User)
admin.site.register(UserAuthorization)
