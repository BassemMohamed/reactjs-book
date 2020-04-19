import React from "react";
import Quote, { QUOTE_ALIGNMENT } from "./Quote/Quote";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Padded, Centered } from "../../utils";

export default {
  title: "Typography",
};

export const heading1 = () => (
  <Padded>
    <Heading type={1}>Sample H1</Heading>
    <Paragraph>
      Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts. Separated they live in
      Bookmarksgrove right at the coast of the Semantics, a large language
      ocean. A small river named Duden flows by their place and supplies it with
      the necessary regelialia.
    </Paragraph>
  </Padded>
);

export const heading2 = () => (
  <Padded>
    <Heading type={2}>Sample H2</Heading>
    <Paragraph>
      Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts. Separated they live in
      Bookmarksgrove right at the coast of the Semantics, a large language
      ocean. A small river named Duden flows by their place and supplies it with
      the necessary regelialia.
    </Paragraph>
  </Padded>
);

export const heading3 = () => (
  <Padded>
    <Heading type={3}>Sample H3</Heading>
    <Paragraph>
      Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts. Separated they live in
      Bookmarksgrove right at the coast of the Semantics, a large language
      ocean. A small river named Duden flows by their place and supplies it with
      the necessary regelialia.
    </Paragraph>
  </Padded>
);

export const quotes = () => (
  <Centered>
    <Quote
      text="We are what we repeatedly do. Excellence then is not an act but a habit"
      align={QUOTE_ALIGNMENT.LEFT}
      author={{
        name: "Aristotle",
        link: "https://en.wikipedia.org/wiki/Aristotle",
      }}
    />
    <Quote
      text="Real difficulties can be overcome. It is only the imaginary ones that are unconquerable"
      align={QUOTE_ALIGNMENT.RIGHT}
      author={{
        name: "Theodore Newton Vail",
        link: "https://en.wikipedia.org/wiki/Theodore_Newton_Vail",
      }}
    />
  </Centered>
);
