from django.urls import path
from . import views

# http://localhost:3000/chai
# http://localhost:3000/chai/order
urlpatterns = [
    path('', views.all_chai, name='all_chai'),
    # path('order/',views.order, name='order'),
]
