# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Application(models.Model):
    application_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)
    vacancy = models.ForeignKey('Vacancy', models.DO_NOTHING)
    resume = models.ForeignKey('Resume', models.DO_NOTHING)
    status = models.CharField(max_length=50)
    created_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'application'


class Category(models.Model):
    category_id = models.AutoField(primary_key=True)
    category_name = models.CharField(unique=True, max_length=255)

    class Meta:
        managed = False
        db_table = 'category'


class Company(models.Model):
    company_id = models.AutoField(primary_key=True)
    company_name = models.CharField(unique=True, max_length=255)
    manager_surname = models.CharField(max_length=255)
    manager_name = models.CharField(max_length=255)
    phone_number = models.CharField(unique=True, max_length=50)
    email = models.CharField(unique=True, max_length=255)
    website = models.CharField(unique=True, max_length=255)
    address = models.CharField(max_length=255)
    company_authorization = models.ForeignKey('CompanyAuthorization', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'company'


class CompanyAuthorization(models.Model):
    company_authorization_id = models.AutoField(primary_key=True)
    login = models.CharField(unique=True, max_length=255)
    password_hash = models.CharField(unique=True, max_length=64)

    class Meta:
        managed = False
        db_table = 'company_authorization'


class CompanyEmployee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    employee_name = models.CharField(max_length=255)
    employee_surname = models.CharField(max_length=255)
    category = models.ForeignKey(Category, models.DO_NOTHING)
    company = models.ForeignKey(Company, models.DO_NOTHING)
    employee_authorization = models.ForeignKey('EmployeeAuthorization', models.DO_NOTHING)
    is_approved = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'company_employee'


class CompanyReview(models.Model):
    company_review_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)
    company = models.ForeignKey(Company, models.DO_NOTHING)
    rating = models.CharField(max_length=1)
    message = models.CharField(max_length=2000, blank=True, null=True)
    submitted_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'company_review'


class DisabilityDescription(models.Model):
    disability_description_id = models.AutoField(primary_key=True)
    disability_group = models.ForeignKey('DisabilityGroup', models.DO_NOTHING)
    description = models.TextField()
    disability_certificate = models.TextField()

    class Meta:
        managed = False
        db_table = 'disability_description'


class DisabilityGroup(models.Model):
    disability_group_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)
    disability_type = models.CharField(max_length=9)

    class Meta:
        managed = False
        db_table = 'disability_group'


class Education(models.Model):
    education_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)
    institution_name = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    field_of_study = models.CharField(max_length=255)
    start_day = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education'


class EmployeeAuthorization(models.Model):
    employee_authorization_id = models.AutoField(primary_key=True)
    login = models.CharField(unique=True, max_length=255)
    password_hash = models.CharField(unique=True, max_length=64)

    class Meta:
        managed = False
        db_table = 'employee_authorization'


class EmployeeRequests(models.Model):
    request_id = models.AutoField(primary_key=True)
    employee = models.ForeignKey(CompanyEmployee, models.DO_NOTHING)
    company = models.ForeignKey(Company, models.DO_NOTHING)
    requested_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'employee_requests'


class JobExperience(models.Model):
    job_experience_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)
    company_name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.CharField(max_length=2500)

    class Meta:
        managed = False
        db_table = 'job_experience'


class Resume(models.Model):
    resume_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)
    pdf_file = models.TextField()
    created_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'resume'


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=255)
    user_surname = models.CharField(max_length=255)
    gender = models.CharField(max_length=7)
    birthday_date = models.DateField()
    phone_number = models.CharField(unique=True, max_length=50)
    email = models.CharField(unique=True, max_length=255)
    address = models.CharField(max_length=255)
    created_at = models.DateTimeField()
    user_authorization = models.ForeignKey('UserAuthorization', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'user'


class UserAuthorization(models.Model):
    user_authorization_id = models.AutoField(primary_key=True)
    login = models.CharField(unique=True, max_length=255)
    password_hash = models.CharField(unique=True, max_length=64)

    class Meta:
        managed = False
        db_table = 'user_authorization'


class Vacancy(models.Model):
    vacancy_id = models.AutoField(primary_key=True)
    company = models.ForeignKey(Company, models.DO_NOTHING)
    category = models.ForeignKey(Category, models.DO_NOTHING)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=5000)
    requirements = models.CharField(max_length=1000)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    job_type = models.CharField(max_length=50)
    address = models.CharField(max_length=255)
    created_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'vacancy'


class VacancyReview(models.Model):
    vacancy_review_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, models.DO_NOTHING)
    vacancy = models.ForeignKey(Vacancy, models.DO_NOTHING)
    rating = models.CharField(max_length=1)
    message = models.CharField(max_length=2000, blank=True, null=True)
    submitted_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'vacancy_review'
