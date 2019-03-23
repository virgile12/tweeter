"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.collection("tweets").insertOne(newTweet)
        callback(null, true);
      })
    },

    // Get all tweets from mongoDb "tweeter" (collection: tweets) database, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err,res)=>{
        callback(null, res.sort( (a, b) => a.created_at - b.created_at ) )
      });

     
    }

  };
}
