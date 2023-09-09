
        const clock = document.getElementById('clock'),
            electrClock = document.createElement('span'),
            hourArrow = document.createElement('div'),
            minuteArrow = document.createElement('div'),
            secondArrow = document.createElement('div');

        clock.style.position = 'relative';

        
        electrClock.style.display = 'inline-block';
        electrClock.style.fontSize = '21px';
        electrClock.style.position = 'absolute';
        electrClock.style.top = '45px';
        electrClock.style.left = '65px';

        clock.appendChild(electrClock);

    
        hourArrow.style.width = '6px';
        hourArrow.style.height = '50px';
        hourArrow.style.borderRadius = '3px';
        hourArrow.style.backgroundColor = 'black';
        hourArrow.style.opacity = '.9';
        hourArrow.style.position = 'absolute';
        hourArrow.style.top = '54px';
        hourArrow.style.left = '50%';
        hourArrow.style.zIndex = '2';
        clock.appendChild(hourArrow);
        
        minuteArrow.style.width = '4px';
        minuteArrow.style.height = '70px';
        minuteArrow.style.borderRadius = '2px';
        minuteArrow.style.backgroundColor = 'black';
        minuteArrow.style.opacity = '.8';
        minuteArrow.style.position = 'absolute';
        minuteArrow.style.top = '34px';
        minuteArrow.style.left = '50%';
        minuteArrow.style.zIndex = '3';
        clock.appendChild(minuteArrow);
        
        secondArrow.style.width = '2px';
        secondArrow.style.height = '90px';
        secondArrow.style.borderRadius = '1px';
        secondArrow.style.backgroundColor = 'black';
        secondArrow.style.opacity = '.9';
        secondArrow.style.position = 'absolute';
        secondArrow.style.top = '14px';
        secondArrow.style.left = '50%';
        secondArrow.style.zIndex = '4';
        clock.appendChild(secondArrow);


        for (let i = 1, n = 30; i < 13; i++, n+=30) {
            const number = document.createElement('div'),
                numberContent = document.createElement('span');

            numberContent.textContent = i;

            number.style.width = '28px';
            number.style.height = '28px';
            number.style.borderRadius = '50%';
            number.style.backgroundColor = '#48b382';
            number.style.textAlign = 'center';
            number.style.lineHeight = '30px';
            number.style.position = 'absolute';
            number.style.top = '6px';
            number.style.left = '87px';
            
            number.style.transformOrigin = '50% 94px';
            number.style.transform = `rotate(${n}deg)`;
        
            numberContent.style.display = 'inline-block';
            numberContent.style.transform = `rotate(-${n}deg)`;

            number.appendChild(numberContent);
            clock.appendChild(number);          
        }    

        function getTime() {
            
            const time = new Date();
            let hours = time.getHours(),
                minutes = time.getMinutes(),
                seconds = time.getSeconds();

            hourArrow.style.transformOrigin = '50% 46px';
            let a = hours * 30 + minutes * .5;
            hourArrow.style.transform = `rotate(${a}deg)`;
            
            minuteArrow.style.transformOrigin = '50% 66px';
            minuteArrow.style.transform = `rotate(${minutes*6}deg)`;
            
            secondArrow.style.transformOrigin = '50% 86px';
            secondArrow.style.transform = `rotate(${seconds*6}deg)`;



        
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            
            electrClock.innerText = `${hours}:${minutes}:${seconds}`;        

            requestAnimationFrame(getTime);
            
        }

        requestAnimationFrame(getTime);
