import Luke from "./Luke.vue";

export default {
  title: "Components/Luke",
  component: Luke,
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
};
