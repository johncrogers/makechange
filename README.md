# makechange

Used to determine the number of coins required to make change from a given amount.

## Setup:

- Run the following command to clone the repo and check installation:
  -  git clone https://github.com/johncrogers/makechange.git && cd makechange && npm install && npm test && npm start 4.5
- Add coin options to config.json.

## Usage:

- npm run start (desired amount, ex: 4.5)
- npm run test: This is set up to do an number of things...
  - Runs the Jest test files ( jest )
  - Reports on skipped tests ( jest --reporters jest-skipped-reporter )
  - Reports on files missing test suites ( npm run test:files )