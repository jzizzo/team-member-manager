from django.urls import path
from team_app.views import TeamMemberListCreateAPIView, TeamMemberDetailAPIView, index

urlpatterns = [
    path("", index, name="index"),
    path(
        "api/team_members",
        TeamMemberListCreateAPIView.as_view(),
        name="team_member_list_create",
    ),
    path(
        "api/team_members/<int:pk>",
        TeamMemberDetailAPIView.as_view(),
        name="team_member_detail",
    ),
]
