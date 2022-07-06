let logarr = []; //연산 기록 저장을 위한 배열
let i = 1; //연산 기록 순서를 알리기 위한 카운터
let resultarr = []; //결과값을 넣기 위한 배열
let display = document.getElementById('inputNum'); //text box 안에 내용을 변수에 저장
let mathlog = document.getElementById('mathLog'); //연산 기록을 위한 textarea의 id를 변수에 저장
let resultnum = document.getElementById('resultNum'); //연산 결과

function add(char) { //연산식 작성 함수
    display.value = display.value + char; //내용 추가
}

function resultSet() { //연산된 결과값을 도출하는 함수
    let result = "";
    try {   //연산 과정
        result = eval(display.value); //식을 계산하고 result라는 변수에 저장
        if (result === undefined) { //연산할 값이 없을 때
            alert('연산할 값을 넣어주세요.'); //값을 넣으라는 경고창
            return;
        } else { //연산 할 값이 있을 때 계산
            resultnum.value = result; //저장한 계산값을 출력하기 위해 text box에 저장
            resultarr += resultnum.value; //후에 계산을 위해 받은 결과값을 배열에 저장
        }
    } catch (err) { // 연산 과정에서 일어나는 에러 처리
        alert('제대로 된 연산인지 확인해 주세요!');
        logerr(); //연산 중 에러시 로그에러와 관련 함수 호출
    }
}

function resetval() { //모든 연산, 결과값, 로그 초기화(reset)
    display.value = "";
    resultnum.value = "";
    mathlog.value = "";
    logarr = "";
    i = 1;
}

function backSpace() { //add()함수를 통해 입력된 값을 지우는 함수
    display.value = display.value.slice(0, -1);
}

function log() { //연산 기록을 위한 함수
    if (display.value != false) {
        mathlog.value = display.value + ' = ' + resultnum.value;
        logarr = i + ' Record : ' + mathlog.value + '\n' + logarr;
        mathlog.value = logarr;
        i++;
    } else if(display.value != true){
        logarr = i + ' Record : ' + '연산식이 없음'+ '\n' + logarr;
        mathlog.value = logarr;
        i++;
        console.log(logarr);
    }
}

function logerr(){
    
}
