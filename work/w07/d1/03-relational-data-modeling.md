[Click here to view as a presentation](https://presentations.generalassemb.ly/03e5b2768c916a61f46ad8a8b74d9b7b#/1)

___

<img src="https://i.imgur.com/l4t0NOc.png" width="400">

# Relational Data Design & Modeling

---
## Learning Objectives
<br>

Students will be able to:

- Identify the data _entities_ for an application

- Identify _attributes_ for a data entity

- Identify the _relationships_ between data entities

- Understand the roles of _primary_ and _foreign keys_

- Create an Entity Relationship Diagram for an application

---
## The Entity Data Model

---
### What is an Entity Data Model?
<br>

- An important part of the planning process for an application is determining the data persistence needs of an application.

- This planning results in an **Entity Data Model** (EDM), or just **data model** for short.

- Although the **data model** is conceptual, it is used as a blueprint for how the actual database will be structured.

---
## Data Entities

---
### What is a Data Entity?
<br>

- A **Data Entity**, or just **entity**, is used to conceptually model (represent) a real-world object within an application.

- Examples:  **User**, **Post**, **Comment**, **Order**, **Product**, etc.

- Each entity type will have one or more **attributes**...

---
### The Attributes for a Data Entity
<br>

- **Attributes** represent an entity's data. For example, a **Book** entity would probably have a **title** attribute.

- Each attribute has a data type. For example, _string_, _numeric_, _datetime_

#### Exercise (2 minutes)
<br>

- **Identify what other attributes a Book entity might have?** 

---
### Mapping Between an Entity<br>and a Relational Database

- Remember, the **conceptual data model** is used as a **blueprint** for how the actual database will be structured.

- Each **entity** in the data model identifies a **table** in the database. For example, a **Book** entity will result in a **books** table in the database.

- Each **attribute** in an entity identifies a **column** in the table.  For example, the **title** attribute will result in a column with the same name.

- Each **row** in the table is logically an **instance** of the **entity**.

---
## Designing an Entity Data Model

---
### The Application
<br>

- Let's design an EDM for a Concert Ticket tracking application.

- The application should track:
	- The tickets for a concert
	- The seat and price of the ticket
	- The date of the concert
	- The performer of the concert
	- The venue of the concert
	- The customer that bought a ticket

---
### The Process
<br>

- Reviewing an application's **user stories** is a good first step to creating the conceptual data model.

- There are three components that must be identified:
	1. The **data entities** (tables)
	2. The **attributes** (columns) for each entity
	3. The **relationships** between the entities.

- Since this application is supposed to track **tickets**, let's start with a preliminary _Ticket_ entity...

---
### Identifying Data Entities for an Application
<br>

- Here's our first attempt at modeling the **Ticket** entity:

<img src="https://i.imgur.com/jcpU8dF.png" height="400">

---
### Identifying Data Entities - Exercise
<br>

#### Pair up and analyze the preliminary Ticket entity.<br><br>Use what you learned during the SQL lesson with the goal of identifying the pitfalls of the data model so far (e.g., avoiding redundant data).<br><br>We will review your findings in 5 minutes.<br><br>Don't cheat by looking ahead :)

---
### Redundant Data
<br>

- A key principle of a relational database is to **avoid redundant data** by organizing data into multiple tables - this is known as **database normalization**.

- Houston, we have a problem...

---
### Identify Redundant Data
<br>

- Currently, this is how the data might look like in the **tickets** table:

<img src="https://i.imgur.com/TSDHx6I.png">

- **What columns have redundant data, and thus, make them candidates for being their own data entity?**

---
### Data Entities Galore!

<img src="https://i.imgur.com/4iq2IOu.png" style="height: 600px">

---
### Advantages of Normalization

- A relational database, **by design**, is able to to perform searching & updating of data much more efficiently when it is normalized.

- It can also be a blessing for developers, for example, when data needs to be updated, it's updated in a single row, not across multiple records. Could you imaging trying to keep important things like the balance of a bank account in sync between two owners of that account?

- Okay, with the entities and their attributes set, let's talk about the third component of the ERD - **relationships** between the entities...

---
### Relationships Between Entities
<br>

- **Relationships** determine how the entities are related in terms of their **cardinality**.

- There are three _main_ types of **cardinality**:
	- **one-to-one** (1:1)
	- **one-to-many** (1:M)
	- **many-to-many** (M:M)

- Let's take a look at each of these...

---
### One-To-One Relationships
<br>

- The **one-to-one** relationship exists when one row in a table is "linked" to one row in another table.

- This **1:1** relationship is fairly uncommon and is typically used to split a table's columns into two tables for conciseness.

- Let's see how we specify a one-to-one relationship in an ERD...

---
### One-To-One Example
<br>

- A _business_ has one _mailing address_ and vice-versa:

	<img src="https://i.imgur.com/fTCHHpF.png" height="300">

- Let's discuss the connecting line and PK/FK stuff...

---
### ERD Cardinality Lines
<br>

- In an ERD, lines drawn between entities describe the cardinality between those entities as follows:

	<img src="https://i.imgur.com/sEnNZyZ.png">

- Note that these are the three categories of cardinality. There are more specific versions of these, such as _zero or many_, as [shown here](https://imgur.com/JtPQEOO).

---
### Primary Keys
<br>

- But what are those **(PK)** and **(FK)** attribute annotations you ask?

- An attribute (column) annotated with **PK** designates the **Primary Key** for that entity (table).

- It is what uniquely identifies a row in a table.

- Note that, although not common, a _composite key_, where two or more columns are combined, can uniquely identify a row.

---
### Foreign Keys
<br>

- An attribute (column) annotated with **FK** designates a **Foreign Key**.

- A **FK** provides the "link" to a **PK** in another table.

- Foreign Keys are what enable a database engine to efficiently join two tables that are related.

- It's **important** to note that foreign keys always exist on the **many** (child) side of a **1:M** relationship.  **Why would this be the case instead of the other way around?**

---
### Determining the Cardinality Between Tables

<img src="https://i.imgur.com/4iq2IOu.png" height="450">

- Okay, back to modeling the relationships between the entities of the _ticket tracking_ application...
	
---
### Determining the Cardinality Between Tables
<br>

- As a note, to save screen space, the entities are not going to show attributes for the primary and foreign keys.

- However, be aware that as a default, primary keys are named `id` and foreign keys as `<parent_entity_name>_id`.

---
### Determining the Cardinality Between Tables

- Usually by focusing on two entities, [domain knowledge](https://en.wikipedia.org/wiki/Domain_knowledge) and common-sense will reveal the relationship (usually a<br>one-to-many or many-to-many)

- Beginning with **Concert** and **Ticket**<br>**What's the relationship?**

- Let's see how this is diagramed...

---
### Creating the ERD

<img src="https://i.imgur.com/jlKmola.png" height="400">

- Reads as: **"A Concert has many Tickets"** and **"A Ticket belongs to a Concert"**.

- **Which of the two tables would have to contain the FK?**

---
### Creating the ERD
<br>

- Now for **Customer** and **Ticket**<br>**What's the relationship?**

---
### Creating the ERD

<img src="https://i.imgur.com/6Uc4wHF.png" height="400">

- Reads as: **"A Customer has many Tickets"** and **"A Ticket belongs to a Customer"**.

---
### Creating the ERD
<br><br>

#### Is there a relationship between the **Customer** and **Concert** entities? ...

---
### Creating the ERD
<br>

- Thanks to the way relational databases are designed, you can access other tables that are not directly joined by joining with others that are.

- For example, you most certainly could access all of the _concerts_ purchased by a _customer_ by joining through _tickets_.

- Although not shown on the ERD with a connecting line, you could say that **"A Customer has many Concerts through Tickets"**, as well as, **"A Concert has many Customers through Tickets"**.

---
### Creating the ERD - Exercise <small>(5 min)</small>
<br>

- As a pair exercise, please identify the remaining relationships:
	- **Concert** and **Venue**
	- **Concert** and **Performer**

- We'll review in 5 minutes... (don't peek)

---
### ERD - Final Version
<br>
<img src="https://i.imgur.com/qz8V0NX.png" height="400">

- Note that **many-to-many** relationships, e.g., **Concert** and **Performer**, require a "hidden" join table to implement in the  database - **Why is this**?

---
## In Summary
<br>

- Modeling data is an important step during the planning of an application.  After all, _**data is the single source of truth**_!

- In addition to what we covered in this lesson, there are several other notations/ways to diagram an application's data model.  Check out [this post](https://www.lucidchart.com/pages/er-diagrams) from _lucidchart.com's_ website for more info.  

---
## Further Study
<br>

- [What is an Entity Relationship Diagram - Lucidchart](https://www.lucidchart.com/pages/er-diagrams)

- [The Relational Model](https://en.wikipedia.org/wiki/Relational_model)

- [Father of the Relational Model - E. F. Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd)
