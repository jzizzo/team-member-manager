from django.db import models


class TeamMember(models.Model):
    ROLE_CHOICES = (
        ("admin", "Admin"),
        ("teammate", "Teammate"),
    )

    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    phone_number = models.CharField(max_length=10)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=12, choices=ROLE_CHOICES, default="teammate")

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.role}"
