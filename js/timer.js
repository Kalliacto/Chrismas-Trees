    // возвращает число и слово
    declOfNum = (n, titles) => n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
		0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
    
    
    
    const timer = () => {
    const timer = document.createElement('div');
    const timerText = document.createElement('p');
    const timerCount = document.createElement('span');
    
    timer.classList.add('timer');
    timerText.classList.add('timer__text');
    timerCount.classList.add('timer__count');
    
    timerText.textContent = 'До конца распродажи осталось: ';
    // timerCount.textContent = '3 дня 20 часов 15 минут';
    
    timerText.append(timerCount);
    timer.append(timerText);
    document.body.prepend(timer);

    const startTimer = () => {
        const deadedLine = new Date(2023, 0, 5, 22, 0, 0);
        const now = new Date();
        const timeRemaining = (deadedLine - now) / 1000;

        
        const seconds = Math.floor(timeRemaining % 60);
        const minutes = Math.floor(timeRemaining / 60 % 60);
        const hours = Math.floor(timeRemaining / 60 / 60 % 24);
        const days = Math.floor(timeRemaining / 60 / 60 / 24 % 30);
        // const months = Math.floor(timeRemaining / 60 / 60 / 24 / 30 % 12);
        // console.log('months: ', months);

        const s = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
        const m = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        const h = declOfNum(hours, ['час', 'часа', 'часов']);
        const d = declOfNum(days, ['день', 'дня', 'дней']);

        timerCount.textContent = `${d} ${h} ${m} ${s}`;

        if (timeRemaining > 0 ) {
            setTimeout(startTimer, 1000);
        } else {
            timer.remove();
        }  
    }

        startTimer();
}

timer();


