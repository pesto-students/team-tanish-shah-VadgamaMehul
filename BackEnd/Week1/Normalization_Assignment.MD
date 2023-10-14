# Q1. Normalizing a Table to 1NF, 2NF, and 3NF

To normalize a table into 1st Normal Form (1NF), 2nd Normal Form (2NF), and 3rd Normal Form (3NF), we need to analyze the data and its dependencies to remove any redundancy and structure it in a way that ensures data integrity. Here is the original table:

**Original Table:**
| Book ID | Title                 | Author           | Genre   | Publisher     | ISBN           | Price |
|---------|-----------------------|------------------|---------|---------------|----------------|-------|
| 101     | To Kill a Mockingbird | Harper Lee       | Fiction | HarperCollins | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner     | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Jearl Walker     | Science | Wiley         | 978-0321976444 | 50.00 |


## 1st Normal Form (1NF)
A table is in 1NF if it does not contain repeating groups or arrays. All attributes contain atomic (indivisible) values. The original table is already in 1NF because each column contains atomic values.

## 2nd Normal Form (2NF)
A table is in 2NF if it is in 1NF, and all non-key attributes are fully functionally dependent on the entire primary key. To achieve 2NF, we need to identify the primary key. In this case, a combination of columns like "Book ID" and "ISBN" could serve as a composite primary key. The steps to achieve 2NF are:

1. Identify the candidate key(s).
2. Create separate tables for related information.

In this case, we don't have partial dependencies, so "Book ID" or "ISBN" alone could serve as the primary key. For demonstration, we'll use "Book ID" as the primary key.

**2NF Table - Books:**
| Book ID | Title                 | Author           | Genre   | Publisher     | ISBN           |
|---------|-----------------------|------------------|---------|---------------|----------------|
| 101     | To Kill a Mockingbird | Harper Lee       | Fiction | HarperCollins | 978-0061120084 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner     | 978-0743273565 |
| 103     | Principles of Physics | Jearl Walker     | Science | Wiley         | 978-0321976444 |


## 3rd Normal Form (3NF)
A table is in 3NF if it is in 2NF, and all non-key attributes are transitively dependent on the primary key. The steps to achieve 3NF are:

1. Ensure that the table is in 2NF.
2. Remove transitive dependencies.

In the 2NF table, there are no partial or transitive dependencies because all non-key attributes depend directly on the primary key ("Book ID" in this case).

The table is now in 3NF:

**3NF Table - Books:**
| Book ID | Title                 | Author           | Genre   | Publisher     |
|---------|-----------------------|------------------|---------|---------------|
| 101     | To Kill a Mockingbird | Harper Lee       | Fiction | HarperCollins |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner     |
| 103     | Principles of Physics | Jearl Walker     | Science | Wiley         |


The table is now in 3NF with no transitive dependencies, and it is ready for use in a relational database.

# Q2. Normalizing a Table to 1NF, 2NF, and 3NF

To normalize the given table, we need to identify the functional dependencies and the primary key. The goal is to achieve **1st Normal Form (1NF)**, **2nd Normal Form (2NF)**, and **3rd Normal Form (3NF)**. Here's the original table:

**Original Table:**
| Employee ID | Employee Name  | Department | Project ID | Project Name | Start Date | End Date   | Salary |
|------------|----------------|------------|------------|--------------|------------|------------|--------|
| 101        | John Doe       | HR         | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000   |
| 101        | John Doe       | HR         | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200   |
| 102        | Jane Smith     | Marketing  | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500   |
| 103        | Mike Johnson   | IT         | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000   |
| 103        | Mike Johnson   | IT         | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200   |
| 104        | Sarah Brown    | HR         | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800   |
| 105        | Robert Lee     | Finance    | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200   |
| 106        | Lisa Wang      | IT         | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800   |

## 1st Normal Form (1NF)
The table is already in 1NF as each cell contains atomic values with no repeating groups.

## 2nd Normal Form (2NF)
The table is already in 2NF as the combination of "Employee ID" and "Project ID" serves as the composite primary key, and there are no partial dependencies.

## 3rd Normal Form (3NF)
In 3NF, we address transitive dependencies. We identify the following functional dependencies:
- `Employee ID` → `Employee Name`, `Department`, `Salary`
- `Project ID` → `Project Name`, `Start Date`, `End Date`

We create separate tables for employees and projects:

