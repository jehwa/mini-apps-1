
var app = {
    board: [[,,],[,,],[,,]],
    // newBoard: [[,,],[,,],[,,]],
    choice: {
        true: 'X',
        false: 'O',
        done: ''
    },
    winner: {
        true: 0,
        false: 0
    },
    pick: true,

    init: () => {
        $("td").click(function() {
            app.handleClick($(this));
        });
        $("button").click(function() {
            app.clear();
        })
    }, 
    handleClick: (node) => {
        // debugger;
        if(app.pick === 'done') {
            app.clear();
        }
        if(!node[0].innerHTML.length) {
            node.html(app.choice[app.pick]); //change td value
            var x = Number(node.attr('id')[0]);
            var y = Number(node.attr('id')[1]);
            app.board[x][y] = app.choice[app.pick];// change app.board value
            // console.log(app.board);           
        }
        if(app.checkRow(x) || app.checkCol(y) || app.checkMaj(x+y) || app.checkMin(x-y)) {
            alert(`${app.choice[app.pick]} won!!`);
            app.winner[app.pick] ++;
            $('.' + app.pick).text(app.winner[app.pick]);
            app.pick = 'done';
            return;
        }
        if(app.pick !== 'done') {
           app.pick = !app.pick;
        }
    },

    checkRow: (row) => {
        let count = 0;
        // debugger;
        for(let i = 0; i < app.board.length; i ++) {
            if(app.board[row][i] === app.choice[app.pick]) {
                count ++;
            }
        }
        if(count === app.board.length) {
            return true;
        } 
        return false;
    }, 
    checkCol: (col) => {
        let count = 0;
        // debugger;
        for(let i = 0; i < app.board.length; i ++) {
            if(app.board[i][col] === app.choice[app.pick]){
                count++;
            }
        }
        if(count === app.board.length) {
            return true;
        }
        return false;
    },
    checkMaj: (index) => {
        let count = 0;
        for(let i = 0; i < app.board.length; i ++) {
            for(let j = 0; j < app.board.length; j ++) {
                if((i+j === index) && (app.board[i][j] === app.choice[app.pick])) {
                    count ++;
                }
            }
        }
        if(count === 3) {
            return true;
        }
        return false;
    },
    checkMin: (index) => {
        let count = 0;
        for(let i = 0; i < app.board.length; i ++) {
            for(let j = 0; j < app.board.length; j ++) {
                if((i-j === index) && (app.board[i][j] === app.choice[app.pick])) {
                    count ++;
                }
            }
        }
        if(count === 3) {
            return true;
        }
        return false;
    },
    clear: () => {
        app.board = [[,,],[,,],[,,]];
        $("td").html("");
        app.pick = true;
    }
};

$(document).ready(function(){
    app.init();
})

