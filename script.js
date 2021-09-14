$(".content-block").each(function() {
    let more = $(this).find(".show-more");
    let hide = $(this).find(".hide-content");
    hide.hide();
    more.click(function() {
        hide.slideToggle(1000);
        more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
    });
});