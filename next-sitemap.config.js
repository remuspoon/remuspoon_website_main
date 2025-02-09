/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://remuspoon.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/studio*'], // Exclude Sanity Studio routes
} 