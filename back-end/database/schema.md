# Tables

## Users
| Attribute | Type                                     |
| --------- | ---------------------------------------- |
| id        | UUID, Unique, Not Nullable               |
| username  | Text, Unique, Not Nullable               |
| email     | Text, Unique, Not Nullable               |
| password  | Text, Unique, Not Nullable               |
| createdAt | Datetime, Not Nullable, Default to NOW() |

## Books
| Attribute   | Type                                     |
| ----------- | ---------------------------------------- |
| id          | UUID, Unique, Not Nullable               |
| title       | Text, Not Nullable                       |
| description | Text, Not Nullable                       |
| ownerId     | UUID, Foreign Key references id on Users |
| createdAt   | Datetime, Not Nullable, Defualt to NOW() |

## BookUsers
| Attribute | Type                                     |
| --------- | ---------------------------------------- |
| userId    | UUID, Foreign Key references id on Users |
| bookId    | UUID, Foreign Key references id on Books |
| createdAt | Datetime, Not Nullable, Defualt to NOW() |