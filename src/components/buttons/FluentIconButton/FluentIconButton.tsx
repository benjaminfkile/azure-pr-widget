import {
  Button,
  Tooltip,
  tokens,
} from "@fluentui/react-components";
import type { FunctionComponent, CSSProperties, ComponentType } from "react";

interface FluentIconButtonProps {
  icon: ComponentType;
  label?: string;
  onClick?: () => void;
  size?: number;
  appearance?: "transparent" | "primary" | "secondary" | "subtle";
  transform?: string;
}

const FluentIconButton: FunctionComponent<FluentIconButtonProps> = ({
  icon: Icon,
  label,
  onClick,
  size = 32,
  appearance = "transparent",
  transform,
}) => {

  const iconEl = <Icon />;

  const buttonStyle: CSSProperties = {
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: transform ?? "unset",
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: "transparent",
    color: tokens.colorNeutralForeground1,
  };

  return (
    <Tooltip content={label ?? ""} relationship="label">
      <Button
        onClick={onClick}
        appearance={appearance}
        aria-label={label}
        style={buttonStyle}
        icon={{ children: iconEl }}
      />
    </Tooltip>
  );
};

export default FluentIconButton;
