from django.db import models

# Авторизація компаній
class CompanyAuthorization(models.Model):
    login = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.login


class Company(models.Model):
    company_name = models.CharField(max_length=255, unique=True)
    manager_surname = models.CharField(max_length=255)
    manager_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    website = models.URLField(unique=True)
    address = models.CharField(max_length=255)
    company_authorization = models.ForeignKey(CompanyAuthorization, on_delete=models.CASCADE)

    def __str__(self):
        return self.company_name


# Категорії вакансій/працівників
class Category(models.Model):
    category_name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.category_name


# Авторизація співробітників компанії
class EmployeeAuthorization(models.Model):
    login = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.login


class CompanyEmployee(models.Model):
    employee_name = models.CharField(max_length=255)
    employee_surname = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    employee_authorization = models.ForeignKey(EmployeeAuthorization, on_delete=models.CASCADE)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.employee_name} {self.employee_surname}"


class EmployeeRequest(models.Model):
    employee = models.ForeignKey(CompanyEmployee, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    requested_at = models.DateTimeField()

    def __str__(self):
        return f"Request from {self.employee} to {self.company}"


# Авторизація користувачів
class UserAuthorization(models.Model):
    login = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.login


class User(models.Model):
    GENDER_CHOICES = [('Чоловік', 'Чоловік'), ('Жінка', 'Жінка')]

    user_name = models.CharField(max_length=255)
    user_surname = models.CharField(max_length=255)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    birthday_date = models.DateField()
    phone_number = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    address = models.CharField(max_length=255)
    created_at = models.DateTimeField()
    user_authorization = models.ForeignKey(UserAuthorization, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user_name} {self.user_surname}"


class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pdf_file = models.BinaryField()
    created_at = models.DateTimeField()

    def __str__(self):
        return f"Resume {self.id} for {self.user}"


class JobExperience(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(max_length=2500)

    def __str__(self):
        return f"{self.position} at {self.company_name}"


class Education(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    institution_name = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    field_of_study = models.CharField(max_length=255)
    start_day = models.DateField()
    end_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.degree} at {self.institution_name}"


class DisabilityGroup(models.Model):
    DISABILITY_CHOICES = [
        ('І група', 'І група'),
        ('ІІ група', 'ІІ група'),
        ('ІІІ група', 'ІІІ група')
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    disability_type = models.CharField(max_length=20, choices=DISABILITY_CHOICES)

    def __str__(self):
        return f"{self.disability_type} — {self.user}"


class DisabilityDescription(models.Model):
    disability_group = models.ForeignKey(DisabilityGroup, on_delete=models.CASCADE)
    description = models.TextField()
    disability_certificate = models.BinaryField()

    def __str__(self):
        return f"Description for {self.disability_group}"


class Vacancy(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=5000)
    requirements = models.TextField(max_length=1000)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    job_type = models.CharField(max_length=50)
    address = models.CharField(max_length=255)
    created_at = models.DateTimeField()

    def __str__(self):
        return self.name


class Application(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    vacancy = models.ForeignKey(Vacancy, on_delete=models.CASCADE)
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    status = models.CharField(max_length=50)
    created_at = models.DateTimeField()

    def __str__(self):
        return f"Application by {self.user} to {self.vacancy}"


class VacancyReview(models.Model):
    RATING_CHOICES = [(str(i), str(i)) for i in range(1, 6)]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    vacancy = models.ForeignKey(Vacancy, on_delete=models.CASCADE)
    rating = models.CharField(max_length=1, choices=RATING_CHOICES)
    message = models.TextField(max_length=2000, blank=True, null=True)
    submitted_at = models.DateTimeField()

    def __str__(self):
        return f"Review by {self.user} for {self.vacancy}"


class CompanyReview(models.Model):
    RATING_CHOICES = [(str(i), str(i)) for i in range(1, 6)]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    rating = models.CharField(max_length=1, choices=RATING_CHOICES)
    message = models.TextField(max_length=2000, blank=True, null=True)
    submitted_at = models.DateTimeField()

    def __str__(self):
        return f"Review by {self.user} for {self.company}"