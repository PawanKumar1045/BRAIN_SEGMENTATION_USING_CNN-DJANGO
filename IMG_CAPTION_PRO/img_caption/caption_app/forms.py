from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from .models import ImageUpload
class CreateUserForm(UserCreationForm):
    username = forms.CharField(max_length=150, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your username'}))
    email = forms.EmailField(max_length=150, widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Enter your email'}))
    password1 = forms.CharField(max_length=40, widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Create a password'}))
    password2 = forms.CharField(max_length=40, widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Confirm your password'}))

    class Meta:
        model = User
        fields = ['username', 'email', 'password1','password2']

class ImageUploadForm(forms.ModelForm):
    class Meta:
        model = ImageUpload
        fields = ['image', 'description']
