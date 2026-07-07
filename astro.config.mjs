// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	base: '/interactivos2-2026-20',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	},
	integrations: [
		starlight({
			title: 'Sistemas Físicos Interactivos 2',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Español', lang: 'es-ES' },
				// en: { label: 'English', lang: 'en-US' },
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Introducción',
					items: [
						{ label: '¿De qué se trata este curso?', slug: 'units/intro' },
					],
				},
				{
					label: 'Fases',
					items: [
						{ label: 'Investigación', slug: 'phases/investigacion' },
						{ label: 'Creación', slug: 'phases/creacion' },
						{ label: 'Performance', slug: 'phases/performance' },
						{ label: 'Reflexión', slug: 'phases/reflexion' },
					],
				},
				{
					label: 'Recursos',
					items: [
						{ label: 'Recursos interesantes', slug: 'units/resources' },
					],
				},
			],
		}),
	],
	site: 'https://jfUPB.github.io',
});
