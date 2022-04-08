document.addEventListener(
    'DOMContentLoaded',
    function () {
      // das hier bitte erst im Ereignis-Fall ausführen:
      var a = 'Hallo Welt!';
    }
  );
  
  document.addEventListener('DOMContentLoaded', function () {
	  
    document.querySelector('#gameboard').addEventListener('click',  markField);	  
    
    function markField (e) { 
      var field = e.target;
      field.setAttribute('aria-label','x'); 
      field.setAttribute('disabled','disabled'); 
    }
  
  }
  );

  document.querySelector('#gameboard').addEventListener('click',  markField);	
  var current = 0,
      players = ['x', 'o'];  
  
  function markField (e) { 
    var field = e.target;
    field.setAttribute('aria-label', players[current]); 
    field.setAttribute('disabled','disabled'); 
    current = 1 - current;
  }

  document.querySelector('#gameboard').addEventListener('click',  markField);	
  var current = 0,
      players = [ 'x', 'o'];  
  
  function markField (e) { 
    var field = e.target;
    field.setAttribute('aria-label', players[current]); 
    field.setAttribute('disabled','disabled'); 
    current = 1 - current;
    document.querySelector('#hint').innerText = 'Spieler ' + players[current] + ' ist am Zug.';
  }