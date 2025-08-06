import Image, { ImageProps } from "next/image";

const LaunchUI = (props: Omit<ImageProps, 'src' | 'width' | 'height' | 'alt'>) => (
  <Image
    src="/color.svg"
    width={150}
    height={150}
    alt="Launch UI Logo"
    {...props}
  />
);
export default LaunchUI;