**Employee Table:**
| Employee ID | Employee Name  | Department | Salary |
|------------|----------------|------------|--------|
| 101        | John Doe       | HR         | 5000   |
| 102        | Jane Smith     | Marketing  | 5500   |
| 103        | Mike Johnson   | IT         | 6000   |
| 104        | Sarah Brown    | HR         | 4800   |
| 105        | Robert Lee     | Finance    | 5200   |
| 106        | Lisa Wang      | IT         | 5800   |

**Project Table:**
| Project ID | Project Name | Start Date | End Date   |
|------------|--------------|------------|------------|
| 001        | Project A    | 2023-01-15 | 2023-06-30 |
| 002        | Project B    | 2023-04-01 | 2023-08-31 |
| 003        | Project C    | 2023-06-15 | 2023-11-30 |

## 4th Normal Form (4NF) and 5th Normal Form (5NF)
There are no multi-valued or join dependencies to address, so additional tables for 4NF and 5NF are not required.

After normalization, we have two tables, Employee and Project, in 3NF and ready for use in a relational database.


# Q3. Primary Keys and Foreign Keys in Relational Databases

## Primary Keys
A primary key is a field (or a combination of fields) in a relational database table that uniquely identifies each row or record in the table. It ensures that each row in the table has a unique and non-null value, making it a fundamental component of a well-structured database. Key points about primary keys include:

- **Uniqueness**: Each value in the primary key column(s) must be unique within the table. This means no two rows can have the same primary key value.

- **Non-null**: The primary key value cannot be NULL. It must have a value for every record.

- **Indexed**: Databases usually create an index on the primary key, which improves the efficiency of querying and searching for specific records.

- **Data Integrity**: Primary keys ensure data integrity by preventing duplicate records and guaranteeing that each record can be uniquely identified.

- **Example**: In a table of "Employees," the primary key might be the "EmployeeID" column.

## Foreign Keys
A foreign key is a field (or a set of fields) in one table that is used to establish a link between the data in two tables. It creates a relationship between the tables, ensuring referential integrity. Key points about foreign keys include:

- **Relationships**: Foreign keys establish relationships between tables. They define how data in one table relates to data in another table.

- **Referential Integrity**: Foreign keys enforce referential integrity, meaning that values in the foreign key column(s) must match values in the primary key of the referenced table.

- **Cascading Actions**: Foreign keys can be configured to perform cascading actions, such as automatically updating or deleting related records when the primary key record changes or is deleted.

- **Example**: In a database with two tables, "Orders" and "Customers," the "CustomerID" column in the "Orders" table could be a foreign key that relates each order to a specific customer in the "Customers" table.

## Establishing Relationships
To establish a relationship between tables using primary and foreign keys:

1. **Identify the Related Data**: Determine which data in one table needs to relate to data in another table. For example, in an e-commerce database, you want to link customers to their orders.

2. **Design the Tables**: Create the tables with appropriate columns and define the primary key in the referenced (parent) table. In the example, "CustomerID" in the "Customers" table is the primary key.

3. **Create the Foreign Key**: In the related (child) table, create a column, such as "CustomerID," and set it as a foreign key that references the primary key in the parent table.

4. **Enforce Referential Integrity**: Set up the database to enforce referential integrity, ensuring that the values in the foreign key column(s) match the values in the primary key.

5. **Use the Relationship**: Now, you can use SQL JOIN operations to query data from both tables, leveraging the established relationship.

In summary, primary keys ensure each row's uniqueness and integrity within a table, while foreign keys establish relationships between tables, enforcing referential integrity and enabling powerful data retrieval operations.



# Q4. ACID Properties in Database Transactions

ACID is an acronym that stands for **Atomicity**, **Consistency**, **Isolation**, and **Durability**. These properties are essential in ensuring the reliability and integrity of database transactions. Let's explore each of these properties:

## 1. Atomicity

**Atomicity** ensures that a database transaction is treated as a single, indivisible unit of work. This property guarantees that either all the changes made by a transaction are successfully applied to the database, or none of them are. If any part of the transaction fails, the entire transaction is rolled back, and the database remains unchanged.

In simpler terms, atomicity means that a transaction is all or nothing. It avoids leaving the database in an inconsistent state.

## 2. Consistency

**Consistency** ensures that a database remains in a valid state before and after a transaction. It enforces integrity constraints and business rules, preventing the database from being in an inconsistent or invalid state. If a transaction violates these constraints, it is rolled back, and the database is not modified.

