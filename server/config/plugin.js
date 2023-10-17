module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_5jxtmCFQhCHhwOEqG4zPuGtN8jMA/OWp2eoZDB8",
      apiToken: "NKWPahKMnYXogPYyobsu7Ji6",
      appFilter: "e-commerce-with-strapi-server",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
 