// jshint esversion: 8

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Parse Utils by Shake",
    tagline: "Tools for parsing stuff with kotlin",
    url: "https://shakelang.github.io",
    baseUrl: "/parseutils/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "shakelang", // Usually your GitHub org/user name.
    projectName: "parseutils", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/shakelang/parseutils/edit/master/docs/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/shakelang/parseutils/edit/master/docs/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Parse Utils",
          logo: {
            alt: "Parse Utils logo",
            src: "img/logo.svg",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Tutorial",
            },
            { to: "/blog", label: "Blog", position: "left" },
            {
              href: "https://github.com/shakelang/parseutils",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                },
                {
                  label: "Dokka",
                  to: "pathname://dokka",
                },
              ],
            },
            {
              title: "GitHub",
              items: [
                {
                  label: "Repository",
                  href: "https://github.com/shakelang/parseutils",
                },
                {
                  label: "Issues",
                  href: "https://github.com/shakelang/parseutils/issues",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} by Shake Team. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
    plugins: ["docusaurus-plugin-sass"],
  }
);
