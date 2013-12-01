$(function() {
    var modalBody = '<div id="photoModal" class="modal">' +
        '<div class="modal-content">' +
        '<div class="modal-body">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '<div class="modal-body-content"></div>'
        '</div>' +
        '</div>' +
        '</div>';
    $(".photo img").click(function(e) {
        var src = $(this).attr('src');
        if (!$("#photoModal").length) {
            $("body").append(modalBody);
        }
        $("#photoModal .modal-body-content").html('<img src="' + src + '">');
        $('#photoModal').modal('show');

        e.preventDefault();
    });
});
