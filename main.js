function Send(){
    const message = document.getElementById("Message Box").value;
    const ip = document.getElementById("ip").value;
    const port = document.getElementById("port").value;
    $.ajax({
        url: ip+ ":"+port+'/chat',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({message: message}),
        success: function(response){
                
        }});
}



function chatdisplay(){
    const port = document.getElementById("port").value;
    const ip = document.getElementById("ip").value;
    Url = ip + ":" + port;
$.get(Url+"/messages", function(data, status){
    document.getElementById("Chat Display").innerHTML = data.messages;
});
}
var t = setInterval(chatdisplay,250);

