import React, {createElement} from "react"
import clsx from "clsx";

interface Props {
  as?: React.ElementType;
  className?: string;
  size?: keyof typeof sizes;
  children: React.ReactNode | React.ReactNode[]
}

const sizes = {
  h1: "leading-tight text-4xl md:text-5xl",
  h2: "leading-tight text-3xl md:text-4xl",
  h3: "text-2xl font-medium md:text-3xl",
  h4: "text-xl font-medium md:text-2xl",
  h5: "text-lg font-medium md:text-xl leading-tight md:leading-normal",
  h6: "text-lg font-medium leading-tight md:leading-normal",
  none: "",
}

function Title({ as, size = "h2", className = "font-medium", ...rest }: Props) {
  const fallback = size === "none" ? "h1" : size
  const Tag = as ?? fallback
  return (
    <Tag
      className={clsx(sizes[size], className)}
      {...rest}
    />
  )
}

function HX({children, as, ...props}: Props) {
  return <Title as={as} {...props} children={children} size="none" />
}

function H1({children, ...props}: Props) {
  return <Title {...props} children={children} size="h1" />
}

function H2({children, ...props}: Props) {
  return <Title {...props} children={children} size="h2" />
}

function H3({children, ...props}: Props) {
  return <Title {...props} children={children} size="h3" />
}

function H4({children, ...props}: Props) {
  return <Title {...props} children={children} size="h4" />
}

function H5({children, ...props}: Props) {
  return <Title {...props} children={children} size="h5" />
}

function H6({children, ...props}: Props) {
  return <Title {...props} children={children} size="h6" />
}

interface ParagraphProps {
  className?: string;
  prose?: boolean;
  as?: React.ElementType;
  children: React.ReactNode;
}

function Paragraph({
  className = "",
  prose = true,
  as = "p",
  ...rest
}: ParagraphProps) {
  return createElement(as, {
    className: clsx("max-w-full font-medium leading-tight text-lg text-soft", className, {
      "prose prose-light": prose,
    }),
    ...rest
  })
}

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HX,
  Paragraph
}