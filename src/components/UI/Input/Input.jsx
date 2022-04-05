import classNames from "classnames";
import "./Input.css";

export function Input({ id, label, error, className, ...attrs }) {
  const classes = classNames("input", className, { error });

  return (
    <div className="inputWrapper">
      {label
        && <label className="inputLabel" htmlFor={id}>{label}</label>
      }
      {attrs.required &&
        <span className="inputRequired">Required</span>
      }
      <input name={id} id={id} className={classes} {...attrs} />
      {error
        && <span className="inputError">{error}</span>
      }
    </div>
  );
}

Input.defaultProps = {
  className: "",
  label: '',
  error: ''
};
