var td = document.querySelectorAll('td');
var input = document.querySelector('#sum');
var flag = false; //연산자의 연속클릭 체크 용도 / 클릭안한상태 : false(기본값)
var resultClick = false; //=버튼을 클릭했는지 안했는지 체크 용도 / 기본값 false


//1.버튼을 클릭했을 때 해당하는 value값이 input에 출력되는 알고리즘
for(i=0; i<td.length; i++){
    td[i].onclick = function (e){ //e : 해당하는 이벤트가 발생되었을 때 가리키고 있는 객체 (이벤트객체)
        //e.target = document.querySelectorAll('td')[i]
        // input.value = e.target.innerHTML;
        // input.value += e.target.innerHTML;
        if(e.target.innerText == '='){
            return;
        }

        if(isNaN(e.target.innerText) == false){//클릭이벤트 시행된 text가 숫자일때
            // input.value += e.target.innerHTML;
            if(input.value == "0" || resultClick == true){
                input.value = e.target.innerHTML;
                resultClick = false;
            }else{
                input.value += e.target.innerHTML;
            }
            flag = false;
        }else{ //이벤트 발생이 연산자일 경우
            if(flag == false){ //비교
                input.value += e.target.innerHTML;
                flag = true; //값을 새롭게 정의
            }
        }
       
    }

}
// //2.연산자를 연속으로 클릭되지 않도록
// isNaN(3) => false
// isNaN(/ㅇㄹ) => true
// js에서 가지고있는 내장 메서드

// 3. 연산자의 연속이 아닌거지 한번만 사용하고 말 건 아니다!


var ac = document.getElementById('ac');
ac.addEventListener('click',function(){
    input.value = "0";
})
// ac.onclick = function(){
//     input.value = "0";
// }


var result = document.querySelector('#result'); //resultClick = false
result.addEventListener('click',function() {
    if(flag == true){
        return;
    }
    input.value = Number(eval(input.value));
    resultClick = true;
})


// Number() : 내장객체
// eval() : 해당하는 연산자를 포함해서 자동계산해주는 메서드
// Number(eval(3+5)) => 8