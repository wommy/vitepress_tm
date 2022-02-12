import { defineConfig } from 'vitepress';

export default defineConfig({
	lang: 'en-US',
	title: 'wommy.io',
	description: 'Just playing around',

	themeConfig: {
		nav: [
			{
				text: 'home',
				link: '/',
			},
			{
				text: 'todo',
				link: '/todo',
			},
			{
				text: 'contact',
				link: '/contact',
			}
		]
	}
})
