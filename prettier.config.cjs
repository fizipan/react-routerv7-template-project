/** @type {import("prettier").Config} */
module.exports = {
  endOfLine: "auto",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cva", "clsx"],
}
