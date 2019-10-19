
function converter() {

    var obj = new Object();
    obj.Q1 = Radio1();

    obj.Q2 = Radio2();

    obj.Q3 = Radio3();

    objJson = JSON.stringify(obj);
    console.log(objJson);

    if(Radio1() == null || Radio2() == null || Radio3()== null){
        alert("Escolha pelo menos uma opção em todas as perguntas");
        voltar();
    }else{

        var http = new XMLHttpRequest();
        var url = 'http://137.135.71.213:5000/api/answer';
        var params = objJson;
        http.open('POST', url, true);
    
        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/json');
    
        http.onreadystatechange = function () {//Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
            }
        }
        http.send(params);
        alert("Salvo, Obrigado!");
        voltar();
    }

}

function Radio1() {
    var form = document.getElementById('questao1');
    var msg = "";
    var Radio = null;
    Radio = form.questao1;
    for (var i = 0; i < Radio.length; i++) {
        if (Radio[i].checked) {
            // msg = "Selecionado: " + Radio[i].value;
            return Radio[i].value;
        }

    }
    

}
function Radio2() {
    var form = document.getElementById('questao2');
    var msg = "";
    var Radio = null;
    Radio = form.questao2;
    for (var i = 0; i < Radio.length; i++) {
        if (Radio[i].checked) {
            //  msg = "Selecionado: " + Radio[i].value);

            return Radio[i].value;
        }

    }
    

}
function Radio3() {
    var form = document.getElementById('questao3');
    var msg = "";
    var Radio = null;
    Radio = form.questao3;
    for (var i = 0; i < Radio.length; i++) {
        if (Radio[i].checked) {
            // msg = "Selecionado: " + Radio[i].value;

            return Radio[i].value;

        }
    }
   

}



