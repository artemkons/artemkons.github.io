import NEON_STYLE from "../styles";

const Text = {
  baseStyle: {
    color: "#C4C4C4",
    fontSize: ["2xl", "4xl"],
  },
  variants: {
    neon: {
      fontSize: "2xl",
      ...NEON_STYLE,
    },
  },
};

export default Text;
