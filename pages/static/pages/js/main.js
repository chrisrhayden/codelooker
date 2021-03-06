'use strict';

function makeTags(tag) {
    // let str = '<li><a href="#">' + tag + '</a></li>';

    let $li = $('<li>');
    let $a = $('<a>').text(tag).css({
        'color': 'black',
        'text-decoration': 'none',
    });
    let made_tag = $li.append($a);
    return made_tag;
}

function navSlide() {
    // make na
    let $button = $('.slide');
    let state = $button.attr('data-state');

    $('.slide').on('click', function() {
        if (state === 'out') {
            $('header').css({
                'display': 'none'
            });
            $('body').css({
                'grid-template-columns': '0px auto'
            });
        }
    });
}

$(document).ready(function() {
    $.ajax({
        url: 'http://127.0.0.1:8000/api/v1/tags?format=json',
        success: function(result) {
            let len = result.length;
            for (let i=0;i<len;i++) {
                let tag = result[i].name;
                let made_tag = makeTags(tag);
                $('.ul-tags').append(made_tag);
            }
        },
        error: function(err) {
            alert(err);
        }
    });

    navSlide();
});
