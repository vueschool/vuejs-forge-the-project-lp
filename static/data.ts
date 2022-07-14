export const landingPageData = {
  name: "Landing Page with Components",
  fields: {
    seo: { title: "Trello Clone", description: "An awesome trello clone" },
    navMenu: {
      linkItems: [{
        label: "Home",
        url: "#hero",
        metadata: {
          id: 'home'
        },
      }, {
        label: "Features",
        url: "#features",
        metadata: {
          id: 'features'
        },
      }],
      actionItems: [{
        label: "Sign Up",
        url: "/signup",
        metadata: {
          id: 'signup'
        },
      }],
      logo: {
        url: "https://cdn.buttercms.com/UF5Qw25gSoKXBDdxXEfQ",
        metadata: {
          alt: "Trello Clone Logo",
          id: 'logo'
        },
        label: "Trello Clone"
      }
    }, 
    body: [
      {
        type: "hero",
        slug: "hero",
        fields: {
          headline: "Awesome Vue.js Forge Trello Clone",
          subheadline:
            "Don't miss this project management tool of the future",
          image:
            "https:\u002F\u002Fcdn.buttercms.com\u002FYynk1SrcQ66EBtXR64wA",
          button_label: "Sign Up Now",
          button_url: "/signup",
          scroll_anchor_id: "home",
        },
      },
      {
        type: "features",
        slug: "features",
        fields: {
          section_name:
            "This page is built using ButterCMS Components",
          headline: "Trello Clone Features",
          subheadline:
            "This page is an example of utilizing Butter Components which allow you to build dynamic landing pages by choosing Components from a Component Library. Reuse and reorder Components in any way you want!",
          features: [
            {
              headline: "Components on this page",
              description:
                "This sample page has four component types: hero, two column with image, features, and testimonials.",
              icon: "https:\u002F\u002Fcdn.buttercms.com\u002FGk1xiLTKuU1xGAEflxgZ",
            },
            {
              headline: "Build your own",
              description:
                "This page is just an example set of Components. You can build your own custom Component library!",
              icon: "https:\u002F\u002Fcdn.buttercms.com\u002F4DPhtQwpTsiUAj38YEcs",
            },
            {
              headline: "Reorder them",
              description:
                "Components are great because you can reorder them from your Butter dashboard",
              icon: "https:\u002F\u002Fcdn.buttercms.com\u002FJrUd07oR6v0OufX7EAwq",
            },
            {
              headline: "Infinite possibilities",
              description:
                "Build carousels, call to actions, testimonials, and much more. There's infinite flexbility.",
              icon: "https:\u002F\u002Fcdn.buttercms.com\u002F7keTS4cTTV75nUBpQQEg",
            },
          ],
        },
      },
      {
        slug: 'about',
        type: "two_column_with_image",
        fields: {
          headline: "ButterCMS is your content backend",
          subheadline:
            "\u003Cp\u003EButter has three core content solutions: \u003Cstrong\u003EPages, Posts, and Collections\u003C\u002Fstrong\u003E. Combine this with advanced capabilities like localization, Write API, multi-site + multi-env and Butter is your centralized content backend no matter how much content you're managing.\u003C\u002Fp\u003E",
          image:
            "https:\u002F\u002Fcdn.buttercms.com\u002FzUXJ8EarSlaCxP0MS1su",
          image_position: "left",
          button_label: "Update this Page in Butter",
          button_url: "https:\u002F\u002Fbuttercms.com\u002Fpages\u002Fabout",
          scroll_anchor_id: "about",
        },
      },
      {
        slug: 'testimonials',
        type: "testimonials",
        fields: {
          headline: "What our customers say",
          subheadline:
            "Vue.js Forge Attendees think this is Awesome!",
          scroll_anchor_id: "testimonials",
          testimonial: [
            {
              quote: "Super Flexible CMS Solution",
              name: "Hampton Catlin",
              title: "Creator of Sass and Haml",
            },
            {
              quote:
                "A breath of fresh air in the CMS world, once you go headless with butter you'll never go back.",
              name: "Bryan MacMillan",
              title: "IT Admin",
            },
            {
              quote:
                "I was able to quickly draft new pages, circulate them to the team, edit them, and then ultimately publish intuitively.",
              name: "Kim Kohatsu",
              title: "CMO",
            },
          ],
        },
      },
    ],
  },
};