Consistency ensures that the data is always in a meaningful and accurate state.

## 3. Isolation

**Isolation** guarantees that concurrent transactions do not interfere with each other. It allows multiple transactions to be executed simultaneously without affecting the outcome of each other. Each transaction sees a consistent snapshot of the database, as if it were the only transaction running.

Isolation prevents issues like data corruption and ensures that transactions do not impact each other's results.

## 4. Durability

**Durability** ensures that once a transaction is committed, its changes are permanent and survive any kind of system failure, such as a power outage or a crash. The changes are saved to non-volatile storage, typically on a disk, so that they can be recovered and restored even in the event of a catastrophic failure.

Durability guarantees that the data will persist and remain consistent, even in the face of unexpected failures.

In summary, the ACID properties are a set of key principles that maintain the integrity, reliability, and consistency of database transactions. These properties are crucial for ensuring data accuracy and the ability to recover from failures in database systems.

# Q5. Indexing in Databases

Indexing is a fundamental concept in the field of database management, and it plays a crucial role in improving the performance of database queries. Essentially, an **index** is a data structure that allows for efficient data retrieval from a database table. It works like a table of contents in a book, enabling the database management system (DBMS) to quickly locate and access the data you're looking for without having to scan the entire table.

### How Indexing Improves Query Performance

1. **Data Structure**: An index is a separate data structure associated with a database table, containing a subset of the table's columns. These columns are typically the ones most frequently used in search conditions or for sorting operations. The index data structure is typically a B-tree or a hash table.

2. **Quick Lookup**: When you execute a query that includes conditions in a SQL WHERE clause, the DBMS can use the index to find the rows that satisfy those conditions without scanning the entire table. This significantly reduces the amount of data that needs to be processed.

3. **Sorting**: Indexes are also useful for speeding up sorting operations. For instance, if you want to retrieve data in a particular order (e.g., ascending or descending), the DBMS can use an index on the sorting column(s) to quickly return the results in the desired order.

4. **Reducing Disk I/O**: Indexes reduce the amount of disk I/O (Input/Output) required to fetch data, as the DBMS can directly access the relevant data pages based on the index. This results in faster query execution times.

5. **Improved Concurrency**: Indexes can enhance database concurrency by reducing the time that a query locks a table or specific rows. Since indexes speed up query execution, locks are held for a shorter duration.

6. **Trade-offs**: While indexing significantly improves query performance, it's not without trade-offs. Indexes consume additional disk space, and maintaining them requires updates when data is inserted, updated, or deleted. Therefore, there's a balance to strike between the number and type of indexes and the database's overall performance.

7. **Types of Indexes**: There are various types of indexes, including clustered indexes, non-clustered indexes, bitmap indexes, and full-text indexes. Each type is designed to address specific use cases and query optimization scenarios.

In summary, indexing in a database is a method of optimizing query performance by creating data structures that enable the DBMS to quickly locate and retrieve specific data rows. By using indexes, you can significantly reduce the time and resources required for data retrieval, making your database more efficient and responsive to queries. However, it's important to carefully design and maintain indexes to ensure they provide the desired performance benefits while minimizing the associated overhead.

# Q6. Concurrency Control and Deadlocks in Multi-User Database Environments

## Concurrency Control

Concurrency control is a fundamental concept in database management systems (DBMS) that ensures multiple users can access and modify data concurrently without causing data inconsistencies or conflicts. In a multi-user database environment, different users or transactions may be trying to read and update the same data simultaneously. Without proper concurrency control, this can lead to issues such as data corruption, lost updates, and other anomalies.

### Key Techniques for Concurrency Control:

- **Locking**: Locks are used to restrict access to a data item (e.g., a row in a table) while a transaction is working with it. Common types of locks include shared locks (for read operations) and exclusive locks (for write operations). Lock management ensures that conflicting operations do not occur simultaneously, preventing data inconsistencies.

- **Transactions**: Concurrency control often relies on the concept of transactions, which are sequences of one or more database operations (e.g., reads, writes) treated as a single unit of work. Transactions are managed to ensure data consistency, and they are typically executed with a combination of locking, isolation levels, and atomicity (all-or-nothing property).

- **Isolation Levels**: DBMSs support different isolation levels (e.g., Read Uncommitted, Read Committed, Repeatable Read, Serializable) that determine the level of visibility and consistency of data for concurrent transactions. Higher isolation levels offer stronger data consistency guarantees but may introduce performance trade-offs.

