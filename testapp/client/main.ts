import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import { Quotes } from '../common/db';

Template.quotes.helpers({
  quotes() {
    return Quotes.find({});
  }
});

Template.createQuote.events({
  'submit .new-Quote'(event: Event) {
    event.preventDefault();
    let target = event.target;
    let quote = target.quote.value;
    let author = target.author.value;

    Quotes.insert({ quote, author });


  }
});
