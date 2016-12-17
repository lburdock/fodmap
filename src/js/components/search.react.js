import React, { PropTypes } from 'react';

/**
 * Creates a component with an input and button element
 */
const Input = React.createClass({
    render() {
        return (
            <div className="question">
                <div>
                    <input
                        ref="question"
                        type="text"
                        placeholder="Ask your question here..."
                        onKeyUp={e => {
                            e.preventDefault();
                            if (e.keyCode == 13) {
                                this.props.askQuestion(this.refs.question.value);
                            }
                        }}/>
                </div>
                <div>
                    <button
                        onClick={e => {
                            e.preventDefault();
                            this.props.askQuestion(this.refs.question.value);
                        }}>
                        Shake it up
                    </button>
                </div>
            </div>
        );
    },

    propTypes: {
        askQuestion: PropTypes.func.isRequired,
    },

    componentDidMount() {
        this.refs.question.focus();
    },
});

module.exports = Input;
