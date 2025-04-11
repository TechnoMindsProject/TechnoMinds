from django.contrib import admin
from django.urls import path, include
from .views import EmployeeRegisterView, EmployeeLoginView, EmployeeProfileView, EmployerRegisterView, EmployerLoginView, EmployerProfileView, UserProfileView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('api/employee/register/', EmployeeRegisterView.as_view(), name='employee-register'),
    path('api/employee/login/', EmployeeLoginView.as_view(), name='employee-login'),
    path('api/employee/profile/', EmployeeProfileView.as_view(), name='employee-profile'),
    path('api/employer/register/', EmployerRegisterView.as_view(), name='employer-register'),
    path('api/employer/login/', EmployerLoginView.as_view(), name='employer-login'),
    path('api/employer/profile/', EmployerProfileView.as_view(), name='employer-profile'),
    path('api/user/profile/', UserProfileView.as_view(), name='user-profile'),
]
