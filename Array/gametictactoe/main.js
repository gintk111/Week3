const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const humanPlayer2 = new HumanPlayer2(board);
    let turn = 0;
    /*Theo giõi sự thay đổi của element*/
    this.start = function () {
        const config = {childList: true};
        const observer = new MutationObserver(() => takeTurn());
        board.positions.forEach((el) => observer.observe(el, config));
        takeTurn();
    }
    /***************END*****************/

    /*Xác định người chơi*/
    function takeTurn() {
        if (board.checkForWiner()) {
            return;
        }
        if (turn % 2 === 0) {
            humanPlayer.takeTurn();
        } else {
            humanPlayer2.takeTurn();
        }
        turn++;
    }
    /**********END***********/
}

/*Lấy các thuộc tính css từ class được gọi*/
function Board() {
    this.positions = Array.from(document.querySelectorAll('.col'));
    /*Check các vị trí thắng */
    this.checkForWiner = function () {
        let winner = false;
        const winArray = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ];
        const positions = this.positions;

        winArray.forEach((winCombo) => {
            const pos1InnerText = positions[winCombo[0]].innerText;
            const pos2InnerText = positions[winCombo[1]].innerText;
            const pos3InnerText = positions[winCombo[2]].innerText;
            const isWinning = pos1InnerText !== '' &&
                pos1InnerText === pos2InnerText &&
                pos2InnerText === pos3InnerText;

            if (isWinning) {
                winner = true;
                winCombo.forEach((index) => {
                    positions[index].className += ' winner';
                })
            }
        });

        return winner;
    }
    //console.log(this.positions);
}

/******************END*********************/
/* Turn người */
function HumanPlayer(board) {
    this.takeTurn = function () {
        // console.log("Người");
        board.positions
            .forEach(el => el.addEventListener('click', hanleTurnToken));
    }

    /*Trả về dữ liệu khi click*/
    function hanleTurnToken(event) {
         event.target.innerText = "X";
           board.positions
             .forEach(el => el.removeEventListener('click', hanleTurnToken))
        // console.log("Turn Token");
    }
    /************END***********/
}
/***END****/

/* Turn máy */
function HumanPlayer2(board) {
    this.takeTurn = function () {
        //console.log(" Turn máy chơi")
        /*board.positions
            .forEach(el => el.addEventListener('click', hanleTurnToken2));*/
          availabelPositons =
              board.positions.filter((x) => x.innerText === "");
        // console.log(availabelPositons);
          const move = Math.floor(Math.random() & availabelPositons.length);
              availabelPositons[move].innerText = "0";
             //console.log("Turn Token");*/
      }
   /* function hanleTurnToken2(event) {
        event.target.innerText = "0";
        board.positions
            .forEach(el => el.removeEventListener('click', hanleTurnToken2))

        //console.log("Turn Token");
    }*/
}
/****END***/