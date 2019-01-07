window.onload = function() {

    var button = document.getElementById('button');
    var clear = document.getElementById('clear');
    var result = document.getElementById('result');
  
    // clicking on each button
    button.addEventListener('click', function(e) {
  
      if (e.target.nodeName === 'LI') {
  
        // get value of button
        var v = e.target.innerHTML;
  
        if (v === '=') {
          try {
            result.innerHTML = eval(result.innerHTML);
          } catch(e) {
            result.innerHTML = e.message;
          }
        } else {
            result.innerHTML += v;
        }
  
      }
  
    });
  
    // clear the answer field
    clear.addEventListener('click', function() {
        result.innerHTML = '';
    });
  
  };