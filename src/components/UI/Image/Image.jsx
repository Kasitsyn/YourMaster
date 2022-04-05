import classNames from "classnames";

export function Image({src, alt, className, width, height, ...attrs}) {

    if(!src) {
        src = `https://via.placeholder.com/${width}x${height}`
    }

    const classes = classNames(
        className,
    )

    return(
        <img src={src} alt={alt} className={classes} width={width} height={height} {...attrs}/>
    );
}