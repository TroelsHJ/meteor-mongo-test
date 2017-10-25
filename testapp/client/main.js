"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var templating_1 = require("meteor/templating");
require("./main.html");
var db_1 = require("../common/db");
templating_1.Template.quotes.helpers({
    quotes: function () {
        return db_1.Quotes.find({});
    }
});
templating_1.Template.createQuote.events({
    'submit .new-Quote': function (event) {
        event.preventDefault();
        var target = event.target;
        var quote = target.quote.value;
        var author = target.author.value;
        db_1.Quotes.insert({ quote: quote, author: author });
    }
});
