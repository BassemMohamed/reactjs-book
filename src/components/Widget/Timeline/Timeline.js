import React from "react";
import styled from "styled-components";
import css from "./Timeline.style";
import TimelineItem from "./TimelineItem";

/*
  Timeline

  Props:
    * data
      * title
      * date
      * desc
*/
const Timeline = (props) => {
  const { data, classname } = props;

  return (
    <>
      {data && (
        <div className={classname}>
          {data.map((item, i) => (
            <TimelineItem
              key={i}
              date={item.date}
              desc={item.desc}
              title={item.title}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default styled(Timeline)`
  ${css}
`;
