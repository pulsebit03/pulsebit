/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pulsebit.tech',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*']
      }
    ]
  },
  transform: async (config, path) => {
    // Custom priority for specific pages
    const priorities = {
      '/': 1.0,
      '/about': 0.8,
      '/contact': 0.8,
      '/tech': 0.7,
      '/privacy': 0.5,
      '/terms': 0.5
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString()
    };
  }
}