from django.urls import path
from .views import EncodeTextView

urlpatterns = [
    path('encode/', EncodeTextView.as_view(), name='encode_text'),  
]
