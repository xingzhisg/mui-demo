const dcmargin_config = {
  prod_apps: [
    {
      title: "Review Margin",
      description:
        "Reivew, configure, approve & publish DC margin computed in Prod",
      image: "/static/img/review-margin.webp",
      url: "/dc-margin/computed-margins",
    },/*
    {
      title: "Approve Margin",
      description: "Approve margin review requests. Jira Login required.",
      image: "/static/img/approve-margin.png",
      url: "/dc-margin/approve-margin",
    },
    {
      title: "Publish Margin",
      description: "Trigger publication of margin to downstream systems",
      image: "/static/img/publish-margin.webp",
      url: "/dc-margin/publish-margin",
    },*/
    {
      title: "Combined Commodity",
      description: "Configure new Combined Commodity. View and edit Combined Commodity attributes",
      image: "/static/img/placeholder.webp",
      url: "/dc-margin/combined-commodity",
    },
    {
      title: "Derivate Product",
      description: "Configure new products. View and edit derivate product attributes",
      image: "/static/img/product_attrs.webp",
      url: "/dc-margin/products",
    },
    {
      title: "Margin Tiering",
      description: "View and configure margin tiering for instrument series",
      image: "/static/img/margin-tier.jpg",
      url: "/dc-margin/tiering",
    },
    {
      title: "Foot Notes",
      description: "View and configure special handlings for margins such delivery AMR etc",
      image: "/static/img/placeholder.webp",
      url: "/dc-margin/footnotes",
    },
    {
      title: "Historical Margin",
      description: "View current and historical margin settings (from ATLAS)",
      image: "/static/img/placeholder.webp",
      url: "/dc-margin/current",
    },
    {
      title: "Margin Backtesting",
      description: "Configure and check margin backtesting results",
      image: "/static/img/placeholder.webp",
      url: "/dc-margin/products",
    },
  ],
  dev_apps: [
    {
      title: "User Margin Tuning",
      description: "Fine tune the user margin before actual marign review",
      image: "/static/img/placeholder.webp",
      url: "/dc-margin/margin-tune",
    },
    {
      title: "Hypothetical Margin",
      description: "Run margin calculations with hypothetical assumptions (price etc).",
      image: "/static/img/placeholder.webp",
      url: "/dc-margin/hypothetical-margin",
    },
  ],
};

export default dcmargin_config;
