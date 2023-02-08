var max=1
var count=1;//For Counter
function add(){
            
        var Table = document.getElementById("table");
        var Row = Table.insertRow(-1);

        var cell1 = Row.insertCell(0);
        var cell2 = Row.insertCell(1);
        var cell3 = Row.insertCell(2);
        
        var placeholder1 = "FirstBox:-"+(max+1);
        var placeholder2 = "SecondBox :-"+(max+1);
        
        cell1.innerHTML =`<td><input type="text" placeholder="${placeholder1}" class="w-100"></td>`; 
        cell2.innerHTML =`<td><input type="text" placeholder="${placeholder2}" class="w-100"></td>`;
        cell3.innerHTML = `<td><button type="button" class="btn btn-danger w-50 " onclick="remove(this)">-</button></td>`;


        if(count>=4){
            document.getElementById("plusbtn").disabled = true;     
            // alert('You Reached your maximum')
        }
        max ++;
        count++;
        // console.log(max);
       
}

function remove(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
   // document.getElementById("table").deleteRow(-1);
    count--;
    // console.log(max);
    if(count<=4){
        document.getElementById("plusbtn").disabled = false;  
    }
}
