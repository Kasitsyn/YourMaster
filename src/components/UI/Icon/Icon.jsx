import classNames from "classnames";
import "./Icon.css";

export function Icon({ name, onClick, className, size, disabled, ...attrs }) {
  const classes = classNames(
    "fa",
    `fa-${name}`,
    className,
    { func: onClick },
    { disabled }
  );
  const elemSize = size ? { fontSize: `${size}rem` } : null;

  return (
    <i
      {...attrs}
      style={elemSize}
      className={classes}
      onClick={disabled ? null : onClick}
    />
  );
}

Icon.defaultProps = {
  name: "",
  onClick: null,
  disabled: false,
  size: null,
  className: "",
};
