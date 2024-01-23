import createExampleApp from "example_app";

export default {
  routes: async (defineRoutes) => {
    const exampleAppRoutes = createExampleApp(defineRoutes);
    return exampleAppRoutes;
  },
};
