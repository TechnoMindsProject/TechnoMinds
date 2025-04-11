from django import forms
from .models import CompanyAuthorization, Company, CompanyEmployee, EmployeeAuthorization, EmployeeRequests, User, UserAuthorization, Vacancy, JobExperience, Resume, Category, CompanyReview, DisabilityDescription, DisabilityGroup, Education, VacancyReview, CompanyReview, Application

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

class VacancyForm(forms.ModelForm):
    class Meta:
        model = Vacancy
        fields = ['company', 'category', 'name', 'description', 'requirements', 'salary', 'job_type', 'address', 'created_at']

class JobExperienceForm(forms.ModelForm):
    class Meta:
        model = JobExperience
        fields = ['user', 'company_name', 'position', 'start_date', 'end_date', 'description']

class ResumeForm(forms.ModelForm):
    class Meta:
        model = Resume
        fields = ['user', 'pdf_file', 'created_at']

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ['category_name']

class CompanyReviewForm(forms.ModelForm):
    class Meta:
        model = CompanyReview
        fields = ['user', 'company', 'rating', 'message', 'submitted_at']

class DisabilityDescriptionForm(forms.ModelForm):
    class Meta:
        model = DisabilityDescription
        fields = ['disability_group', 'description', 'disability_certificate']

class DisabilityGroupForm(forms.ModelForm):
    class Meta:
        model = DisabilityGroup
        fields = ['user', 'disability_type']

class EducationForm(forms.ModelForm):
    class Meta:
        model = Education
        fields = ['user', 'institution_name', 'degree', 'field_of_study', 'start_day', 'end_date']

class VacancyReviewForm(forms.ModelForm):
    class Meta:
        model = VacancyReview
        fields = ['user', 'vacancy', 'rating', 'message', 'submitted_at']

class VacancyReviewForm(forms.ModelForm):
    class Meta:
        model = VacancyReview
        fields = ['user', 'vacancy', 'rating', 'message', 'submitted_at']

class ApplicationForm(forms.ModelForm):
    class Meta:
        model = Application
        fields = ['user', 'vacancy', 'resume', 'status', 'created_at']