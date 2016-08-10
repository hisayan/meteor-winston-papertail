// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by winston-papertrail.js.
import { name as packageName } from "meteor/hisayan:winston-papertrail";

// Write your tests here!
// Here is an example.
Tinytest.add('winston-papertrail - example', function (test) {
  test.equal(packageName, "winston-papertrail");
});
