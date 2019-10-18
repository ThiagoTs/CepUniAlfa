
function converter() {

    var obj = new Object();
    obj.Quest1 = 'Q1';
    obj.option1 = Radio1();

    obj.Quest2 = 'Q2';
    obj.option2 = Radio2();

    obj.Quest3 = 'Q3';
    obj.option3 = Radio3();

    objJson = JSON.stringify(obj);




    console.log(objJson);


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
    alert('Selecione alguma opção na questão 1');

}
function Radio2() {
    var form = document.getElementById('questao2');
    var msg = "";
    var Radio = null;
    Radio = form.questao2;
    for (var i = 0; i < Radio.length; i++) {
        if (Radio[i].checked) {
            // msg = "Selecionado: " + Radio[i].value;

            return Radio[i].value;
        }

    }
    alert('Selecione alguma opção na questão 2');

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
    alert('Selecione alguma opção na questão 3');

}







