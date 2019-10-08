# Tables

## Users
| Attribute  | Type                                     |
| ---------- | ---------------------------------------- |
| id         | UUID, Primary                            |
| username   | Text, Unique, Not Nullable               |
| email      | Text, Unique, Not Nullable               |
| password   | Text, Unique, Not Nullable               |
| thumbnail  | Text, Default to blank portrait          |
| created_at | Datetime, Not Nullable, Default to NOW() |

## Books
| Attribute   | Type                                      |
| ----------- | ----------------------------------------- |
| id          | UUID, Primary                             |
| title       | Text, Not Nullable                        |
| description | Text, Not Nullable                        |
| owner_id    | UUID, Foreign Key references id on Users  |
| created_at  | Datetime, Not Nullable, Defualt to NOW()  |

## BookUsers
| Attribute | Type                                      |
| --------- | ----------------------------------------- |
| user_id    | UUID, Foreign Key references id on Users |
| book_id    | UUID, Foreign Key references id on Books |
| created_at | Datetime, Not Nullable, Defualt to NOW() |

## BookEntries
| Attribute   | Type                                     |
| ----------- | ---------------------------------------- |
| id          | UUID, Primary                            |
| image_url   | Text                                     |
| description | Text                                     |
| created_at  | Datetime, Not Nullable, Defualt to NOW() |

## EntryComments
| Attribute  | Type                                           |
| ---------- | ---------------------------------------------- |
| id         | UUID, Primary                                  |
| content    | Text, Not Nullable                             |
| entry_id   | UUID, Foreign Key references id on BookEntries |
| user_id    | UUID, Foreign Key references id on Users       |
| created_at | Datetime, Not Nullable, Defualt to NOW()       |

