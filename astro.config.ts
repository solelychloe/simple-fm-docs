import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const IS_PRODUCTION = import.meta.env.MODE === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://simple.arciniega.one',
  integrations: [
    starlight({
      title: 'simple-fm',
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://stats.ovy.sh/js/script.js',
            'data-domain': 'simple.arciniega.one',
            defer: true
          }
        }
      ],
      logo: {
        alt: 'Headphones with musical notes coming out of it.',
        src: IS_PRODUCTION ? '/favicon.svg' : '/public/favicon.svg'
      },
      social: {
        discord: 'https://solstice.tf/discord',
        github: 'https://github.com/solelychloe/simple-fm',
        mastodon: 'https://solstice.tf/fediverse',
        twitter: 'https://solstice.tf/twitter'
      },
      customCss: ['@assets/landing.css', '@assets/custom.css'],
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Classes',
          autogenerate: { directory: 'classes', collapsed: true },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/solelychloe/simple-fm-docs/edit/master'
      },
      lastUpdated: true
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
