function Send(){
    console.log('running send');
    const message = document.getElementById("Message Box").value;
    const ip = document.getElementById("ip").value;
    const port = document.getElementById("port").value;
    // $.ajax({
        // url: ip+ ":"+port+'/chat',
        // type: 'POST',
        // contentType: 'application/json',
        // data: JSON.stringify({message: message}),
        // success: function(response){
            // console.log(response);
                
        // }});
    const Http = new XMLHttpRequest();
    const url = ip + ':' + port + '/chat';
    console.log(url);
    Http.open("POST", url);
    Http.setRequestHeader('Content-type', 'application/json');
    Http.send(JSON.stringify({message: message}));
}


function inflateChat(){
    console.log(this.responseText);
    chatdisplay();
}

function chatdisplay(){
    const port = document.getElementById("port").value;
    const ip = document.getElementById("ip").value;
    Url = ip + ":" + port + '/messages';
    console.log('Fetching on : ' + Url);
    var Http = new XMLHttpRequest();
    Http.addEventListener("load", inflateChat);
    Http.open("GET", Url);
    Http.send();
// $.get(Url+"/messages", function(data, status){
    // document.getElementById("Chat Display").innerHTML = data.messages;
// });
}
// var t = setInterval(chatdisplay,1000);
var t = setInterval(chatdisplay, 5000);