## Deadlocks

A deadlock is a situation in which two or more transactions or processes are unable to proceed because each is waiting for a resource that the other has. Deadlocks can occur in a multi-user database environment when multiple transactions attempt to acquire locks on resources in a way that creates a circular waiting dependency. When a deadlock occurs, none of the involved transactions can make progress, and the database system must intervene to resolve the situation.

### Strategies for Managing and Preventing Deadlocks:

- **Timeout**: The DBMS can set a timeout for transactions waiting for resources. If a transaction's request for a resource is not granted within the specified time, the DBMS can release its locks and allow other transactions to proceed. This avoids long-lasting deadlocks but may lead to wasted resources.

- **Detection and Resolution**: DBMSs may employ deadlock detection algorithms to identify deadlocks when they occur. Once a deadlock is detected, the DBMS can take actions to resolve it, such as terminating one of the conflicting transactions or rolling back some of their operations.

- **Prevention**: Deadlock prevention strategies aim to structure transactions and resource access patterns to eliminate the possibility of deadlocks. One common method is to enforce a strict order in which transactions can request locks on resources.

Concurrency control and deadlock management are essential components of database systems that ensure data consistency and prevent system-wide deadlocks, ultimately contributing to the reliability and effectiveness of multi-user database environments. The specific mechanisms and strategies used can vary depending on the DBMS in use and the specific requirements of the application.

# Q7. Database Sharding: Improving Performance and Scalability

**Database sharding** is a database design and management technique used to improve the performance and scalability of large, high-transaction-rate database systems. Sharding involves breaking down a large database into smaller, more manageable parts called shards, each of which can be hosted on separate servers. Each shard contains a subset of the data, and collectively, the shards make up the entire database.

## Real-Time Examples of Database Sharding

### 1. Social Media Platforms (e.g., Facebook, Twitter):

- **Why Sharding is Used**: Social media platforms experience enormous volumes of data and traffic. Storing all user data, posts, and interactions in a single database would quickly lead to performance issues and scalability challenges.
- **How Sharding is Implemented**: The database can be sharded based on user IDs, geographic regions, or some other criteria. For example, one shard might store user data for users whose IDs fall between 1 and 10,000, while another shard might handle users with IDs between 10,001 and 20,000. This way, each shard can be hosted on a separate server or cluster, distributing the workload and allowing for horizontal scaling. Sharding allows social media platforms to maintain responsiveness and handle millions of concurrent users.

### 2. E-commerce Websites (e.g., Amazon):

- **Why Sharding is Used**: E-commerce websites process a massive number of transactions, product listings, and user accounts. To provide fast and reliable service, they must ensure that their databases can handle the load.
- **How Sharding is Implemented**: Sharding can be applied based on product categories, geographic regions, or both. For instance, one shard might store data related to electronics, another for clothing, and so on. Additionally, for geographic sharding, a database shard may be dedicated to users from a specific region. As users make queries, the system routes them to the appropriate shard. This reduces the query response time and allows the e-commerce platform to manage peak loads efficiently.

### 3. Gaming Industry (e.g., Massive Multiplayer Online Games - MMORPGs):

- **Why Sharding is Used**: MMORPGs need to maintain a consistent and responsive experience for players across different game servers, even as the player base grows. Sharding helps distribute player data and gameplay across various servers.
- **How Sharding is Implemented**: Sharding can be done based on in-game locations, zones, or even on a per-server basis. For example, different shards may represent different game regions or in-game zones, and players are placed on the appropriate shard based on their location in the game world. This ensures that each shard handles a specific portion of the game world and associated player interactions, reducing the load on each server and improving game performance.

### 4. Financial Institutions (e.g., Banks):

- **Why Sharding is Used**: Banks and financial institutions need to manage vast amounts of customer data, transactions, and financial records. Ensuring data integrity, security, and high availability is critical.
- **How Sharding is Implemented**: Sharding in the financial sector can be applied based on account types, geographic locations, or even specific services. For instance, a shard may store customer data and transactions related to checking accounts, while another shard handles savings accounts. This approach allows the bank to isolate different types of data and reduce the risk of a single point of failure, ensuring high availability and efficient data access.

Database sharding is a versatile technique used in various industries to address the challenges of handling large volumes of data and high transaction rates while maintaining performance and scalability. It involves careful planning and the development of a sharding strategy that suits the specific needs of the application or system.

