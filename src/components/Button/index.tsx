import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  className?: string;
  onClick?: VoidFunction;
  children?: ReactNode | string;
  isDisabled?: boolean;
}

const Button: FC<Props> = ({
  children,
  className,
  onClick,
  isDisabled,
  ...props
}) => {
  return (
    <button
      className={cn("cursor-pointer", className)}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
