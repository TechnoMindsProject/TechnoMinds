from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import CompanyAuthorization, Company, CompanyEmployee, EmployeeAuthorization, EmployeeRequests, User, UserAuthorization
from .forms import CompanyAuthorizationForm, CompanyForm, CompanyEmployeeForm, EmployeeAuthorizationForm, EmployeeRequestsForm, UserForm, UserAuthorizationForm


def add_company_authorization(request):
    if request.method == 'POST':
        form = CompanyAuthorizationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('view_company_authorization')
    else:
        form = CompanyAuthorizationForm()
    return render(request, 'company_authorization/add_company_authorization.html', {'form': form})


def view_company_authorization(request):
    company_authorizations = CompanyAuthorization.objects.all()
    return render(request, 'company_authorization/view_company_authorization.html', {'company_authorizations': company_authorizations})


def add_company(request):
    if request.method == 'POST':
        form = CompanyForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('view_company')
    else:
        form = CompanyForm()
    return render(request, 'company/add_company.html', {'form': form})


def view_company(request):
    companies = Company.objects.all()
    return render(request, 'company/view_company.html', {'companies': companies})


def add_company_employee(request):
    if request.method == 'POST':
        form = CompanyEmployeeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('view_company_employee')
    else:
        form = CompanyEmployeeForm()
    return render(request, 'company_employee/add_company_employee.html', {'form': form})


def view_company_employee(request):
    employees = CompanyEmployee.objects.all()
    return render(request, 'company_employee/view_company_employee.html', {'employees': employees})


def add_employee_authorization(request):
    if request.method == 'POST':
        form = EmployeeAuthorizationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('view_employee_authorization')
    else:
        form = EmployeeAuthorizationForm()
    return render(request, 'employee_authorization/add_employee_authorization.html', {'form': form})


def view_employee_authorization(request):
    authorizations = EmployeeAuthorization.objects.all()
    return render(request, 'employee_authorization/view_employee_authorization.html', {'authorizations': authorizations})


def add_employee_request(request):
    if request.method == 'POST':
        form = EmployeeRequestsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('view_employee_request')
    else:
        form = EmployeeRequestsForm()
    return render(request, 'employee_requests/add_employee_request.html', {'form': form})


def view_employee_request(request):
    requests = EmployeeRequests.objects.all()
    return render(request, 'employee_requests/view_employee_request.html', {'requests': requests})


def add_user(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('view_user')
    else:
        form = UserForm()
    return render(request, 'user/add_user.html', {'form': form})


def view_user(request):
    users = User.objects.all()
    return render(request, 'user/view_user.html', {'users': users})


def add_user_authorization(request):
    if request.method == 'POST':
        form = UserAuthorizationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('view_user_authorization')
    else:
        form = UserAuthorizationForm()
    return render(request, 'user_authorization/add_user_authorization.html', {'form': form})


def view_user_authorization(request):
    authorizations = UserAuthorization.objects.all()
    return render(request, 'user_authorization/view_user_authorization.html', {'authorizations': authorizations})
