<style>
    input[type="checkbox"]{vertical-align:baseline}
    .hand {cursor:pointer;}
</style>
<form method="post" action="">
    <input type="checkbox"> <span onClick="CheckClick(this)" class="hand">Нажми здесь</span><br>
    <label><input type="checkbox"> Метка label</label>
</form>

<script>
function CheckClick(e){
   t=e.previousSibling.previousSibling;
   if( (t.tagName=='input')&&(t.type=='checkbox')) t.click();
}
</script>
