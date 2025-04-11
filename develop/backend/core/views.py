from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import (
    EmployeeRegisterSerializer,
    EmployeeLoginSerializer,
    EmployeeProfileSerializer,
    EmployerRegisterSerializer, 
    EmployerLoginSerializer,
    EmployerProfileSerializer,
    UserProfileSerializer,
)
from .models import EmployeeAuthorization, CompanyEmployee, Company


class EmployeeRegisterView(APIView):
    def post(self, request):
        serializer = EmployeeRegisterSerializer(data=request.data)
        if serializer.is_valid():
            employee_auth = serializer.save()
            return Response({
                "message": "Employee registered",
                "id": employee_auth.id  
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmployeeLoginView(APIView):
    def post(self, request):
        serializer = EmployeeLoginSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
    
class EmployeeProfileView(APIView):
    def post(self, request):
        serializer = EmployeeProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Employee profile created"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EmployerRegisterView(APIView):
    def post(self, request):
        serializer = EmployerRegisterSerializer(data=request.data)
        if serializer.is_valid():
            company_auth = serializer.save()
            company_auth.refresh_from_db()  # ⏳ Додай цю стрічку
            return Response({
                "message": "Company registered",
                "id": company_auth.id
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EmployerLoginView(APIView):
    def post(self, request):
        serializer = EmployerLoginSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)

class EmployerProfileView(APIView):
    def post(self, request):
        serializer = EmployerProfileSerializer(data=request.data)

        if serializer.is_valid():
            company = serializer.save()
            return Response({
                "message": "Company profile created",
                "id": company.id
            }, status=201)

        print("❌ Serializer errors:", serializer.errors)
        print("📦 Отримано дані:", request.data)
        return Response(serializer.errors, status=400)
    
class UserProfileView(APIView):
    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User profile created"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
