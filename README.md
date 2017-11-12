# Northcoders Morning Katas

From Wednesday week 1 we will start each day with a coding problem to solve.

1. Fork this repository to your own GitHub account because you will be pushing your own solutions to it.

2. Clone your fork of this repository to your local machine and `cd` into it:

  ```
  $ git clone <your fork's URL>
  $ cd morning-katas-november-2017
  ```

3. Run this command in your terminal:

`$ echo "mocha **/*.spec.js" > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit`


4. Add Northcoders' version of the repo as a git remote called `upstream`:

  ```
  $ git remote add upstream https://github.com/northcoders/morning-katas-november-2017.git
  ```

5. Every morning we will release a new kata and the solution to the previous day's. Pull the new data from Northcoders' remote repo.

  ```
  $ git pull upstream master
  ```

6. Once you have today's kata, navigate into its folder and install all its dependecies. You also have access to an npm script to run tests. You have until *9:30* to work on the problem.

  ```
  $ cd calculateDivisors
  $ npm install
  $ npm test
  ```

7. Work on the kata and commit changes as needed. When you are happy with your solution, push all your changes to your forked repo. If you haven't finished it by 9:30, feel free to do so in your own time, but make sure you keep your forked copy up to date. You should push to your fork frequently but as a bare minimum please make sure it's up to date with last week's kata solutions before Monday morning each week:

  ```
  $ git push origin master
  ```
