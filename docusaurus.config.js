// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZORP',
  tagline: 'Technology Infrastrcture for Physical Work',
  url: 'https://www.zorp.one',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ZORP', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          sidebarCollapsible: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Zorp',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://www.zorp.one/',
            label: 'Website',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'Getting Started/What is Zorp',
            position: 'right',
            label: 'Tutorial',
          },
          {
            href: 'https://operationsblog.zorp.one/?utm_source=zorp_homepage&utm_medium=website&utm_campaign=header',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://www.youtube.com/channel/UCNDY7jiOh7uOJWWRDnLE9Vw',
            label: 'YouTube',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
