# JQL2SQL
Transfile JQL to SQL for complex searching

multiple columns
combination of and or

As you search Jiras by using JQL(Jira Query Language), this package transpile it as SQL where clause

# Live demo
To show how JQL2SQL work
We use sqlite.js as our database to search rows as combinations of multiple columns ,'AND', 'OR', and ()

table
auto incremental id(number)
name(text)
price(number)
weight(number)
date(date)
datetime(datetime)


```
npm run dev
```

# Build parser
```
npm build parser
```

# Test Parser/Transpiler

```
npm run test
```

```
npm run test:parser
```

```
npm run test:transpiler
```
