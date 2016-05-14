import { Meteor } from 'meteor/meteor';
import { Events } from '../imports/api/events.js';

Meteor.startup(() => {
    createdAt = new Date();
    if (Events.find().count() === 0) {
      console.log("repopulating events db")
      Events.insert({name: "Car Payment", amount: 500, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[4], skips: 0, recurDescription: "Once A Month" });
      Events.insert({name: "Mortgage", amount: 1500, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[1], skips: 0, recurDescription: "Once A Month" });
      Events.insert({name: "Cell Phone", amount: 200, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[6], skips: 0, recurDescription: "Once A Month" });
      Events.insert({name: "Car Insurance", amount:100, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[12], skips: 0, recurDescription: "Once A Month" });
      Events.insert({name: "Gas", amount: 100, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[1], skips: 0, recurDescription: "Once A Month" });
      Events.insert({name: "Paycheck", amount: 2500, type: "income", recurring: true, period: "month", createdAt: createdAt, dates:[5, 21], skips: 0, recurDescription: "Twice A Month" });
      Events.insert({name: "Internet", amount: 120, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[23], skips: 0, recurDescription: "Once A Month" });
      Events.insert({name: "Electric", amount: 90, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[10], skips: 1, recurDescription: "Every 2 Months" });
    }
});
