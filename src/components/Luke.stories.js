import Luke from "./Luke.vue";

export default {
  title: "Components/Luke",
  component: Luke,
};

const swapiMock = {
  matcher: {
    name: "swapi",
    url: "https://swapi.dev/api/people/1",
    method: "GET",
  },
  response: {
    body: {
      name: "Mock Skywalker",
    },
  },
  options: {
    delay: 2000,
  },
};

export const Default = {
  name: "Luke",
  args: {},
  decorators: [
    (story) => ({
      components: { story },
      template: "<Suspense><story /></Suspense>",
    }),
  ],
  parameters: {
    fetchMock: {
      mocks: [swapiMock],
    },
  },
};
