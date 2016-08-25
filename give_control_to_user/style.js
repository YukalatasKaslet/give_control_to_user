$(function(){

  $('form').submit(function(event){
    event.preventDefault();
    var selector = $("#style_editor").find("input:nth-child(1)").val();
    var property = $("#style_editor").find("input:nth-child(2)").val();
    var value    = $("#style_editor").find("input:nth-child(3)").val();

    $("*").find(selector).css(property,value);

  });//end $(form).submit
});










/*
  Notas de aprendizaje
  //this code used the string "href" as the url
  $('#result').load('href #content');

  //javascript doesn't have this syntax for wrapping variables like in PHP
  $('#result').load('#{href} #content');

  //this code appended "#content" like it was a hash tag
  $('#result').load(href + '#content');

*/