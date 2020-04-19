import React from "react";
import Timeline from "./";
import { Centered } from "../../../utils";

export default {
  component: Timeline,
  title: "Widget/Timeline",
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Centered>
    <Timeline
      data={[
        {
          title: "Event 1",
          date: "Date 1",
          desc: "Description supports markdown!",
        },
        {
          title: "Event 2",
          date: "Date 2",
          desc: "Description supports markdown!",
        },
        {
          title: "Event 3",
          date: "Date 3",
          desc: "Description supports markdown!",
        },
      ]}
    />
  </Centered>
);
