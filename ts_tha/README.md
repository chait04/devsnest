This is our playground for TS app now

# Basic TS

- tsc src/index.ts ES2015
- tsc src/index.ts ES2017
  <!-- now if you run `node index.js` it will give error can not export module -->
  <!-- so it enable export we need to add module -->
- `tsc src/index.ts ES2017 --module commonjs`

<!-- you need to write all these things when you configure your typescript app -->

<!-- this will setup live code updating -->

- `tsc src/index.ts ES2017 --module commonjs --watch`

- `"outDir": "lib"` this thing says lib folder contains out output files, which we want to publish by this we can keep our things organised

<br>
<br>

## Install React Typescript

- `npx create-react-app my-app --template typescript`

<br>
<br>

# Objects

```ts
let obj: {
  name: string;
  age: number;
};
```

<br>
========================== Boom =================================
<br>
<br>
<br>

# React Typescript Props

- Defining props for a component <br>
  `interface [componentName]Props {...}`

- optional props

- Default props

<br>
<br>

# Typescript useState

- Type inference VS Type Annotation
  means TS knows what type we have without explicitly writting type of it `let name : string = "chaii"` like this.
  TS will automatically detect what is the type of value we provided

- Union Types
- Do no nest objects in your interfaces
- Organizing interfaces

<br>
<br>

# handle Forms

- e by default has type `any`, // e implicitly has any type
  to prevent this we write
  `e: React.ChangeEvent<HTMLInputElement>` - Just hover overthe error

<br>
<br>

## Refs

- HandBook https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#generics

- React TS cheateSheet - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example

- Dark mode - Context Api example https://replit.com/@AdedejiAgunbiad/HowToUseContext

<br>
<br>
<br>
<br>

===========================================================

# Doubt Class

===========================================================

- [❌] WalkThrough Docs -https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#generics
- [❌] Component:- TodoList.tsx/ tsconfig
- [❌] create input, Button in form
- [❌] Style
- [❌] useState:- Fc/ angleBrackets
- [❌] Events :- submit/click/change
- [❌] ceate Interface for `Initial State` of todos
- [❌] Show current input State, try updating todo array: show errors
- [❌]

<br>
<br>

- function Component
  FC- you can pass props to this ex: `:FC <props>` now if you put {} in parameter you will get suggestions if you hover, ReactElement

- useState
  props- using interface/type
  give type to default state

```jsx
const [count, setCount] = (useState < number) | (null > null);
```

- useEffect - No changes in TS

- contextApi - similar to useState

```tsx
interface AppContextInterface {
  name: string;
  author: string;
  title: string;
}

const ctx = createContext<AppContextInterface | null>(null);

const AppContext: AppContextInterface = {
  name: 'Chaii',
  author: 'kaju',
  title: 'PohaEkPremKatha',
};

return <ctx.Provider value={AppContext}>{props.children}</ctx.Provider>;
```
