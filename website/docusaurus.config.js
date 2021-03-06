module.exports = {
  title: 'Redux',
  tagline: '자바스크립트 앱을 위한 예측 가능한 상태 컨테이너',
  url: 'https://ko.redux.js.org',
  baseUrl: '/',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'deminoth',
  projectName: 'redux',
  themeConfig: {
    disableDarkMode: false,
    prism: {
      theme: require('./src/js/monokaiTheme.js')
    },
    navbar: {
      title: 'Redux',
      image: 'img/redux-logo-landscape.png',
      logo: {
        alt: 'Redux Logo',
        src: 'img/redux.svg'
      },
      links: [
        {
          label: '시작하기',
          to: 'introduction/getting-started',
          position: 'right'
        },
        { label: 'API', to: 'api/api-reference', position: 'right' },
        { label: 'FAQ', to: 'faq', position: 'right' },
        {
          label: 'GitHub',
          href: 'https://github.com/deminoth/redux',
          position: 'right'
        },
        {
          label: 'Need help?',
          to: 'introduction/getting-started#help-and-discussion',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '시작하기',
              to: 'introduction/getting-started'
            },
            {
              label: 'FAQ',
              to: 'faq'
            },
            {
              label: '강좌',
              to: 'basics/basic-tutorial'
            },
            {
              label: 'API 레퍼런스',
              to: 'api/api-reference'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'http://stackoverflow.com/questions/tagged/redux'
            },
            {
              label: 'Feedback',
              to: 'introduction/getting-started#help-and-discussion'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/deminoth/redux'
            },
            {
              html: `
                <a href="https://www.netlify.com">
                  <img
                    src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
                    alt="Deploys by Netlify"
                  />
                </a>
              `
            }
          ]
        }
      ],
      logo: {
        alt: 'Redux Logo',
        src: 'img/redux.svg',
        href: 'https://redux.js.org/'
      },
      copyright: `Copyright © 2015–${new Date().getFullYear()} Dan Abramov and the Redux documentation authors.`
    },
    algolia: {
      apiKey: '518c6e3c629811d8daa1d21dc8bcfa37',
      indexName: 'redux',
      algoliaOptions: {}
    },
    googleAnalytics: {
      trackingID: 'UA-130598673-1'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs_kr',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
