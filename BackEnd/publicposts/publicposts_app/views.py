# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework import status
#
# from .models import Post
# from .serializers import *
#
# @api_view(['GET', 'POST'])
# def posts(request):
#     if request.method == 'GET':
#         posts = Post.objects.all()
#         serializer = PostSerializer(posts, many = True)
#         return(Response({'data': serializer.data}))
#     elif request.method == 'POST':
#         post = Post()
#         post.text = request.data['text']
#         post.save()
#         return Response(status=status.HTTP_200_OK)
#
# @api_view(['GET'])
# def like_post(request, post_id):
#     if request.method == 'GET':
#         try:
#             post = Post.objects.get(id = post_id)
#         except:
#             return Response(status = status.HTTP_400_BAD_REQUEST)
#     setattr(post, 'likesCount', post.likesCount + 1)
#     post.save()
#     return Response(post.likesCount, status.HTTP_200_OK)

from rest_framework import generics
from .models import Post
from .serializers import PostSerializer


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostCreation(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDeletion(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostUpdating(generics.UpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
