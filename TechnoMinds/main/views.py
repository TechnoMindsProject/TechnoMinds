from rest_framework import viewsets
from .models import Application, Category, Company, CompanyAuthorization, CompanyEmployee, CompanyReview, DisabilityDescription, DisabilityGroup, Education, EmployeeAuthorization, EmployeeRequests, JobExperience, Resume, User, UserAuthorization, Vacancy, VacancyReview
from .serializers import ApplicationSerializer, CategorySerializer, CompanySerializer, CompanyAuthorizationSerializer, CompanyEmployeeSerializer, CompanyReviewSerializer, DisabilityDescriptionSerializer, DisabilityGroupSerializer, EducationSerializer, EmployeeAuthorizationSerializer, EmployeeRequestsSerializer, JobExperienceSerializer, ResumeSerializer, UserSerializer, UserAuthorizationSerializer, VacancySerializer, VacancyReviewSerializer

class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyAuthorizationViewSet(viewsets.ModelViewSet):
    queryset = CompanyAuthorization.objects.all()
    serializer_class = CompanyAuthorizationSerializer

class CompanyEmployeeViewSet(viewsets.ModelViewSet):
    queryset = CompanyEmployee.objects.all()
    serializer_class = CompanyEmployeeSerializer

class CompanyReviewViewSet(viewsets.ModelViewSet):
    queryset = CompanyReview.objects.all()
    serializer_class = CompanyReviewSerializer

class DisabilityDescriptionViewSet(viewsets.ModelViewSet):
    queryset = DisabilityDescription.objects.all()
    serializer_class = DisabilityDescriptionSerializer

class DisabilityGroupViewSet(viewsets.ModelViewSet):
    queryset = DisabilityGroup.objects.all()
    serializer_class = DisabilityGroupSerializer

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class EmployeeAuthorizationViewSet(viewsets.ModelViewSet):
    queryset = EmployeeAuthorization.objects.all()
    serializer_class = EmployeeAuthorizationSerializer

class EmployeeRequestsViewSet(viewsets.ModelViewSet):
    queryset = EmployeeRequests.objects.all()
    serializer_class = EmployeeRequestsSerializer

class JobExperienceViewSet(viewsets.ModelViewSet):
    queryset = JobExperience.objects.all()
    serializer_class = JobExperienceSerializer

class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserAuthorizationViewSet(viewsets.ModelViewSet):
    queryset = UserAuthorization.objects.all()
    serializer_class = UserAuthorizationSerializer

class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyReviewViewSet(viewsets.ModelViewSet):
    queryset = VacancyReview.objects.all()
    serializer_class = VacancyReviewSerializer
