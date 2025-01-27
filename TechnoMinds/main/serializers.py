from rest_framework import serializers
from .models import Application, Category, Company, CompanyAuthorization, CompanyEmployee, CompanyReview, DisabilityDescription, DisabilityGroup, Education, EmployeeAuthorization, EmployeeRequests, JobExperience, Resume, User, UserAuthorization, Vacancy, VacancyReview

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class CompanyAuthorizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyAuthorization
        fields = '__all__'

class CompanyEmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyEmployee
        fields = '__all__'

class CompanyReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyReview
        fields = '__all__'

class DisabilityDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisabilityDescription
        fields = '__all__'

class DisabilityGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisabilityGroup
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class EmployeeAuthorizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeAuthorization
        fields = '__all__'

class EmployeeRequestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeRequests
        fields = '__all__'

class JobExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobExperience
        fields = '__all__'

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserAuthorizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAuthorization
        fields = '__all__'

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'

class VacancyReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = VacancyReview
        fields = '__all__'
