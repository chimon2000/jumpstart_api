# Jumpstart API

A starter repository for building serverless APIs, jobs, or GraphQL/REST APIs with NestJS.

## Install dependencies

- [pnpm](https://pnpm.io/installation) - Fast, disk space-efficient alternative to npm
- [nitric](https://nitric.io/docs/guides/getting-started/quickstart) - Nitric's CLI will be used to develop and deploy the application
- [pulumi](https://www.pulumi.com/docs/install/) - Nitric uses the Pulumi Automation API for its pre-built provider plugins. If you want to deploy, you will need to configure Pulumi.

## Starting a project from the Jumpstart

The following is the recommended approach for setting up a new project from this jumpstart as it will allow you to easily integrate updates from the jumpstart into your project in the future.

1. Clone jumpstart repo to your project folder `git clone git@github.com:uptech/jumpstart_api.git <your-project-name>`
2. Change into your project directory `cd <your-project-name>`
3. Rename the `origin` remote to `jumpstart`, ex: `git remote rename origin jumpstart`
4. Create your repository on GitHub
5. Add your repository as a remote named `origin`, ex: `git remote add origin <your-repository-url>`
6. Push your local repository up to the remote repository you just setup on GitHub, ex: `git push -u origin main:main`

At this point on you can start developing, committing, and integrating changes as you normally would. But this sets you up to easily be able to integrate improvements to jumpstart over time.

## Updating from Jumpstart

To update from the jumpstart we simply do the following.

1. Make sure you checked out on `main`, ex: `git checkout main`
2. Make sure the local repo knows all about the remote jumpstart repo, ex: `git fetch jumpstart`
3. Merge jumpstarts changes into your `main` branch, ex: `git merge jumpstart/main`

The ease of this process will hopefully aid in making necessary changes in jumpstart and merging them into your project. That way we can all share in the progress together.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ nitric start
```

## Test

```bash
# unit tests
$ pnpm test

# e2e tests
$ pnpm test:e2e

# test coverage
$ pnpm test:cov
```

## Update Project Shell Libs
This should be run as often as possible to ensure your project has the most up-to-date shell scripts.
```
sh ./.git-ps/vendor/libs/update_project_shell_libs
```
Note: this command must be done from the root directory of this project to be successful. Otherwise, an error message will appear.
