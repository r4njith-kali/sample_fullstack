from django.contrib import admin
from django.urls import path, include  # import include for routing to other apps

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  # include the api app urls
]
