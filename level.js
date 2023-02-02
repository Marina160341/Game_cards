function renderLevelBlock(container)
{
	const wrapBtnRock = document.createElement('div');
	wrapBtnRock.classList.add('level-btn');
	const btn1 = document.createElement('button');
	btn1.textContent = '1';
	btn1.classList.add('one');

	wrapBtnRock.appendChild(btn1);

	const btn2 = document.createElement('button');
	btn2.textContent = '2';
	btn2.classList.add('two');

	wrapBtnRock.appendChild(btn2);

	const btn3 = document.createElement('button');
	btn3.textContent = '3';
	btn3.classList.add('three');

	wrapBtnRock.appendChild(btn3);

	container.appendChild(wrapBtnRock);

	const wrapBtnScissors = document.createElement('div');
	wrapBtnScissors.classList.add('start-btn');
	const btnStart = document.createElement('button');
	btnStart.textContent = 'Старт';
	btnStart.classList.add('start_button');
	wrapBtnScissors.appendChild(btnStart);
	container.appendChild(wrapBtnScissors);
}
window.application.blocks['level'] = renderLevelBlock;

function renderLevelScreen()
{
	const h1 = document.createElement('h1');
	h1.textContent = 'Выбери сложность';
	h1.classList.add('text');
	const div = document.createElement('div');
	div.classList.add('board');
	window.application.renderBlock('level', div);
	APP_CONTAINER.appendChild(h1);
	APP_CONTAINER.appendChild(div);
}
window.application.screens['level'] = renderLevelScreen;
window.application.renderScreen('level');