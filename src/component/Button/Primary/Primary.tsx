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

const BtnPrimary = (props: ButtonProps) => {
  const { className, onClick, disabled, children, style } = props;

  return (
    <div className={className || Styling.primary}>
      <Button type="link" onClick={onClick} disabled={disabled} style={style}>
        {children || "Button"}
      </Button>
    </div>
  );
};

export default BtnPrimary;
