from django.contrib import admin
from django.urls import path
from publicposts_app.views import PostList, PostCreation, PostDeletion, PostUpdating, PostDetail


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts', PostList.as_view()),
    path('api/posts/<int:pk>', PostDetail.as_view()),
    path('api/posts/create', PostCreation.as_view()),
    path('api/posts/delete/<int:pk>', PostDeletion.as_view()),
    path('api/posts/update/<int:pk>', PostUpdating.as_view()),
]
