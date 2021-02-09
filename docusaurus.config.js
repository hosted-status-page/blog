module.exports = {
    title: 'Hosted Status Page',
    tagline: 'Blog',
    url: 'https://blog.hostedstatus.page',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'hosted-status-page', // Usually your GitHub org/user name.
    projectName: 'blog', // Usually your repo name.
    scripts: [
        {src: 'https://traffic.hostedstatus.page/js/index.js', async: true, defer: true, 'data-domain': 'blog.hostedstatus.page'},
        {src: 'https://twemoji.maxcdn.com/v/latest/twemoji.min.js', async: true, defer: true},
    ],
    themeConfig: {
        navbar: {
            title: 'Hosted Status Page Blog',
            logo: {
                alt: 'HSP Logo',
                src: 'img/hsplogo.svg',
            },
            items: [
                {
                    to: 'https://help.hostedstatus.page',
                    label: '🆘 Help and Support',
                    position: 'left',
                },
                {
                    href: 'https://github.com/hosted-status-page',
                    label: '🖥 HSP on GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Help and Support',
                            to: 'https://help.hostedstatus.page',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © 2020-${new Date().getFullYear()} <a href="https://hostedstatus.page">Hosted Status Page</a>. All rights reserved.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    path: './blog',
                    routeBasePath: '/', // Set this value to '/'.
                    blogTitle: 'Hosted Status Page Blog!',
                    blogDescription: 'We write both non-technical and technical stuff here :)',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
