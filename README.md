# QA Analyst Position to Base 2

[![library: protractor-helper](https://img.shields.io/badge/library-protractor--helper-blue.svg)](https://www.npmjs.com/package/protractor-helper) [![library: faker](https://img.shields.io/badge/library-Faker-red)](https://www.npmjs.com/package/faker)


Automation using [Protractor](https://www.npmjs.com/package/protractor) and [Protractor-helper](https://www.npmjs.com/package/protractor-helper)


## Prerequisites

- [Git](https://git-scm.com/download/) and [Node.js](https://nodejs.org/en/download/) installeds.

## Installing dependencies and running tests

All the commands below are done in the _command prompt_.

**1** - Make a clone of the repository and access the directory created by the clone:

```sh
git clone https://github.com/pedrohnsc/DesafioBase2.git && cd DesafioBase2
```

**2** - Install the project dependencies:

```sh
npm install 
```

**3** - And finally, enter the following command to run the tests:

```sh
npm test
```

## To run others tests

Run `npm run test:chrome` to run the e2e tests only on Chrome headless browser (all tests will run in only one browser instance).

Run `npm run test:firefox` to run the e2e tests only on Firefox headless browser (all tests will run in only one browser instance).

Run `npm run test:multi` to run the e2e tests on both Chrome and Firefox headless browsers in parallel.

Run `npm run test:chrome:parallel` to run the e2e tests only on Chrome headless browser (each spec file will be executed in a different browser instance in parallel).

Run `npm run test:audit` to run the audits tests, it will check Performance, Accessibility, Best Practices, SEO and Progressive Web App.

## Test result

You will see a similar result at the end of the test run:

```sh
> desafiobase2@1.0.0 test /home/pnascimento/DesafioBase2
> protractor tests/configurations/chrome.js

[00:49:44] I/launcher - Running 1 instances of WebDriver
[00:49:44] I/direct - Using ChromeDriver directly...
Started
Jasmine started
.
  1 Success login tests
    ✓ Login (5 secs)

.  2 Failed Login tests
    ✓ Wrong email (1 sec)
.    ✓ Wrong password (1 sec)
.    ✓ Dont fill the login form (1 sec)

.  3 Tests related to Report Issue
    ✓ Report an Issue (5 secs)
.    ✓ Try to report an issue with blank field (4 secs)




6 specs, 0 failures
Finished in 19.031 seconds

Executed 6 of 6 specs SUCCESS in 19 secs.
[00:50:04] I/launcher - 0 instance(s) of WebDriver still running
[00:50:04] I/launcher - chrome #01 passed
```

---
[MIT License](./LICENSE)