# CloudsekBackendAssignment

Created by Rajvardhan Singh for intern position at cloudsek

````markdown
# Post-Comments Service

This Post-Comments Service is created as part of a Cloudsek Backend Intern assignment by Rajvardhan Singh. It allows users to create text-based posts and enables other users to comment on these posts.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
````

2. Start the application:
   ```bash
   npm start
   ```
   The server will be available at `http://localhost:3000`.

## Routes

- **GET `/posts`**

  - Retrieve a list of all posts.

- **GET `/new-post`**

  - Render a form to create a new post.

- **POST `/posts`**

  - Create a new post.

- **GET `/posts/:id`**

  - Retrieve a specific post by ID.

- **GET/POST `/posts/:id/edit`**

  - Render a form to edit a specific post by ID (GET).
  - Update a specific post by ID (POST).

- **POST `/posts/:id/delete`**

  - Delete a specific post by ID.

- **GET `/posts/:id/comments`**
  - Retrieve comments for a specific post by ID.

## Database Design

### `authors`

Represents the authors of the posts.

```json
{
  "_id": "647e28e8d6e38de81b269992",
  "name": "Sneha Singh",
  "email": "syrax@test.com"
}
```

### `comments`

Stores the comments on posts.

```json
{
  "_id": "66e128272c8911fc9f2348fd",
  "postId": "66e128042c8911fc9f2348fc",
  "title": "Test01",
  "text": "Test01"
}
```

### `post`

Contains the posts created by users.

```json
{
  "_id": "66e128042c8911fc9f2348fc",
  "title": "Cloudsek Backend Developer Intern",
  "summary": "Backend Assignment Task",
  "body": "Building a Simple Post-Comments Service\n\nEvaluation Criteria:\n\nFunctionality: How well does the application meet the requirements?\nCode Quality: Is the code clean, organized, and well-documented?\nUnderstanding of Chosen Technologies: Your explanation and understanding of the language/framework used.\nBonus: Implementation of rich text support in comments.",
  "date": "2024-09-11T05:17:56.283Z",
  "authors": {
    "id": "647e28d3d6e38de81b269991",
    "name": "Mickey101",
    "email": "raj@test.com"
  }
}
```
