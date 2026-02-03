from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser,PermissionsMixin

# Create your models here.

class CustomUserManager(BaseUserManager):
    def create_user(self,email ,password=None,**extrafields):
        email =self.normalize_email(email)
        user =self.model(email=email,**extrafields)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self,email ,password=None,**extrafields):
        extrafields.setdefault('is_staff',True)
        extrafields.setdefault('is_superuser',True)
        return self.create_superuser(email,password,extrafields)

class User(AbstractBaseUser,PermissionsMixin):
    CHOICES =[('doctor','Doctor'),('admin','Admin'),('patient','Patient')]
    email =models.EmailField(unique=True)
    name =models.CharField(max_length=100)
    phone_number =models.CharField(max_length=15)
    role =models.CharField(choices=CHOICES,max_length=7,default='patient')
    
    objects =CustomUserManager()
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['name']
    
    
    def __str__(self):
        return self.name

