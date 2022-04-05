import classNames from "classnames";
import "./Img.css";

export function Image({ src, alt, className, width, height, ...attrs }) {
  const classes = classNames(className);

  if (!src) {
      src = `https://via.placeholder.com/${width}x${height}`
  }

  return <img src={src} alt={alt} className={classes} width={width} height={height} {...attrs}/>;
}

Image.defaultProps = {
    src: '',
    alt: 'image name',
    className: '',
    width: 100,
    height: 100
    
};
