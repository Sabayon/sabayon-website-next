$(document).ready(function() {
    'use strict';

    var forumFeedURL, forumURL, boxTemplate, $forum;

    forumFeedURL = 'https://forum.sabayon.org/feed.php';
    forumURL = 'https://forum.sabayon.org/';
    boxTemplate = [
        '<div class="panel panel-default">',
        '<div class="panel-heading">',
        '<h4>Latest forum news</h4>',
        '</div>',
        '<div id="latest-forum-posts" class="panel-body" style="padding:0;max-width:100%;word-break:break-all;">',
        '</div>',
        '</div>'
    ].join('');

    $forum = $('.panel').find('a[href="' + forumURL + '"]');
    if ($forum.length > 0) {
        $(document.body).append('<script type="text/javascript" src="/js/jquery.rss.min.js"></script>');
        $forum.parents('.panel').after(boxTemplate);
        $('#latest-forum-posts').rss(forumFeedURL, {
            ssl: true,
            entryTemplate: '<li><a href="{url}">{title}</a><br />{shortBodyPlain}</li>',
            layoutTemplate: '<ul style="list-style:none;padding:0;">{entries}</ul>'
        });
    }
});
