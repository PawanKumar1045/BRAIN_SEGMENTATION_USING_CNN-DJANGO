

from django.contrib.auth import authenticate,login
from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.http import HttpRequest
from django.contrib import messages
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from .forms import ImageUploadForm
from .models import ImageUpload
from .forms import CreateUserForm

#from tensorflow.keras.models import load_model



def home_page(request):
    return render(request, 'caption_app/home_page.html')
def main_login(request):
    if request.method == 'POST':
        uname = request.POST.get('username')
        pass1 = request.POST.get('password')
        user = authenticate(request,username=uname,password=pass1)
        print(uname,pass1)
        if user is not None:
            login(request, user)
            return redirect('/home')
        else:
            messages.error(request, 'Invalid username or password')
            return redirect('login')


    return render(request,'caption_app/main_login.html')
def reg(request):
    form  = CreateUserForm()
    if request.method == 'POST':
        form  = CreateUserForm(request.POST)
        if form.is_valid():
            if form.cleaned_data['password1'] != form.cleaned_data['password2']:
                print('passno match')
                messages.error(request, 'Passwords do not match')
            else:
                form.save()
                return redirect('login')

    context = {'form':form}
    return render(request, 'caption_app/register.html',context=context)

def profile(request):
    curr_user = request.user
    return render(request, 'caption_app/profile.html', {'users': curr_user})
def about(request):
    return render(request,'caption_app/about.html')

from django.shortcuts import render
from django.http import HttpResponse
from .forms import ImageUploadForm
import numpy as np
import tensorflow as tf
import cv2
import os
import matplotlib.pyplot as plt
from io import BytesIO
import base64

# Load model once
MODEL_PATH = r'D:\Documents\IMG_CAPTION_PROJECT\IMG_CAPTION_PRO\models\brain_tumor_segmentation.h5'
model = tf.keras.models.load_model(MODEL_PATH)

def preprocess_image(image_path, target_size=(256, 256)):
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    image = cv2.resize(image, target_size)
    image = image.astype(np.float32) / 255.0
    image = np.expand_dims(image, axis=-1)
    image = np.expand_dims(image, axis=0)
    return image

def upload_image(request):
    if request.method == 'POST':
        form = ImageUploadForm(request.POST, request.FILES)

        if form.is_valid():
            # Save image instance
            img_instance = form.save()
            img_path = img_instance.image.path
            print(f"Uploaded Image Path: {img_path}")
            test_image = preprocess_image(img_path)
            pred_mask = model.predict(test_image)[0]

            # Generate overlay visualization
            fig, axes = plt.subplots(1, 2, figsize=(10, 5))
            axes[0].imshow(test_image[0, :, :, 0], cmap="gray")
            axes[0].set_title("Original Image")
            axes[1].imshow(pred_mask[:, :, 0], cmap="jet", alpha=0.6)
            axes[1].set_title("Predicted Tumor Mask")
            for ax in axes:
                ax.axis("off")

            buf = BytesIO()
            plt.savefig(buf, format='png')
            plt.close(fig)
            buf.seek(0)
            img_base64 = base64.b64encode(buf.getvalue()).decode('utf-8')

            return render(request, r'D:\Documents\IMG_CAPTION_PROJECT\IMG_CAPTION_PRO\img_caption\caption_app\templates\caption_app\result.html', {
                'result_img': img_base64
            })

    else:
        form = ImageUploadForm()
    return render(request, 'caption_app/upload_image.html', {'form': form})




