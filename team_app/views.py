from rest_framework import generics
from .models import TeamMember
from .serializers import TeamMemberSerializer


class TeamMemberListCreateAPIView(generics.ListCreateAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer


class TeamMemberDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
