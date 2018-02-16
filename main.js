$(function(){
    //alert('Yo!');
    
    $(".description .close").on("click", function(){
        $(this).parent().hide();    
    });
        

    $(".sephir.sephir-kether").on("click", function(){
        $(".description .descTitle").html("Kether");
        $(".description .descDesc").html("KThR, Кетер («Венец»).<br><strong>Сефер Иецира:</strong> Первый путь именуется Восхитительным или Сокровенным Разумом, ибо он есть Свет, дарующий возможность постичь то Первоначало, которое не имеет начала, и он же — Первозданная Слава, ибо проникнуть в его суть не дано никому из сотворенных.");
        $(".description").show();
    });
    
    $(".sephir.sephir-chokmah").on("click", function(){
        $(".description .descTitle").html("Сhokmah");
        $(".description .descDesc").html("Сефира Хокма...");
        $(".description").show();
    });
    
    $(".sephir.sephir-binah").on("click", function(){
        $(".description .descTitle").html("Binah");
        $(".description .descDesc").html("Сефира Бина...");
        $(".description").show();
    });
    
    $(".sephir.sephir-daat").on("click", function(){
        $(".description .descTitle").html("daat");
        $(".description .descDesc").html("Сефира daat...");
        $(".description").show();
    });
    
    $(".sephir.sephir-chesed").on("click", function(){
        $(".description .descTitle").html("chesed");
        $(".description .descDesc").html("Сефира chesed...");
        $(".description").show();
    });
    
    $(".sephir.sephir-gevurah").on("click", function(){
        $(".description .descTitle").html("gevurah");
        $(".description .descDesc").html("Сефира gevurah...");
        $(".description").show();
    });
    
    $(".sephir.sephir-thifareth").on("click", function(){
        $(".description .descTitle").html("thifareth");
        $(".description .descDesc").html("Сефира thifareth...");
        $(".description").show();
    });
    
    $(".sephir.sephir-netzach").on("click", function(){
        $(".description .descTitle").html("netzach");
        $(".description .descDesc").html("Сефира netzach...");
        $(".description").show();
    });
    
        $(".sephir.sephir-hod").on("click", function(){
        $(".description .descTitle").html("hod");
        $(".description .descDesc").html("Сефира hod...");
        $(".description").show();
    });
    
        $(".sephir.sephir-yesod").on("click", function(){
        $(".description .descTitle").html("yesod");
        $(".description .descDesc").html("Сефира yesod...");
        $(".description").show();
    });
    
        $(".sephir.sephir-malkuth").on("click", function(){
        $(".description .descTitle").html("malkuth");
        $(".description .descDesc").html("Сефира Хокма...");
        $(".description").show();
    });
})