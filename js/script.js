$(function() {

    $('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });

    $('input').keydown(function(e) {
        if(e.keyCode == 13) {
            var item = $(this).val().trim();

            if(item !== null && item!== undefined && item !== ""){
                $(this).parent().parent().append('<li>' + item + '</li>');
                $(this).val('');
            }
        }
    });

    $('#trash').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    });
});