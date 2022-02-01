# Inversify + Express + Typescript PoC

This is a simple PoC (Proof of Concept ou prova de conceito) to test the inversion of control concept (IoC) using Inversify with a simple Express API.

- Each Use Case and Repository has a injectable() decorator
- Inside types.ts, we have a Symbol for each injectable class.
- Inside wire.ts we create the Inversify container and we register each class with the respective symbol.
- To use any injectable service, we have two ways to do that:
```
class Example {
    constructor(
      @inject(TYPES.ExampleClass) private exampleClass: ExampleClassInterface
    )
}
```
```
import { container } from '../wire'

class Example {
    someMethod() {
        const exampleClass: ExampleClassInterface = container.get(TYPES.ExampleClass)
    }
}
```

## Tech

Dillinger uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Inversify] - IoC library

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm run start:dev
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [Inversify]: <https://inversify.io/>
