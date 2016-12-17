import React from 'react';

/**
 * Creates the Contribution page
 */
const Contribution = React.createClass({
    render() {
        return (
            <div className="full-page">
                <h2>Research about FODMAPs is still ongoing.</h2>
                <div className="contribute">
                    <div>If something is outdated or missing, let me know!</div>
                    <div>
                        <a className="button-link" href="" target="_blank">Via Github</a>
                        <a className="button-link" href="https://goo.gl/forms/BecgJHdwmr4LiLmz2" target="_blank">Via Google Forms</a>
                    </div>
                </div>
            </div>
        );
    },
});

module.exports = Contribution;
