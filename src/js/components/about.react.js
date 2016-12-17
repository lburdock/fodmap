import React from 'react';

/**
 * Creates the About page
 */
const About = React.createClass({
    render() {
        return (
            <dl className="full-page">
                <dt><h2>What is this website?</h2></dt>
                <dd>
                    This website provides a list of low and high FODMAP foods.
                </dd>

                <dt><h2>...What?</h2></dt>
                <dd>
                    FODMAP is an acronym used to describe food that contains certain short-chain carbohydrates.
                    It stands for fermentable oligosaccharides (<a href="https://en.wikipedia.org/wiki/Fructooligosaccharide" target="_blank">fructans</a> & <a href="https://en.wikipedia.org/wiki/Galactooligosaccharide" target="_blank">galactans</a>),
                    disaccharides (<a href="https://en.wikipedia.org/wiki/Lactose" target="_blank">lactose</a>) and
                    monosaccharides (<a href="https://en.wikipedia.org/wiki/Fructose" target="_blank">fructose</a>), and
                    polyols (<a href="https://en.wikipedia.org/wiki/Sugar_alcohol" target="_blank">sugar alcohols</a>).
                    Yay, science!
                </dd>

                <dt><h2>Why should I care about high FODMAP foods?</h2></dt>
                <dd>
                    Basically, if your body doesn't break down FODMAPs well, they can:
                    <ul>
                        <li>Increase the fluid in your bowels, causing a laxative effect (you poop)</li>
                        <li>Be fermented by bacteria, causing gas and bloating (you toot)</li>
                    </ul>

                    You can try a low FODMAP diet as an elimination diet, where you give up high FODMAP foods for two weeks.
                    Then, you gradually reintroduce high FODMAP items to see if your symptoms recur.
                    But, I'm just some random internet stranger, so talk to a <a href="http://www.eatright.org/find-an-expert" target="_blank">dietitian</a> or doctor before starting any new diet.
                </dd>

                <dt><h2>Isn't there an easier way to figure out if I'm FODMAP intolerant?</h2></dt>
                <dd>
                    Yep. You can go to your doctor and request to be tested for lactose intolerance.
                    And there's a fructose malabsorption breath test too!
                </dd>

                <dt><h2>How much FODMAP is too much?</h2></dt>
                <dd>
                    Well, there isn't a strong consensus on that now, but the proposed cut-offs for high FODMAP foods are:
                    <ul>
                        <li>more than 0.5 g of fructose in excess of glucose per 100 g</li>
                        <li>more than 3 g of fructose in an average serving regardless of the glucose amount</li>
                        <li>more than 0.2 g of fructans per serving</li>
                    </ul>

                </dd>

                <dt><h2>How do I find out how much fructose or fructans are in my food?</h2></dt>
                <dd>
                    This isn't on the food label. Luckily, <a href="http://www.med.monash.edu/cecs/gastro/fodmap/" target="_blank">Monash University</a> in Australia is researching the FODMAP levels of food. That's where most of this data comes from!
                </dd>

            </dl>
        );
    },
});

module.exports = About;
