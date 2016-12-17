import actionTypes from '../actions/types';
// import { getRandomIndex } from '../utils/math-utils';

const possibleAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
];
// const arrayLength = possibleAnswers.length;

/**
 * Returns a random answer
 * @param {string} state The previous state of the reducer
 * @param {object} action The action that triggers this reducer
 * @return {string} A random answer from the possibleAnswers list
 */
export default function(state = '', action) {

    switch (action.type) {
        case actionTypes.GET_ANSWER:
            return possibleAnswers[2];

        default:
            return state;
    }
}
