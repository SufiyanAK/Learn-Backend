# Data Modeling Using Mongoose

## Learning

In this project, I focused on learning **data modeling** using **Mongoose**. Here's what I practiced:

### Key Concepts:

- **Model Creation**:
  - Created three schemas: `user.model.js`, `todo.model.js`, and `sub-todo.model.js`.
- **Relational Models**:

  - Explored how to define **relationships** between models (One-to-Many relationship).
  - Linked the **User** model with the **To-do** model, and the **To-do** model with the **Sub To-do** model.

- **Naming Conventions**:
  - Learned how Mongoose automatically pluralizes model names. For instance, defining a `User` model will create a `users` collection in MongoDB.
  - Practiced handling this behavior and ensuring the correct collection names are used.
