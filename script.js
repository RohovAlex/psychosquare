let startbox = document.getElementsByClassName("container")[0];      
        startbox.onclick = function create4(event) {
            for (let i = 0; i < 4; i++) {
                let nestedSquare = document.createElement("div");
                nestedSquare.setAttribute("class", "children");
                function genRandNum(callback) {
                    setInterval(function () {
                    let num ='#'+Math.random().toString(16).slice(-3);
                    callback(num);
                }, 1000)
            }
        
            genRandNum(function (res) {
                nestedSquare.style.background = res;
            })
                    // a.style.background = '#'+Math.random().toString(16).slice(-3);
                    event.target.appendChild(nestedSquare)}}