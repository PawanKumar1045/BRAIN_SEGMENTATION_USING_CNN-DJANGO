from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
urlpatterns = [

    path('',views.main_login, name="login"),
    path('home/',views.home_page, name="home"),
    path('reg/',views.reg, name="reg"),
    path('profile/', views.profile, name="profile"),
    path('about/',views.about,name="about"),
    path('logout', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
    path('upload/', views.upload_image, name='upload_image'),
]














