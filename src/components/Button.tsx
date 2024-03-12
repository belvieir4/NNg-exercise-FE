import classNames from "classnames";
import { ReactElement, DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "filled" | "link";
  children: string;
  icon?: ReactElement;
};

export default function Button({
  variant = "filled",
  children,
  icon,
  ...props
}: ButtonProps) {
  const defaultClasses =
    "py-2 rounded-lg flex items-center gap-2 justify-center m-0.5 focus:m-0 disabled:opacity-40";
  const variantClasses = {
    filled:
      "bg-primary-60 text-neutral-100 px-4 hover:bg-primary-40 focus:bg-primary-40 font-bold leading-8 text-2xl focus:border-2 focus:border-primary-20 focus:outline-none",
    link: "bg-transparent text-blue-50 px-2 hover:underline text-lg leading-6 focus:border-2 focus:border-blue-50 focus:outline-none",
  };
  return (
    <button
      {...props}
      className={classNames(props.className, defaultClasses, {
        [variantClasses.filled]: variant === "filled",
        [variantClasses.link]: variant === "link",
      })}
    >
      {icon}
      {children}
    </button>
  );
}
