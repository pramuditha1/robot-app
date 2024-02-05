# Robot App

Live demo: [Robot App](https://teleporting-robot.netlify.app/)

# Solution & Requirement Analysis
[Documentation](https://robot-application.atlassian.net/wiki/x/zoE)
Need to login/ signup to atlasin confluence to view the documentation

## Overview

This is a simple React-typescript application representing a robot moving on a grid. The robot can be moved using navigation buttons or upon clicking on a cell, and its position is displayed on the grid.

## Features

- Move the robot using buttons to North (N), South (S), East (E), and West (W) directions.
- Clicking/tapping on a cell will teleport the robot to that cell.
- Teleporting should delay based on the distance the robot has to travel
- Visual representation of the robot's movement on the grid.
- Error handling for invalid positions - should not fall from the table edge.

## Installation

1. Clone the repository:

### `git clone https://github.com/pramuditha1/robot-app.git`

2. Locate the repository and install dependencies

### `cd robot-app`

### `npm install`

3. Run unit tests

### `npm test watch:all`

4. Run project locally

### `npm start`

5. Build project

### `npm run build`
