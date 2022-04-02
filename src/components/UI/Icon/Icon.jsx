import classNames from "classnames";
import "./Icon.css";

export function Icon({ name, onClick, className, size, disabled, ...attrs }) {
  const classes = classNames("fa", `fa-${name}`, className, {func: onClick}, {disabled});
  const elemSize = size ? {fontSize: `${size}rem`} : null
  
  return (
    <i {...attrs} style={elemSize} className={classes} disabled={disabled ? null : onClick} onClick={onClick} />
  );
}
