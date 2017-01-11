# Code Golf

CodeGolf is a competitive game in which programmers complete a series of 
challenges ("holes", from here on out) of varying difficulty while trying 
to get the lowest score possible.  A code golf score is comprised of 3 factors:

  1. Execution time
  2. Efficiency (memory usage)
  3. File size

Each hole has two components.  The challenge itself and the suite of tests used 
to check submissions for validity, accuracy and to expose the necessary 
statistics to calculate a score.

Holes range in difficulty from par 3 to par 5.  Par is determined based on 
the relative challenge of all holes on a course, so what's considered par 
can vary wildly from course to course unlike actual golf.

### Course Design
  
  * The system where submissions are validated and scored is a course feature
  * The language and environment are course features
  * Designers should aspire to create holes that are easy to complete but 
  difficult to master
  * Validation of submissions should be comprehensive and not easy to game
  * A course must adhere to the [CodeGolf Course Specification]() 

### Rules

  * A player may submit their round at as a single archived directory that 
  adheres to the [CodeGolf Round specification]().
  * If a player is unable to complete a hole, they're issued a \*high score 
  * Compressed files are not accepted but minified code is fine

### Tournament Play

A traditional code golf tournament takes place on a Monday morning and lasts 
through Friday afternoon. Playing through the course doesn't require that much 
time, but it's assumed players will be participating during downtime or off 
hours from their typical full time work. Refer to the 
[CodeGolf Tournament Specification]() for more information.

### CodeGolf CLI App

  * Course validation 
  * Course submission 
  * Course generator

  * Round submission 
  * Round validation 
  * Round generator

  * User CRUD
  * Organization CRUD

  * Queryable stats 

### Need companion Coordination and Execution projects

  * Round Queueing (for a round to be played in isolation on a instance)
  * Round environment setup/teardown 
  * Database (user, org, statistics data)
  * Storage (courses and assets)
