import React, {PropsWithChildren, ReactNode} from "react"
import clsx from "clsx";
import {motion, Variants} from "framer-motion";
import {ArrowNarrowRightIcon} from "@heroicons/react/outline";

interface Props {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children: ReactNode | ReactNode[];
}

const sizes = {
  xs: "h-8 px-3 text-md",
  sm: "h-8 px-3 text-md",
  md: "h-10 px-5 text-lg",
  lg: "h-12 px-6 text-lg",
}

const common = "disabled:opacity-60 ring-offset-2"

const variants = {
  primary: `bg-primary text-white active:bg-transparent hover:bg-primary ring-primary ${common}`,
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
        ${className}
        `, {
          "w-full": fullWidth,
        }
      )}
    >
      <motion.span
        className={clsx('flex items-center pointer-events-none', {
          'opacity-0': loading,
        })}>
        {children}
      </motion.span>
      <motion.div
        className="ml-2"
      >
        <ArrowNarrowRightIcon className="w-6" strokeWidth={1} />
      </motion.div>
    </button>
  )
})


const arrowVariants: Variants = {
  hover: {
    opacity: 1,
    x: 15,
  },
  initial: {
    opacity: 0,
    x: 0,
  }
}

const textVariants: Variants = {
  hover: {
    x: -15,
  },
  initial: {
    x: 0,
  }
}

const ArrowButton = (props: PropsWithChildren<Props & JSX.IntrinsicElements["button"]>) => {
  const {
    variant = "primary",
    size = "md",
    loading,
    disabled,
    fullWidth,
    children,
    className = "",
  } = props;
  return (
    <motion.button
      whileHover="hover"
      initial="initial"
      disabled={disabled || loading}
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
        ${className}
        `, {
          "w-full": fullWidth,
        }
      )}
    >
      <motion.span
        className={clsx('flex items-center pointer-events-none', {
          'opacity-0': loading,
        })}
        variants={textVariants}
      >
        {children}
      </motion.span>
      <motion.span
        variants={arrowVariants}
        className="-ml-6"
      >
        <ArrowNarrowRightIcon className="w-6" strokeWidth={1} />
      </motion.span>
    </motion.button>
  )
}

export {Button, ArrowButton}
