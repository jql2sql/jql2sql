# JQL2SQL
Transfile JQL to SQL to support various searching 'and', 'or', '()', %keyword% and so on.

# Live demo
Please visit our live demo https://jql2sql.github.io/ to understand how jql2sql package works.

# Development

This package is consist fo three parts. JQL Parser, SQL Transpiler and Extended Function.

## JQL Parser

We implement our own JQL parser by using [nearley](https://nearley.js.org/).
It parses jql text to AST(Abstracted Syntax Tree) for transpiler.

- To build JQL Parser
```
npm run build:parser
```

- To test JQL Parser
```
npm run test:parser
```

## SQL Transpiler

From AST, we transpile the tree to SQL.

```
npm run test:transpiler
```

## Extended Function

**Will be supported**, **Not supported yet**.

You can define our own function to extend your searching like below.

```
field = myfunction(arg1, arg2) and date < now()
```


# Q & A

## Why we can't use SQL directly for seraching
In security point of view, it's very dangerous due to SQL injection attack.
So, we need our own grammar for searching, and it should be transpiled as SQL.

## Why this package use JQL
As Jira is famouse issue tracker, therefore JQL(Jira Query Language) has been used by many people. So, Rather than re-inventing wheel, we borrow JQL grammar.

