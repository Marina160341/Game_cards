const APP_CONTAINER = document.querySelector('.app');
window.application = {
	blocks: {},
	screens: {},
	timers: [],
	renderScreen: function(screenName)
	{
		if (window.application.screens[screenName])
		{
			//Очищаем контейнер перед отрисовкой экрана
			APP_CONTAINER.innerHTML = '';
			window.application.screens[screenName]();
		}
		else
		{
			console.warn(`Блока "${screenName}" не существует`);
		}
	},
	renderBlock: function(blockName, container)
	{
		if (window.application.blocks[blockName])
		{
			window.application.blocks[blockName](container);
		}
		else
		{
			console.warn(`Блока "${blockName}" не существует!`);
		}
	},
}