function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
var messages = [],
  lastUserMessage = "",
  botMessage = "",
  botName = 'sree',
  talking = true;
  function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused";

  if (lastUserMessage === 'hi') {
    botMessage = '방갑다:)!';
  }

  if (lastUserMessage === 'name') {
    botMessage = '안녕? ' + botName;
  }
}
function newEntry() {

  if (document.getElementById("chatbox").value != "") {

    lastUserMessage = document.getElementById("chatbox").value;

    document.getElementById("chatbox").value = "";

    messages.push(lastUserMessage);

    chatbotResponse();

    messages.push("<b>" + botName + ":</b> " + botMessage);

    for (var i = 1; i < 6; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

document.onkeypress = keyPress;

function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {

    newEntry();
  }

}
/*function fun() {
  document.getElementById("chatlog0").innerHTML = "Paragraph changed!";
}*/
