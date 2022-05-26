import {Variants} from "framer-motion";

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

export {
  arrowVariants,
  textVariants,
}