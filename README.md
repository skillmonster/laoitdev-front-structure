## LaoItdev Structure

The "LaoItdev Structure" is a structure for a monorepository project. A monorepository is a repository that contains more than one logical project. These projects can be unrelated, loosely coupled or connected in any other way, but they are all managed in a single repository.

<<<<<<< HEAD

### Setup Project

# The instructions provided under "Setup Project" are typical steps to set up a project from a repository:

### Start Project

The instructions provided under "Start Project" are typical steps to set up a project from a repository:

> > > > > > > start project

- Clone project: This is the process of downloading the project from the repository to your local machine.
- Change repo (**if you have another repo**): This step is optional and is only necessary if you want to use a different repository.
  > example: git remote set-url origin (your repo)
- Rename the project name in [a package.json](package.json): This is to personalize the project and make it identifiable.
- Install Project
  `yarn install -W`. This command installs all the dependencies listed in the package.json file.

### Packages

section lists all the packages used in the project along with their versions.

| Package                                                                        | Version |
| ------------------------------------------------------------------------------ | :------ |
| [react](https://react.dev/)                                                    | 18.2.0  |
| [vite](https://vitejs.dev/)                                                    | 5.0.11  |
| [@tanstack/react-query](https://tanstack.com/query/latest/docs/react/overview) | 5.17.9  |
| [axios](https://axios-http.com/docs/intro)                                     | 1.6.5   |
| [react-router-dom](https://reactrouter.com/en/main/start/tutorial#setup)       | 6.21.1  |
| [dayjs](https://day.js.org/)                                                   | 1.11.10 |
| [i18next](https://www.i18next.com/)                                            | 23.7.16 |

### Run Project

```bash
yarn workspace admin dev
```

Here's a breakdown of the command:

- `yarn`: This is the package manager used to run scripts and manage dependencies.
- `workspace`: This is a Yarn command used to run a script in a specific workspace.
- `admin`: This is the name of the workspace where the script will be run. In a monorepo, you could have multiple workspaces, each representing a different project or part of a project.
- `dev`: This is the name of the script to run. This script should be defined in the `scripts` section of the `package.json` file in the admin workspace.
  > Before running the project, make sure you have installed all the dependencies with `yarn install -W`.

**_Run Project with flag_**

```bash
yarn workspace admin dev --mode development
```

- `--mode development`: This is a flag that sets the mode for the script. In this case, it sets the mode of `development``
