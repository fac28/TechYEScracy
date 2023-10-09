# TechYEScracy

TechYEScracy is an application designed to facilitate user participation in the decision-making process for proposed policies within a new technocratic state. By integrating OAuth authentication via GitHub, the platform enables users to cast their votes on policy proposals. Notably, the influence of each user's vote is determined by their GitHub activity metrics, including total commits and the number of followers they have. This system ensures that users with a more significant GitHub presence wield greater influence over the laws of the state.

## Table of Contents
- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installing npm Modules](#installing-npm-modules)
- [Running the Application](#running-the-application)
  - [Seeding the Database](#seeding-the-database)
  - [Local Development Server](#local-development-server)
  - [Running Tests](#running-tests)
- [Contributors](#contributors)

## Getting Started

### Cloning the Repository

To get started with TechYEScracy, you'll need to clone this GitHub repository to your local machine. Open your terminal and run the following command:

```bash
git clone https://github.com/fac28/TechYEScracy.git
```
### Installing npm Modules

Navigate to the project directory and install the required npm modules using the following command:

```bash
cd TechYEScracy
npm install
```

## Running the Application


### Seeding the Database

To seed the database with initial data for testing and development purposes, you can use the following command:

```bash
npm run seed
```

This command will populate the database with sample data, allowing you to explore the TechYEScracy application with pre-defined policies and user information. It is especially useful for setting up a development environment or running tests.

### Local Development Server

You can start a local development server by running the following command:

```bash
npm run dev
```

This will launch the TechYEScracy application locally, and you can access it in your web browser.

### Running Tests

To run tests for the application, use the following command:

```bash
npm run test
```

This will execute the test suite and provide feedback on the application's functionality.

## Contributors

TechYEScracy is developed and maintained by the following contributors:

[Shaughn Anderson](https://github.com/ShaughnAnderson94), [Deepashri Dali](https://github.com/DeepsDali), [Laurie Sgroi](https://github.com/sgroi-l), [James Sandford Smith](https://github.com/JamesESS)

Feel free to reach out to any of them for questions or contributions to the project.
