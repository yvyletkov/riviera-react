require('@babel/register')({
    extends: './.babelrc',
})

const router = require('./router').default;
const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(router)
        .build('https://rivierasunrise.ru')
        .save('./sitemap.xml', '/public/')
);
