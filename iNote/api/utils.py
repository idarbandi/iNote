from rest_framework.response import Response
from .serializers import NoteSerializer
from .models import Note

def getNote(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)

def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response("Note Has Been Deleted")

def updateNote(request, pk):
    note = Note.objects.get(id=pk)
    note.update()
    return Response("Note Has Been Updated")