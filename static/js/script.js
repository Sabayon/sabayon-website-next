$(document).ready(function() {
    'use strict';

    var forumFeedURL, forumURL, boxTemplate, formatShortTitle, $forum;

    forumFeedURL = 'https://forum.sabayon.org/feed.php';
    forumURL = 'https://forum.sabayon.org/';
    boxTemplate = [
        '<div class="panel panel-default">',
        '<div class="panel-heading">',
        '<h4>Active forum topics</h4>',
        '</div>',
        '<div id="active-forum-posts" class="panel-body">',
        '</div>',
        '</div>'
    ].join('');

    formatShortTitle = function(entry) {
        var separator, shortTitle, topicPrefix;

        separator = '•';
        shortTitle = entry.title;
        if (shortTitle.indexOf(separator) > -1) {
            topicPrefix = new RegExp('.*' + separator);
            shortTitle = shortTitle.replace(topicPrefix, '');
        }

        if (shortTitle.indexOf('Re:') > -1) {
            shortTitle = shortTitle.replace('Re:', '');
        }

        return shortTitle.trim();
    };

    $forum = $('.panel').find('a[href="' + forumURL + '"]');
    if ($forum.length > 0) {
        $(document.body).append('<script type="text/javascript" src="/js/jquery.rss.min.js"></script>');
        $forum.parents('.panel').after(boxTemplate);
        $('#active-forum-posts').rss(forumFeedURL, {
            ssl: true,
            entryTemplate: '<li><a href="{url}">{shortTitle}</a>{shortBodyPlain}</li>',
            layoutTemplate: '<ul>{entries}</ul>',
            tokens: {
                shortTitle: formatShortTitle
            }
        });
    }
});
