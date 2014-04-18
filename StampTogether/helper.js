var firebaseData = new Firebase('https://sweltering-fire-9141.firebaseio.com/dissertation/elm/15');
var elm = Elm.fullscreen(Elm.StampTogether.Main);
firebaseData.on('child_added', function(snapshot) {
	elm.send('stamped', snapshot.val());
});
