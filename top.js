
let ceil = document.querySelectorAll(".cell")
let statustext = document.querySelector("#statusText")
let btn = document.querySelector(".game--restart")

let arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

]

let arr2 =["","","","","","","","",""]
let xtop = "X"
let run = false

function oyinnib(){
    ceil.forEach(el => el.addEventListener("click",cell) )  
    btn.addEventListener("click",restare_g)
    statustext.textContent = `${xtop}'s turn`

    run = true
    

}


function cell(){

    let yol =   this.getAttribute("data-cell-index")

    if(arr2[yol] !="" || !run){
        return 
    }

    cell_soz(this,yol)
    golib()
    player()
}


function cell_soz(cell,index){


    arr2[index] = xtop

    cell.textContent = xtop

}

function player(){
    xtop = (xtop == "X" )?"O":"X"
x
    statustext.textContent = `${xtop}' O turn`

}

function golib(){

    let round = false

    for(let  i =0 ; i<arr.length; i++){
        let condition = arr[i]
        let cellA = arr2[condition[0]]
        let cellB = arr2[condition[1]]
        let cellC = arr2[condition[2]]

        if(cellA ==="" || cellB === "" || cellC ===""){
            continue;
        }

        if(cellA == cellB && cellB == cellC){
            round = true
            break
        }


    }

    if(round){
        statustext.textContent = `${xtop} yutdingiz!!!`
        alter(`${xtop} yutdingiz`)
        run = false
    }
    else if(!arr2.includes("")){
            statustext.textContent = `Durrang!!!`
            alter("Durrang!!!)
            run =false
    }

    else {
        player()
    }

}

function restare_g(){

    xtop = "X"
    arr2 = ["", "", "", "", "", "", "", "", ""]
    statustext.textContent = `${xtop}'s turn`
    run = true
    ceil.forEach(cell => cell.textContent = "")

}




oyinnib()


