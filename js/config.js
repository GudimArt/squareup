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
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/',
				category: 'social'
			},
			{
				site: 'VK',
				icon: 'vk',
				url: 'https://vk.com/feed',
				category: 'social'
			},
			{
				site: 'Telegram',
				icon: 'telegram',
				url: 'https://web.telegram.org/k/',
				category: 'social'
			},
			{
				site: 'Whatsapp',
				icon: 'whatsapp',
				url: 'https://web.whatsapp.com/',
				category: 'social'
			},
			{
				site: 'Discord',
				icon: 'discord',
				url: 'https://discord.com/',
				category: 'social'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/',
				category: 'media'
			},
			{
				site: 'Twitch',
				icon: 'twitch',
				url: 'https://twitch.tv/',
				category: 'media'
			},
			{
				site: 'Google Drive',
				icon: 'gdrive',
				url: 'https://drive.google.com/',
				category: 'cloud'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'development'
			},
			{
				site: 'Gitlab',
				icon: 'gitlab',
				url: 'https://gitlab.com/',
				category: 'development'
			},
			{
				site: 'Stackoverflow',
				icon: 'stackoverflow',
				url: 'https://stackoverflow.com/',
				category: 'development'
			},
			{
				site: 'Figma',
				icon: 'figma',
				url: 'https://figma.com/',
				category: 'design'
			},
			{
				site: 'Itil',
				icon: 'itil',
				url: 'https://www.itil.su/index.php?page=app&tab=app&app_id=51585',
				category: 'work'
			},
			{
				site: 'Docs SP',
				icon: 'docssp',
				url: 'https://docs.sp.pp.ru/Auth.aspx?refererurl=https%3a%2f%2fdocs.sp.pp.ru%2fProducts%2fFiles%2fDefault.aspx',
				category: 'work'
			},
			{
				site: 'Cloud SP',
				icon: 'cloudsp',
				url: 'https://cloud.sp.pp.ru/apps/files/?dir=/&fileid=5461260',
				category: 'work'
			},
			{
				site: 'Mail SP',
				icon: 'mailsp',
				url: 'http://relay.sib-paritet.ru/?_task=mail&_mbox=INBOX',
				category: 'work'
			},
		];

		return webSites;
	}

	getPanelSites() {
		// Panel
		// A list of websites that will be generated and put on the Panel
		const panelSites = [
			{
				site: 'VK',
				icon: 'vk',
				url: 'https://vk.com/feed',
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/',
				category: 'media'
			},
			{
				site: 'Telegram',
				icon: 'telegram',
				url: 'https://web.telegram.org/k/',
			},
			{
				site: 'Whatsapp',
				icon: 'whatsapp',
				url: 'https://web.whatsapp.com/',
			},
		];

		return panelSites;
	}
}
