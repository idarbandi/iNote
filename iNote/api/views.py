from django.http import JsonResponse
from rest_framework.decorators import api_view
from. import utils
from rest_framework.response import Response
from .serializers import NoteSerializer
from .models import Note



@api_view(["GET", "POST"])
def getNotes(request):
    if request.method == "GET":
        notes = Note.objects.all().order_by("-updated")
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)
    
    if request.method == "POST":
        data = request.data
        note = Note.objects.create(
            body = data["body"]
        )
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data)
    
    


@api_view(["GET", "PUT", "DELETE"])
def getNote(request, pk):
    
    if request.method == "GET":
        return utils.getNote(request, pk)
    
    if request.method == "DELETE":
       return utils.deleteNote(request, pk)
        
    if request.method == "PUT":
        return utils.updateNote(request, pk)
    



