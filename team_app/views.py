from rest_framework import generics
from .models import TeamMember
from .serializers import TeamMemberSerializer
from django.shortcuts import render


class TeamMemberListCreateAPIView(generics.ListCreateAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer


class TeamMemberDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer


def index(request):
    return render(request, "frontend/index.html")
