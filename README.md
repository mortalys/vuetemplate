# TypeScript - Vue Starter Kit

Fork the current repository to start using a template using VUE with Typescript.

It has build in plugins and the most recent techniques to avoid many of boiler code plate.

Features included:

- Project Scaffolding using DDD Patterns;
- Typescript, Vue, Vuex;
- Complete CI/CD pipeline.

Core libraries used:

- Vue 2.x and VUE-CLI 4.x
- Vuex using Vuex Class and Vuex Module Decorators;
- Typescript 3.5;
- SASS Loader ( SCSS, LESS, SASS )
- AXIOS for Network requests;
- Jest;
- Cypress.

## Requirements

Run in Windows, Linux, macOS

[Git](https://git-scm.com/)

- Version 2.x

[Node.js](https://nodejs.org/)

- Version 12.x LTS

Visual Studio Code

- Recommended Plugins
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) ( Author : Dirk Baeumer )
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) ( Author : Pine Wu )
  - [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets) ( Author : Sarah Drasner )

## Project setup

`git clone @REMOTE_SOURCE`

`npm install`

In case of npm having problems with installation of dev dependencies try

`npm install --only=dev`

In case of **node-sass** errors:

`sudo npm install --save-dev --unsafe-perm node-sass`

### Compiles and hot-reloads for development

`npm run serve`

## Development

New to Vue Typescript?

- [Vue](https://vuejs.org)

- [Typescript](http://www.typescriptlang.org)

- [Vue TS](https://vuejs.org/v2/guide/typescript.html)

Debugging

- [Vue.js devtools for Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

## Project Scaffolding Structure

Trying to make best use of a Domain Drive Design pattern in order to keep SOLID principles in use.

`src\domains\DOMAIN` ( A sphere of knowledge (ontology), influence, or activity );

- `.\__tests` ( Unit and Integration files );
- `.\components` ( Child components that extends directly from main domain );
- `.\models` ( entities, types and enumerations );
- `.\services` ( logic which will do all the interaction with the external network resources );
- `.\store` ( serves as state management pattern ).
- `.\index` ( entry class for the domain ).

!! Direct Imports should be avoided !!

Dependencies should be using the `_main/_shared` files according to keep domain dependencies has clean has possible to be easily shared

- `.\DOMAIN\<folder>\_main.ts` ( dependencies related to the Domain )
- `.\DOMAIN\<folder>\_shared.ts` ( dependencies related to the EXTERNAL Domain )

`src\assets`

- all related media files and external dependencies.

`src\store`

- store ( serves as a centralized state management pattern from all domains ).

`src\views`

- app shared section files ( menus, routing, footers ).

`src\App.vue`

- main entry for structural files regarding html sections.

`tests`

- used to store End to End tests.

Core Configuration files

- `package.json` ( packages for development and production );
- `tsconfig.json` ( information Typescript configurations );
- `vue.config.ts` ( additional VUE configurations );
- `jest.config.ts` ( additional JEST configurations );
- `cypress.json` ( additional CYPRESS configurations ).

## Testing

This is only informative, no need to install.

For Unit and Integration we are using [Jest](https://jestjs.io/).

For End to End tests we are using [Cypress](https://www.cypress.io/).

New do Front End Testing? Some resources that worth read on:

- [An Overview of JavaScript Testing in 2019](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a) by Vitali Zaidman

- [Testing Vue components: a cheat sheet](https://medium.com/3yourmind/testing-vue-components-a-cheat-sheet-299b3b8be88d) by James O'Shea

### Unit and Integration

All

`npm run test:unit`

Specific

`npm run test:unit -- -t 'customEnumsSeeker-SUCCESS'`

### End to End

All Methods

`npm run test:e2e`

Specific

`npm run test:unit -- --record --spec "tests/e2e/specs/test.js"`

### Linter run ( CURRENTLY DISABLED )

`npm run lint`

When using VSC with recommended ESLint and Vetur plugins it's also recommended to add this to your VSC settings file:

```json
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "vue"
    ],
    "vetur.validation.template": false,
```

### Compiles and minifies for production

`npm run build`

*optionally* Running locally after build

- Install http-server ( `npm install http-server -g` )
- Run ( `npx http-server ./dist` )

## Maintainers

This is an on-going project and anyone is free to contribute in order to add new features!
