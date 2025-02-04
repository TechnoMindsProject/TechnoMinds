from django import forms
from .models import CompanyAuthorization, Company, CompanyEmployee, EmployeeAuthorization, EmployeeRequests, User, UserAuthorization

class CompanyAuthorizationForm(forms.ModelForm):
    class Meta:
        model = CompanyAuthorization
        fields = ['login', 'password_hash']

class CompanyForm(forms.ModelForm):
    class Meta:
        model = Company
        fields = ['company_name', 'manager_surname', 'manager_name', 'phone_number', 'email', 'website', 'address', 'company_authorization']

class CompanyEmployeeForm(forms.ModelForm):
    class Meta:
        model = CompanyEmployee
        fields = ['employee_name', 'employee_surname', 'category', 'company', 'employee_authorization', 'is_approved']

class EmployeeAuthorizationForm(forms.ModelForm):
    class Meta:
        model = EmployeeAuthorization
        fields = ['login', 'password_hash']

class EmployeeRequestsForm(forms.ModelForm):
    class Meta:
        model = EmployeeRequests
        fields = ['employee', 'company', 'requested_at']

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['user_name', 'user_surname', 'gender', 'birthday_date', 'phone_number', 'email', 'address', 'created_at', 'user_authorization']

class UserAuthorizationForm(forms.ModelForm):
    class Meta:
        model = UserAuthorization
        fields = ['login', 'password_hash']
