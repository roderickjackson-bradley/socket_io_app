# SQL Lab

<img src="http://i.giphy.com/13n8txR8c9UDHG.gif?raw=true">

# Where In The World Is Carmen Sandiego?

## Introduction

#### Use SQL to find Carmen Sandiego

We're going to use what we've learned already about querying a database using SQL commands to to chase down and capture an elusive and world-renowned thief, Carmen Sandiego!

## Set Up

1. Ensure that you're in this lab's folder within the class repo.

2. Open the `clues.sql` file in your text editor: `$ code clues.sql`

3. Start the `psql` interactive terminal: `$ psql`

4. Create a database named `carmen` and connect to it:

	```sql
	CREATE DATABASE carmen;
	\c carmen
	```

5. Create `city`, `country` & `countrylanguage` tables and seed their data using the _import_ (`\i`) psql command:

	```sql
	\i world.sql
	```

## Exercise

The goal is to figure out what city Carmen Sandiego is heading to so that she can be met by the proper authorities.

You'll be writing SQL queries within `clues.sql` to answer each clue.

Run the queries in psql by typing `\i clues.sql`.

## Hints

- Use the psql `\d` & `\dt tablename` commands to list & display the schema of each of the three tables.

- Google and collaborate to reach the goal of finding out where Carmen's destination is.

- For example, you'll certainly need to know about the [ORDER BY](http://www.postgresqltutorial.com/postgresql-order-by/) clause.

## Additional Resources

- [PostgreSQL official documentation](http://www.postgresql.org/docs/)

## Encore 

If you finish this exercise and want to learn more about SQL, do some of [these exercises here](https://pgexercises.com/).