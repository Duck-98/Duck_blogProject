const URL = "http://localhost:3000";

const responsiveView = {
  HDPC: "1536px",
  PC: "1280px",
  NOTEBOOK: "1024px",
  TABLET: "768px",
  MOBILE: "640px",
};

export const lightTheme = {
  MOBILE: `(max-width: ${responsiveView.MOBILE})`,
  TABLET: `(max-width: ${responsiveView.TABLET})`,
  PC: `(max-width: ${responsiveView.PC})`,
  HDPC: `(max-width: ${responsiveView.HDPC})`,
  BACKGROUND_COLOR: "#333333",
  LINE_WHITE_COLOR: "#fff",
  CURSOR_COLOR: "#515ce6",
  BUTTON_COLOR: "#0077ed",
  BUTTON_COLOR_HOVER: "#3C97F1",
  GRAY_COLOR: "#d6d6d6",
};

export default lightTheme;
