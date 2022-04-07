import React from "react";
import classNames from "classnames";

import "./Badge.css";

export function Badge({ value, circle, className, inline, outer, ...attrs }) {

    const text = typeof value === 'string' || value instanceof String;

    const classes = classNames(
        'badge',
        { circle },
        className,
        { inline },
        { outer },
        { text },
        { success: attrs.success }
    );

    return (
        <span className={classes}>
            { value }
        </span>
    );
}