class Config {
	constructor() { }

	getThemeMode() {
		const themeModes = {
			'light': {
				name: 'Light',
				icon: 'light-mode'
			},
			'dark': {
				name: 'Dark',
				icon: 'dark-mode'
			},
			'auto': {
				name: 'Auto',
				icon: 'auto-mode',
				lightHour: '7',
				darkHour: '18'
			}
		};

		return themeModes;
	}

	getFontFamily() {
		const fontFamilies = {
			'monospace': 'Fira Code Retina, Hack, Ubuntu Mono, Monaco, Lucida Console, monospace',
			'sans-serif': 'Inter, SF Pro Text, Roboto, Open Sans, sans-serif',
			'serif': 'serif'
		};

		return fontFamilies;
	}

	getQuickSearchData() {
		const quickSearchData = {
			'r/': {
				urlPrefix: 'https://reddit.com/r/'
			},
			'w/': {
				urlPrefix: 'https://wikipedia.org/wiki/'
			},
			'u/': {
				urlPrefix: 'https://unsplash.com/s/photos/'
			},
			'a/': {
				urlPrefix: 'https://amazon.com/s?k='
			},
			'e/': {
				urlPrefix: 'https://ebay.com/sch/?_nkw='
			},
			'y/': {
				urlPrefix: 'https://youtube.com/results?search_query='
			},
			'n/': {
				urlPrefix: 'https://nhentai.net/g/'
			},
			'g/': {
				urlPrefix: 'https://github.com/search?q='
			}
		};

		return quickSearchData;
	}

	getSearchEngines() {

		const searchEngines = {
			'startpage': {
				name: 'Startpage',
				prefix: 'https://www.startpage.com/do/dsearch?query=',
				icon: 'startpage'
			},
			'google': {
				name: 'Google',
				prefix: 'https://www.google.com/search?q=',
				icon: 'google'
			},
			'qwant': {
				name: 'Qwant',
				prefix: 'https://www.qwant.com/?q=',
				icon: 'qwant'
			},
			'ecosia': {
				name: 'Ecosia',
				prefix: 'https://www.ecosia.org/search?q=',
				icon: 'ecosia'
			},
			'duckduckgo': {
				name: 'Duckduckgo',
				prefix: 'https://duckduckgo.com/?q=',
				icon: 'duckduckgo'
			},
			'yahoo': {
				name: 'Yahoo',
				prefix: 'https://search.yahoo.com/search?p=',
				icon: 'yahoo'
			},
			'bing': {
				name: 'Bing',
				prefix: 'https://www.bing.com/search?q=',
				icon: 'bing'
			}
		};

		return searchEngines;
	}

	getWebSites() {
		// Web menu
		// A list of websites that will be generated and put on the web menu
		const webSites = [
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/',
				category: 'social'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'development'
			},
			{
				site: 'Gmail',
				icon: 'gmail',
				url: 'https://mail.google.com/',
				category: 'mail'
			},
			{
				site: 'Mail Ru',
				icon: 'mailru',
				url: 'https://mail.ru/',
				category: 'mail'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/',
				category: 'media'
			},
			{
				site: 'Google Drive',
				icon: 'gdrive',
				url: 'https://drive.google.com/',
				category: 'cloud'
			},
			{
				site: 'Gitlab',
				icon: 'gitlab',
				url: 'https://gitlab.com/',
				category: 'development'
			},
			{
				site: 'Deviantart',
				icon: 'deviantart',
				url: 'https://deviantart.com/',
				category: 'design'
			},
			{
				site: 'Twitch',
				icon: 'twitch',
				url: 'https://twitch.tv/',
				category: 'media'
			},
			{
				site: 'Yahoo',
				icon: 'yahoo',
				url: 'https://mail.yahoo.com/',
				category: 'search engine'
			},
			{
				site: 'Discord',
				icon: 'discord',
				url: 'https://discord.com/',
				category: 'social'
			},
			{
				site: 'Figma',
				icon: 'figma',
				url: 'https://figma.com/',
				category: 'design'
			},
			{
				site: 'Stackoverflow',
				icon: 'stackoverflow',
				url: 'https://stackoverflow.com/',
				category: 'development'
			},
		];

		return webSites;
	}

	getPanelSites() {
		// Panel
		// A list of websites that will be generated and put on the Panel
		const panelSites = [
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/'
			},
			{
				site: 'Facebook',
				icon: 'facebook',
				url: 'https://facebook.com/'
			},
			{
				site: 'Gmail',
				icon: 'gmail',
				url: 'https://mail.google.com/'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/'
			},
			{
				site: 'GDrive',
				icon: 'gdrive',
				url: 'https://drive.google.com/'
			},
			{
				site: 'Twitter',
				icon: 'twitter',
				url: 'https://twitter.com/'
			},
			{
				site: 'Material.io',
				icon: 'materialio',
				url: 'https://material.io/'
			}
		];

		return panelSites;
	}
}
