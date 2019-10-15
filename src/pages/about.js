import React from "react";
import Container from "../components/container";
import ExternalLink from "../components/external-link";
import Layout from "../components/layout";
import Message from "../components/message";
import SEO from "../components/seo";
import Title from "../components/title";

const items = [
  {
    question: "What is this website?",
    answer: "This website provides a list of low and high FODMAP foods.",
  },
  {
    question: "...What?",
    answer: (
      <>
        FODMAP is an acronym used to describe food that contains certain
        short-chain carbohydrates. It stands for fermentable oligosaccharides (
        <ExternalLink to="https://en.wikipedia.org/wiki/Fructooligosaccharide">
          fructans
        </ExternalLink>{" "}
        &{" "}
        <ExternalLink to="https://en.wikipedia.org/wiki/Galactooligosaccharide">
          galactans
        </ExternalLink>
        ), disaccharides (
        <ExternalLink to="https://en.wikipedia.org/wiki/Lactose">
          lactose
        </ExternalLink>
        ) and monosaccharides (
        <ExternalLink to="https://en.wikipedia.org/wiki/Fructose">
          fructose
        </ExternalLink>
        ), and polyols (
        <ExternalLink to="https://en.wikipedia.org/wiki/Sugar_alcohol">
          sugar alcohols
        </ExternalLink>
        ). Yay, science!
      </>
    ),
  },
  {
    question: "Why should I care about high FODMAP foods?",
    answer: (
      <>
        Basically, if your body doesn&apos;t break down FODMAPs well, they can:
        <ul>
          <li>
            Increase the fluid in your bowels, causing a laxative effect (you
            poop)
          </li>
          <li>Be fermented by bacteria, causing gas and bloating (you toot)</li>
        </ul>
        You can try a low FODMAP diet as an elimination diet, where you give up
        high FODMAP foods for two weeks. Then, you gradually reintroduce high
        FODMAP items to see if your symptoms recur. But, I&apos;m just some
        random internet stranger, so talk to a{" "}
        <ExternalLink to="http://www.eatright.org/find-an-expert">
          dietitian
        </ExternalLink>{" "}
        or doctor before starting any new diet.
      </>
    ),
  },
  {
    question:
      "Isn't there an easier way to figure out if I'm FODMAP intolerant?",
    answer:
      "Yep. You can go to your doctor and request to be tested for lactose intolerance. And there's a fructose malabsorption breath test too!",
  },
  {
    question: "How much FODMAP is too much?",
    answer: (
      <>
        Well, there isn&apos;t a strong consensus on that now, but the proposed
        cut-offs for high FODMAP foods are:
        <ul>
          <li>more than 0.5 g of fructose in excess of glucose per 100 g</li>
          <li>
            more than 3 g of fructose in an average serving regardless of the
            glucose amount
          </li>
          <li>more than 0.2 g of fructans per serving</li>
        </ul>
      </>
    ),
  },
  {
    question: "How do I find out how much fructose or fructans are in my food?",
    answer: (
      <>
        This isn&apos;t on the food label. Luckily,{" "}
        <ExternalLink to="https://www.monashfodmap.com/">
          Monash University
        </ExternalLink>{" "}
        in Australia is researching the FODMAP levels of food. That&apos;s where
        most of this data comes from!
      </>
    ),
  },
];

const AboutPage = () => (
  <Layout>
    <Container>
      <SEO title="About" />
      <Title>About</Title>
      {items.map(({ answer, question }, index) => (
        <Message key={index} className={{ body: "content" }} header={question}>
          {answer}
        </Message>
      ))}
    </Container>
  </Layout>
);

export default AboutPage;
