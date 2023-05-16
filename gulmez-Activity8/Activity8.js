
$(document).ready(function() {

    $( "#birthday" ).datepicker();
  
    var languages = ["ActionScript", "AppleScript", "JavaScript", "lisp", "perl", "php", "python"];
  
    $( "#language" ).autocomplete({
      source: languages
    });
  });