let btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener("click" , function() {
    let a = window.prompt("please enter the first variable");
    let b = window.prompt("please enter the second variable");
    let c = window.prompt("please enter the third variable");

        let bNegtive = -b;
        let bPower = b ** 2;
        let calc_4_AC = 4 * a * c;
        let calcTopPostive = bNegtive + Math.sqrt(bPower - calc_4_AC);
        let calcBottomPostive = calcTopPostive / (a * 2);
        let calcTopNegtive = bNegtive - Math.sqrt(bPower - calc_4_AC);
        let calcBottomNegtive = calcTopNegtive / (a * 2);
        document.write(`<h1>solutin set is</h1>`);
        document.write(`<h1>{${calcBottomNegtive} , ${calcBottomPostive}}</h1>`);
    
        document.body.style.cssText = ` 
        width: 90%
        mrgin: auto;
        height: 100vh;
        font-family: "cairo";
        text-transform: capitalize;
        background-color: #222;
        color: #e91e63;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        align-content: center
        `
});