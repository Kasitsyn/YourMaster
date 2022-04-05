import classNames from "classnames";
import "./Button.css";
export function Button({
  children,
  onClick,
  className,
  disabled,
  active,
  ...attrs
}) {
  const classes = classNames("btn", className, { active });

  return (
    <button
      {...attrs}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: "Default button",
  onClick: () => {},
  disabled: false,
  className: "",
  active: false
};
