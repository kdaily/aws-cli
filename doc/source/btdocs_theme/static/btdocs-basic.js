/*
 * BTDocs basic JS behavior.
 *
 * Freely stolen from my old code in AWSDocsSphinxTheme (now quite deprecated).
 * Requires JQuery (included in this dir)
 */

function addTextSelectors() {
    /* Literal-blocks appear without a wrapping 'highlight' div like normal
     * <pre> elements do, so we need to wrap literal blocks so they look right
     * and the text selector doesn't appear at top of the surrounding block. */
    $(".literal-block").wrap("<div></div>");
    $(".literal-block").parent().addClass("highlight");

    /* Now, add text selectors to each <pre> element on the page and add the
     * 'copycontainer' class to the parent so it can be styled separately. */
    $("pre").each(function(){
        var $pre = $(this);
        /*$pre.parent().addClass("copycontainer");*/
        var $btn = $("<div class=\"copy-button\">⎘</div>");
        addTooltip($btn, "Copy to clipboard");
        $btn.click(function(){
            copyText($pre);
        });
        $pre.after($btn);
    });
}

function addTooltip(e, text) {
    e.append($("<span class=\"tooltip\">" + text + "</span>"));
}

function copyText(e) {
   /* copy text and flash the text box a little */
   var ta = document.createElement("textarea");
   var text = document.createTextNode($(e).text());
   ta.appendChild(text);
   document.body.appendChild(ta);
   try {
      ta.select();
      document.execCommand("copy");
      $(e).animate({
         opacity: "0.25",
      }, 1);
      $(e).animate({
         opacity: "1.0",
      }, 500);
   } catch(ex) {
      console.log(ex.message);
   }
   document.body.removeChild(ta);
}

/*
 * Behavior for "option" containers
 * See btdocs-basic.css for the styles that support this.
 */

function setupOptionContainers() {
   /*
    * option containers have a dictionary list inside them. The <dt> is the option title. The <dd>
    * is the option content.
    */
   $("div.container.option dt").click(function(){changeOption($(this))});
   /*
    * grab the text in each dt element and create a tabbed selector
    * (this can be modified to create a button or whatever)
    */
   $("div.container.option dl").each(function(){addTabbedOptionSelector($(this))})
   /*$("div.container.option dt:first-of-type").addClass("selected");*/
   $("div.container.option dd:first-of-type").addClass("selected");
}

function addTabbedOptionSelector(dl) {
   var option_headings = [];
   var $div = $("<div/>").addClass("optionselector");
   $(dl).find("dt").each(function(){
      var $nextdd = $(this).next("dd");
      var classid = $(this).text()
                           .trim()
                           .toLowerCase()
                           .replace(/\/|\+|\s|,|\.]/g, "_");
      var $span = $("<span/>").addClass("option")
                              .addClass(classid)
                              .text($(this).text());
      $span.click(function(){changeOption(classid)});
      $div.append($span);
      $nextdd.addClass(classid);
   });
   $div.children().first().addClass("selected");
   $(dl).before($div);
}

function changeOption(c) {
    $("div.optionselector span." + c).each(function(){
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");
    });
    $("div.container.option dd." + c).each(function(){
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");
    });
}

/* Run when the page loads */
$(document).ready(function(){
    /* Add text selectors to the page */
    addTextSelectors();
    /* Set up option containers */
    setupOptionContainers();
});

