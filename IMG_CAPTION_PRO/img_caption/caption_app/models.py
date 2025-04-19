from django.db import models

# Create your models here.

class ImageUpload(models.Model):
    image = models.ImageField(upload_to='images/')  # Stores uploaded images in MEDIA_ROOT/images/
    description = models.CharField(max_length=255)

    def __str__(self):
        return self.description
