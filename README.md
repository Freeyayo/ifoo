# Spurv(Beta)

![avatar](https://raw.githubusercontent.com/Freeyayo/ifoo/master/docs/_media/logo.png)

[![](https://data.jsdelivr.com/v1/package/npm/spurv/badge)](https://www.jsdelivr.com/package/npm/spurv)
[![npm version](https://badge.fury.io/js/spurv.svg)](https://badge.fury.io/js/spurv)

### The Documentation
[Documentation Link](https://freeyayo.github.io/ifoo/#/)

### What is Spurv?
- A library which includes many useful functions and data structures that JavaScript doesn't have yet.
- Most of them comes from my daily work and study.
- Spurv is written in TypeScript.
- Use ES Module to bundle them all under the hood.
- No external dependencies.

### What does Spurv provide?

- Helper Functions 
    - Math
    - Functional Programming
    - Object/Array Iteration
- Data Structure
    - Link List
    - Tuple
    - Tree
    - Graph
- Performance
    - Faster
    - As Less Heap Memory Used AS Possible

## The develoment guide

### Setup
1. Clone code to your local.
2. Switch to `dev` branch and install dependencies.
    - `git switch dev`
	- `npm install` / `yarn install`

### Project Structure
```
|
|_ _build	// Bundle configuration. Here I use Rollup
|
|_ _docs	// Documentation files. It's easy to understand where each file's content is mapping to.
|		   	// Markdown framework is Docsify. Run `docsify serve docs` will start a local server for document on port 3000 by default.
|_ _example	// not using it for now
|
|_ _mocks   // mock data
|
|_ _src		// Source files of this project
|
|_ _test 	// Test cases.
```

### Build Production Files
1. Run `npm run build` / `yarn build` when you are ready to bundle a new production version.
2. Check the files in the dist folder, there will be 3 files located. They stand for using in the `browser`, `commonJS` and `es module` respectively.

### Test
I strongly recommend developers could follow this naming rule by creating a new test command:

`"test:[developer]": "jest ./test/[module].test.js --notify"`

### More & About
If you have any question or suggestion, please feel free to issue them on the Github and don't forget to **tag** them!
This project is for collecting our experience and implementation of our study. We compose them as a library and inspect their pitfalls by each other, it's really helpful to improve our understanding of many knowledge and something need to be remembered.
