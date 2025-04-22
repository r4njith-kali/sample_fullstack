from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def encode_text(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        text = data.get('text','')

        result = []

        for char in text.lower():
            if 'a' <= char <= 'z':
                result.append(str(ord(char)-ord('a') + 1))
            else:
                result.append(char)
        
        number_string = ' '.join(result)

        return JsonResponse({'encoded' : number_string})
    else:
        return JsonResponse({'error' : 'POST request required'}, status = 400)