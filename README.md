# babelbam

babelbam is your **Comprehensive** JavaScript **Sandbox** and **Notebook**.

Offering a dynamic environment to build, disseminate, and revise code snippets in real-time, babelbam enhances your coding experience.

With compatibility for a wide range of libraries and frameworks, babelbam's user-friendly interface coupled with its live preview feature enables you to visualize the impact of your code instantaneously.

## Tech Stack

| [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=black&style=for-the-badge)](https://www.typescriptlang.org/) | [![React](https://img.shields.io/badge/-React-61DAFB?logo=React&logoColor=black&style=for-the-badge)](https://reactjs.org/)               | [![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=Redux&logoColor=white&style=for-the-badge)](https://redux.js.org/) | [![Lerna](https://img.shields.io/badge/-Lerna-CF4349?logo=Lerna&logoColor=white&style=for-the-badge)](https://lerna.js.org/)            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| [![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)                      | [![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=Express&logoColor=white&style=for-the-badge)](https://expressjs.com/) |   [![Bulma](https://img.shields.io/badge/-Bulma-00D1B2?logo=Bulma&logoColor=white&style=for-the-badge)](https://bulma.io/)   | [![esbuild](https://img.shields.io/badge/-esbuild-F8A51C?logo=esbuild&logoColor=black&style=for-the-badge)](https://esbuild.github.io/) |

## Features

- **All-in-One Sandbox**: Write, edit, and preview JavaScript and React code snippets without the need for external tools.
- **Real-Time Editing**: See the results of your code immediately with babelbam's live preview feature, making it easier to debug and visualize your work.
- **Library Support**: Utilize popular libraries and frameworks to enhance your coding experience.
- **Text-Editor**: babelbam provides a user-friendly way to document code using the built-in Markdown text-editor.
- **Sharing and Collaboration**: babelbam projects are automatically serialized and saved to user's machines, making it possible to store and share projects with others.
- **Command-Line Interface**: babelbam offers a convenient CLI, available on npm, for opening and creating babelbam files from the command line. `babelbam serve <filename>` starts a local API and opens the front-end application on a localhost port, allowing users to easily access and interact with babelbam in their browser.

## Usage

1. Install the [CLI](https://www.npmjs.com/package/babelbam) by running `npm i babelbam`.
2. Open new or existing notes with babelbam serve <filename> (Optionally include a filepath: babelbam serve <path/filename>).
3. Run `babelbam --help` for additional help

## Lessons Learned

- Mastering **Best Practices** for the design and creation of sophisticated, **production-grade** applications.
- Merging **Typescript**, **React**, and **React-Redux** into a seamless integration.
- Engineering highly **reusable React components** for efficiency.
- Constructing a **custom plugin** for **Esbuild** that enables in-browser transpiling/bundling with the capacity to import from npm.
- Setting up a **caching layer** for imported modules/bundled code utilizing Local-Forage.
- Implementing **Redux-Middlewares** to manage intricate business logic.
- Leveraging robust **third-party libraries** such as bulma, immer, monaco-editor, react-md-editor, commander, and more.
- **Securely managing user-input** by employing iframes as a code-execution environment, akin to popular platforms like Codepen.
- Utilizing lerna and nx to build a **mono-repo** containing multiple packages and build targets.
- Developing a **Restful-API** to deliver a **Front-End application** from a **Command Line Interface (CLI)**.
- Exploiting **web-assembly** for enhanced speed.
- **Deploying** packages to npm.

## Reflection

Embarking on this project has been a rewarding journey for me. It presented numerous opportunities for expanding my knowledge in TypeScript, React, and React-Redux, in addition to project-specific libraries such as Monaco-Editor and Resizable. A fascinating challenge that emerged was the management of lerna and the comprehension of the build process. Given that this project is composed of multiple packages, it was crucial to grasp how to instruct lerna to construct and deploy these packages in the proper sequence and catered to diverse production environments.

Moreover, this project underscored the significance of strategic planning and design in the creation of a large-scale application. It brought into sharp relief how beneficial the principles of Object-Oriented Programming (OOP) can be when engineering extensive apps. Crafting each component in a modular manner and ensuring code reusability significantly facilitates subsequent modifications and feature additions.

The experience of working on this project has been truly enjoyable, and it has fueled my enthusiasm for further learning and honing my skills!

## Acknowledgements

- [readme.so](https://readme.so/editor)
- [Simple Icons](https://simpleicons.org/?q=redux)
- [shields.io](https://shields.io/)

## Author

- [Brian Marin Silva](https://www.github.com/bamarin7)
