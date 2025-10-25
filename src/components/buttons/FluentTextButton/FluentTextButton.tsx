import {
  Button,
  Tooltip,
  tokens,
} from "@fluentui/react-components";
import type { FunctionComponent, CSSProperties } from "react";

interface FluentTextButtonProps {
  text: string; // ✅ the button label
  label?: string; // optional tooltip text
  onClick?: () => void;
  appearance?: "transparent" | "primary" | "secondary" | "subtle";
  width?: number | string;
  height?: number | string;
  fontSize?: number;
  transform?: string;
}

const FluentTextButton: FunctionComponent<FluentTextButtonProps> = ({
  text,
  label,
  onClick,
  appearance = "transparent",
  width = "auto",
  height = 32,
  fontSize = 14,
  transform,
}) => {
  const buttonStyle: CSSProperties = {
    width,
    height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: "transparent",
    color: tokens.colorNeutralForeground1,
    fontSize,
    fontWeight: 500,
    transform: transform ?? "unset",
    cursor: "pointer",
  };

  return (
    <Tooltip content={label ?? text} relationship="label">
      <Button
        onClick={onClick}
        appearance={appearance}
        aria-label={label ?? text}
        style={buttonStyle}
      >
        {text}
      </Button>
    </Tooltip>
  );
};

export default FluentTextButton;
