$(document).ready(function() {
  $("a[href^='http://']").each(
    function(){
     if(this.href.indexOf(location.hostname) == -1) {
        $(this).attr('target', '_blank');
      }
    }
  );
$("a[href^='https://']").each(
function(){
if(this.href.indexOf(location.hostname) == -1) {
$(this).attr('target', '_blank');
}
}
);

});
