import { Button } from "antd";
import React, { CSSProperties, ReactNode } from "react";
import Styling from "../ButtonStyle.module.scss";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}

const BtnSecondary = (props: ButtonProps) => {
  const { className, onClick, disabled, children, style } = props;

  return (
    <div className={className || Styling.secondary}>
      <Button onClick={onClick} disabled={disabled} style={style}>
        {children || "Button"}
      </Button>
    </div>
  );
};

export default BtnSecondary;
