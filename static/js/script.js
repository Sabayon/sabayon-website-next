document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var forumFeedURL, forumURL, boxTemplate, formatShortTitle, asideElement,
        rssScript;

    forumFeedURL = 'https://forum.sabayon.org/feed.php';
    forumURL = 'https://forum.sabayon.org/';
    boxTemplate = [
        '<section>',
        '<h4>Active forum topics</h4>',
        '<div id="active-forum-posts"></div>',
        '</section>'
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

    asideElement = document.querySelector('aside');
    if (asideElement) {
        rssScript = document.createElement('script');
        rssScript.type = 'text/javascript';
        rssScript.src = '/js/jquery.rss.min.js';
        rssScript.onload = function () {
            $('aside').append(boxTemplate);
            console.log($('#active-forum-posts'));
            $('#active-forum-posts').rss(forumFeedURL, {
                ssl: true,
                entryTemplate: '<li><p><a href="{url}">{shortTitle}</a></p><div>{shortBodyPlain}</div></li>',
                layoutTemplate: '<ul>{entries}</ul>',
                tokens: {
                    shortTitle: formatShortTitle
                }
            });
        };
        document.body.appendChild(rssScript);
    }
});
