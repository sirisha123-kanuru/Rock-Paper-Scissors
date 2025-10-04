let score=JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            losses:0,
            ties:0
        };

        updateScoreElement(); 


         function pickComputerMove(){
            

            let computerMove="";
            const randomNumber=Math.random();

            if(randomNumber>=0 && randomNumber<=1/3){
                computerMove='rock';
            }else if(randomNumber>=1/3 && randomNumber<=2/3){
                computerMove='paper';
            }else if(randomNumber>=2/3 && randomNumber<=1){
                computerMove='scissors';
            }
            return computerMove;
        }

        let result="";


        function playGame(playerMove){
            const computerMove=pickComputerMove();

           
            
            if(playerMove==='scissors'){
                if(computerMove==='rock'){
                    result='You lose😔';
                }else if(computerMove==='paper'){
                    result='You win!😊';
                }else if(computerMove==='scissors'){
                    result='Tie😎';
                }
            } else if(playerMove==='paper'){
                if(computerMove==='rock'){
                    result='You win!😊';
                }else if(computerMove==='paper'){
                    result='Tie😎';
                }else if(computerMove==='scissors'){
                    result='You lose😔';
                }
            } else if(playerMove==='rock'){
                if(computerMove==='rock'){
                    result='Tie😎';
                }else if(computerMove==='paper'){
                    result='You lose😔';
                }else if(computerMove==='scissors'){
                    result='You win!😊';
                }
            }

             document.querySelector('.js-moves').innerHTML=`You ${playerMove} - ${computerMove}
            computer`;

            updateResult();

            if(result==='You win!'){
                score.wins+=1;
            }else if(result==='You lost'){
                score.losses+=1;
            }else if(result==='Tie'){
                score.ties+=1;
            }

            localStorage.setItem('score',JSON.stringify(score));


            updateScoreElement();

            

           
        }

        function updateScoreElement() {
            document.querySelector('.js-score')
            .innerHTML=`Wins : ${score.wins}, Losses : ${score.losses},Ties : ${score.ties}`; 
        }

        function updateResult(){
            document.querySelector('.js-result')
            .innerHTML=`${result}`;
        }
    