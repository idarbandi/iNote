from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .serializers import NoteSerializer
from .models import Note


@api_view(["GET"])
def getRoutes(request):
    return JsonResponse("Our API", safe=False)


@api_view(["GET"])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getNote(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)
