# Library API Design

## List All Books

- Method: GET
- Path: /books
- Description: Returns all books.
- Success Status: 200 OK

---

## Get One Book

- Method: GET
- Path: /books/:id
- Description: Returns a single book by ID.
- Success Status: 200 OK

---

## Create Book

- Method: POST
- Path: /books
- Description: Creates a new book.

Example Request Body:

```json
{
  "title": "JavaScript Basics",
  "author": "John Smith"
}
```

- Success Status: 201 Created

---

## Update Book

- Method: PUT
- Path: /books/:id
- Description: Updates a book.

Example Request Body:

```json
{
  "title": "Advanced JavaScript",
  "author": "John Smith"
}
```

- Success Status: 200 OK

---

## Delete Book

- Method: DELETE
- Path: /books/:id
- Description: Deletes a book.
- Success Status: 204 No Content

---

## List Books by Author

- Method: GET
- Path: /books?author=John+Smith
- Description: Returns books written by a specific author.
- Success Status: 200 OK

---

# Error Codes

## 400 Bad Request

Example:
A required field such as title is missing when creating a book.

## 404 Not Found

Example:
A book with the specified ID does not exist.