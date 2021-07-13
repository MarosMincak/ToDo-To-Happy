from django.contrib import admin
from django.urls import path
from todo import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    # Auth admin
    path('admin/', admin.site.urls),

    # Auth user
    path('signup/', views.signupuser, name='signupuser'),
    path('login/', views.loginuser, name='loginuser'),
    path('logout/', views.logoutuser, name='logoutuser'),

    # Todos
    path('', views.home, name='home'),
    path('current/', views.currenttodos, name='currenttodos'),
    path('current/search_current', csrf_exempt(views.search_current) , name='search_current'),
    path('completed/', views.completedtodos, name='completedtodos'),
    path('all/', views.alltodos, name='alltodos'),
    path('create/', views.createtodo, name='createtodo'),
    path('todo/<int:todo_pk>', views.viewtodo, name='viewtodo'),
    path('todo/<int:todo_pk>/complete', views.completetodo, name='completetodo'),
    path('todo/<int:todo_pk>/delete', views.deletetodo, name='deletetodo'),
]
