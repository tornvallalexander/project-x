import React, {ReactNode} from "react"
import clsx from "clsx";

interface Props {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children: ReactNode | ReactNode[];
}

const sizes = {
  xs: "h-8 px-3 text-sm",
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-5 text-md",
  lg: "h-12 px-6 text-md",
}

const common = "disabled:opacity-60 ring-offset-2"

const variants = {
  primary: `bg-primary text-white active:bg-primary-900 hover:bg-primary ring-primary ${common}`,
  secondary: `bg-primary-50 text-primary hover:bg-primary-100 active:bg-primary-50 ring-primary ${common}`,
}

const Button = React.forwardRef<
  HTMLButtonElement,
  Props & JSX.IntrinsicElements["button"]
  >((props, ref) => {
  const {
    variant = "primary",
    size = "md",
    loading,
    disabled,
    fullWidth,
    children,
    className = "",
    ...buttonProps
  } = props;
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      {...buttonProps}
      className={clsx(
        `
        inline-flex
        justify-center
        items-center
        font-medium
        outline-none
        focus:outline-none
        transition-all
        transform
        active:scale-[0.98]
        select-none
        disabled:cursor-not-allowed
        transition-colors
        whitespace-nowrap
        flex-shrink-0
        tracking-tight
        ${sizes[size]}
        ${variants[variant]}
        `, {
          "w-full": fullWidth,
          [className]: className,
        }
      )}
    >
        <span
          className={clsx('flex items-center pointer-events-none', {
            'opacity-0': loading,
          })}>
          {loading && (
            <span className="-ml-2 mr-2 items-center"></span>
          )}
          {children}
        </span>
    </button>
  )
})

export {Button}
