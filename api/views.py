from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class EncodeTextView(APIView):
    def post(self, request):
        text = request.data.get('text', '')

        result = []
        for char in text.lower():
            if 'a' <= char <= 'z':
                result.append(str(ord(char) - ord('a') + 1))
            else:
                result.append(char)

        number_string = ' '.join(result)

        return Response({'encoded': number_string}, status=status.HTTP_200_OK)
