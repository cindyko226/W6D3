const FollowToggle = require("./follow_toggle");

$(() => {
    const $follow_toggles = $('.follow-toggle');
    $follow_toggles.each(function(){
        new FollowToggle($(this))
    })


});