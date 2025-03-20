from rest_framework import viewsets
from .models import CompanyAuthorization, Company, CompanyEmployee, EmployeeAuthorization, EmployeeRequests, User, UserAuthorization, Vacancy, JobExperience, Resume, Category, CompanyReview, DisabilityDescription, DisabilityGroup, Education, VacancyReview, CompanyReview, Application
from .serializers import ApplicationSerializer, CategorySerializer, CompanySerializer, CompanyAuthorizationSerializer, CompanyEmployeeSerializer, CompanyReviewSerializer, DisabilityDescriptionSerializer, DisabilityGroupSerializer, EducationSerializer, EmployeeAuthorizationSerializer, EmployeeRequestsSerializer, JobExperienceSerializer, ResumeSerializer, UserSerializer, UserAuthorizationSerializer, VacancySerializer, VacancyReviewSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


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

# class UserRegistrationView(APIView):
#     def post(self, request, *args, **kwargs):
#         serializer = UserRegistrationSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()  
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserRegistrationSerializer

class UserRegistrationView(APIView):
    def post(self, request, *args, **kwargs):
        # Створюємо серіалізатор для даних з запиту
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            # Якщо серіалізатор дійсний, зберігаємо нового користувача
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # Повертаємо успішний статус
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Якщо є помилки, повертаємо їх