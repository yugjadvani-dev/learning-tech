from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    # return HttpResponse("Hello World, This is home page")
    return render(request, 'website/index.html')

def about(request):
    return HttpResponse("Hello World, This is about page")

def contact(request):
    return HttpResponse("Hello World, This is contact page")