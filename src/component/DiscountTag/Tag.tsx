import React from "react";
import Text from "../Typography/Text";
import TagStyle from "./TagStyle.module.scss";

interface TagProps {
  isFloating: boolean;
}

const Tag = (props: TagProps) => {
  const { isFloating } = props;
  return (
    <div className={isFloating ? TagStyle.tag : TagStyle.tagNonFLoat}>
      <Text size={25} color="white" bold>
        -10%
      </Text>
    </div>
  );
};

export default Tag;
