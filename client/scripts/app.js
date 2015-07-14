// YOUR CODE HERE:

var app = {
  server: 'https://api.parse.com/1/classes/chatterbox'
};

// makes a new room?
app.init = function(){};

app.send = function(data){
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};

app.fetch = function(){


  var readyState = $.get('https://api.parse.com/1/classes/chatterbox', function(data, status){

    app.messages = data.results;

    console.log("data = ", data);
    return data.results;
  });
};

app.clearMessages = function(){};

app.addMessage = function(){

  app.fetch();

  console.log("app.messages = ", app.messages);

  for (var i = 0; i < app.messages.length; i++) {

    var message = $('.allMessages').append('<div class = "message">');
    var userName = $(('<span class = "userName">@'+ app.messages[i].username+'</span>'));
    var dateCreated = $(('<span class = "dateCreated">'+ app.messages[i].dateCreated+'</span>'));
    var updatedAt = $(('<span class = "updatedAt">'+ app.messages[i].updatedAt+'</span>'));
    var text = $(('<span class = "text">'+ app.messages[i].text+'</span>'));
    message.append(userName, userName, dateCreated,updatedAt,text);

  }


};

app.addRoom = function(){};


// var $newdiv1 = $( "<div id='object1'/>" )

// var $tweet = $('<div class="tweet"><span class="user">@' + user + '</span> <span class="time">(' + time + ')</span>: <span class="message">' + message + '</span></div>');
