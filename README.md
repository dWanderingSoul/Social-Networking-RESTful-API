# Social-Networking-RESTful-API #
Social Networking Platform RESTful API
This document provides an overview of the RESTful API for our social networking platform.

Table of Contents

Introduction
Authentication
Users
Posts
Follows
Likes & Comments
Error Codes
Versioning
Links
Introduction

This API allows developers to integrate core functionalities of our social networking platform into their applications.

Authentication

All requests except for user creation require a valid access token. You can obtain an access token through a separate login API (details omitted for brevity). The access token should be included in the Authorization header using the Bearer scheme (e.g., Authorization: Bearer YOUR_ACCESS_TOKEN).

Users

GET /users/{user_id} - Retrieve information about a specific user.
POST /users - Create a new user account (no authentication required).
Posts

GET /posts - Retrieve a list of posts (optional query parameters for filtering and pagination).
GET /users/{user_id}/posts - Retrieve a list of posts by a specific user.
POST /posts - Create a new post (requires authentication).
PUT /posts/{post_id} - Update an existing post (requires authentication and ownership of the post).
DELETE /posts/{post_id} - Delete a post (requires authentication and ownership of the post).
Follows

POST /users/{user_id}/follow - Follow another user (requires authentication).
DELETE /users/{user_id}/follow - Unfollow a user (requires authentication).
GET /users/{user_id}/following - Retrieve a list of users followed by a specific user (requires authentication).
GET /users/{user_id}/followers - Retrieve a list of followers of a specific user.
Likes & Comments

POST /posts/{post_id}/like - Like a post (requires authentication).
DELETE /posts/{post_id}/like - Unlike a post (requires authentication).
POST /posts/{post_id}/comment - Create a comment on a post (requires authentication).
GET /posts/{post_id}/comments - Retrieve a list of comments on a post.
DELETE /comments/{comment_id} - Delete a comment (requires authentication and ownership of the comment).
Error Codes

The API will return standard HTTP status codes to indicate the outcome of requests. Additionally, the response body may include an error code and message for specific API errors.

Versioning

The API currently uses version 1 (v1). Future versions will be indicated in the URL path (e.g., /v2/users).
