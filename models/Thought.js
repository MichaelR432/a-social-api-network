const { Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = require("./Reaction");

// schema to initialize user thought text, username, created data, and reactions

const ThoughtsSchema = new Schema (
    {
        thoughtsText: {
            type: String,
            required: true,
            minlength: 1, 
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
            ref: 'User',
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)

// Here we will reference and "GET" all the friends
ThoughtsSchema.virtual('reactionTotal').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;