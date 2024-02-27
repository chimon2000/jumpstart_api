# Nest API Jumpstart

A starter repository for building a Graphql or REST API with NestJS.

## Starting a project from the Jumpstart

The following is the recommended approach for setting up a new project from this jumpstart as it will allow you to easily integrate updates from the jumpstart into your project in the future.

1. Clone jumpstart repo to your project folder `git clone git@github.com:uptech/nestjs-api-jumpstart.git <your-project-name>`
2. Change into your project directory `cd <your-project-name>`
3. Rename the `origin` remote to `jumpstart`, ex: `git remote rename origin jumpstart`
4. Create your repository on GitHub
5. Add your your repository as a remote named `origin`, ex: `git remote add origin <your-repository-url>`
6. Push your local repository up to the remote repository you just setup on GitHub, ex: `git push -u origin main:main`

From this point on you are good to start developing, committing, and integrating changes as you normally would. But this sets you up to easily be able to integrate improvements to jumpstart over time.

## Updating from Jumpstart

To update from the jumpstart we simply do the following.

1. Make sure you or checked out on `main`, ex: `git checkout main`
2. Make sure the local repo knows all about the remote jupmstart repo, ex: `git fetch jumpstart`
3. Merge jumpstarts changes into your `main` branch, ex: `git merge jumpstart/main`

The ease of this process will hopefully aid in you making necessary changes in jumpstart and merging them back into your project. That way we can all share in the progress together.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Update Project Shell Libs
This should be run as often as possible to ensure your project has the most up to date shell scripts.
```
sh ./.git-ps/vendor/libs/update_project_shell_libs
```
Note: this command must be done from the root directory of this project to be successful. Otherwise, an error message will appear.