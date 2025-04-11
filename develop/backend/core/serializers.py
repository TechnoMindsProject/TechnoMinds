from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import make_password, check_password
from .models import EmployeeAuthorization, CompanyEmployee, CompanyAuthorization, Company, User

# реєстрація емплої
class EmployeeRegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = EmployeeAuthorization
        fields = ['id', 'login', 'password', 'confirm_password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        validated_data['password'] = make_password(validated_data['password'])
        return EmployeeAuthorization.objects.create(**validated_data)

# логін емплої
class EmployeeLoginSerializer(serializers.Serializer):
    login = serializers.CharField()
    password = serializers.CharField(write_only=True)
    access = serializers.CharField(read_only=True)
    refresh = serializers.CharField(read_only=True)

    def validate(self, data):
        login = data.get('login')
        password = data.get('password')

        try:
            user = EmployeeAuthorization.objects.get(login=login)
        except EmployeeAuthorization.DoesNotExist:
            raise serializers.ValidationError("Invalid login")

        if not check_password(password, user.password):
            raise serializers.ValidationError("Invalid password")

        refresh = RefreshToken.for_user(user)
        return {
            'access': str(refresh.access_token),
            'refresh': str(refresh),
        }
# запомнення емплої
class EmployeeProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyEmployee
        fields = [
            'id',
            'employee_name',
            'employee_surname',
            'category',
            'company',
            'employee_authorization',
            'is_approved',
        ]
        extra_kwargs = {
            'is_approved': {'read_only': True},
        }
# заповнення реєстарції емплоєра
class EmployerRegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = CompanyAuthorization
        fields = ['id', 'login', 'password', 'confirm_password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        validated_data['password'] = make_password(validated_data['password'])
        return CompanyAuthorization.objects.create(**validated_data)

# заповнення логіну емплоєра
class EmployerLoginSerializer(serializers.Serializer):
    login = serializers.CharField()
    password = serializers.CharField(write_only=True)
    access = serializers.CharField(read_only=True)
    refresh = serializers.CharField(read_only=True)

    def validate(self, data):
        login = data.get('login')
        password = data.get('password')

        try:
            user = CompanyAuthorization.objects.get(login=login)
        except CompanyAuthorization.DoesNotExist:
            raise serializers.ValidationError("Invalid login")

        if not check_password(password, user.password):
            raise serializers.ValidationError("Invalid password")

        refresh = RefreshToken.for_user(user)
        return {
            'access': str(refresh.access_token),
            'refresh': str(refresh),
        }
# заповнення анкети емплоєра
class EmployerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = [
            'id',
            'company_name',
            'manager_surname',
            'manager_name',
            'phone_number',
            'email',
            'website',
            'address',
            'company_authorization',
        ]

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# class CompanyProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Company
#         fields = '__all__'  # або перелік всіх полів включно з company_authorization


