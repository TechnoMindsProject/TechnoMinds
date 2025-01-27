from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ApplicationViewSet, CategoryViewSet, CompanyViewSet, CompanyAuthorizationViewSet, CompanyEmployeeViewSet, CompanyReviewViewSet, DisabilityDescriptionViewSet, DisabilityGroupViewSet, EducationViewSet, EmployeeAuthorizationViewSet, EmployeeRequestsViewSet, JobExperienceViewSet, ResumeViewSet, UserViewSet, UserAuthorizationViewSet, VacancyViewSet, VacancyReviewViewSet

router = DefaultRouter()
router.register(r'applications', ApplicationViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'companies', CompanyViewSet)
router.register(r'company_authorizations', CompanyAuthorizationViewSet)
router.register(r'company_employees', CompanyEmployeeViewSet)
router.register(r'company_reviews', CompanyReviewViewSet)
router.register(r'disability_descriptions', DisabilityDescriptionViewSet)
router.register(r'disability_groups', DisabilityGroupViewSet)
router.register(r'educations', EducationViewSet)
router.register(r'employee_authorizations', EmployeeAuthorizationViewSet)
router.register(r'employee_requests', EmployeeRequestsViewSet)
router.register(r'job_experiences', JobExperienceViewSet)
router.register(r'resumes', ResumeViewSet)
router.register(r'users', UserViewSet)
router.register(r'user_authorizations', UserAuthorizationViewSet)
router.register(r'vacancies', VacancyViewSet)
router.register(r'vacancy_reviews', VacancyReviewViewSet)

urlpatterns = router.urls