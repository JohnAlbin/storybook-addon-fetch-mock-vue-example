export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  fetchMock: {
    debug: true,
    catchAllURLs: ["https://swapi.dev"],
  },
};
