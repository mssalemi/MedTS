# Intro

**Typescirpt = Javascript with a 'type' system**

- help catch errors during development
- uses type annotation to analyze code
- only during development
- does not provide performance optimization

Typescript Code -> Typescript Compiler -> Converts to plain old JS code
(we dont execute TS, we still only execuate JS)

## Install Typescript with

Install command:

```
npm i -g typescript ts-node
```

To check it install correctly:

```
tsc --help
```

VS Code Essentials

1. set up code in path variables, so you can do `code .`

- View > Command Pallet
- Search for `install path`

2. Install Prettier Extension

- Takes a look at code and automatically formats it in fixed fashio
- Use this for consistent style
- Code > Preferences > SEttings > Format on Save
- set some format settings (eg double quotes)

## App 1

- Make simple network request to fetch some JSON, and print the result in terminal (with axios)
- api is `jsonplaceholder.typicode.com`, in resources section, we will be using `todos`
- https://jsonplaceholder.typicode.com/todos or /1 for single todos

Notes:
`npm init -y` => generates npm package

- then ```npm i axios@0.27.2````

## Run TS Code

- in terminal
- tsc <file or path to file>
- will create a index.js file or a javascript file of the TS file itself
- then `node index.js`

- shortcut to combine these two commands
- can use the `ts-node` module
- `ts-node index.ts`
