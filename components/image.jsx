import Image from "next/image";

const ThemedImage = ({ src, srcLight, srcDark, alt, ...props }) => {
  return (
    <figure>
      <Image
        src={src || srcLight}
        alt={alt}
        {...props}
        className="rounded-md border border-bd-color mt-6 dark:hidden"
      />
      <Image
        src={srcDark || src || srcLight}
        alt={alt}
        {...props}
        className="hidden rounded-md border border-bd-color mt-6 dark:block"
      />
    </figure>
  );
};

export default ThemedImage;
