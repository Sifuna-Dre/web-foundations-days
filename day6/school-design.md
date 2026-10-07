# School Database Design

## Tables

### Students
The students table stores information about students, including a unique ID, name, and email address.

### Courses
The courses table stores information about available courses, including a unique ID and course name.

### Enrolments
The enrolments table records which students are enrolled in which courses and stores the student's grade.

## Relationships

### One-to-Many Relationships

- One student can have many enrolments.
- One course can have many enrolments.

### Many-to-Many Relationship

Students and courses have a many-to-many relationship because:

- One student can take many courses.
- One course can have many students.

A join table (enrolments) is needed to connect students and courses while also storing the grade for each enrolment.

## Index Recommendation

```sql
CREATE INDEX idx_student_name
ON students(name);