var youtubeApiKey = 'AIzaSyD72xaN7Me4CqXheV39Q-OkMFk86DYRX90';

var subreddit = 'elderscrollsonline';
var searchParam = '';




function getRedditData() {
    var redditUrl = `https://www.reddit.com/r/${subreddit}/search.json?q=${searchParam}&restrict_sr=1`;
    fetch(redditUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.data.children.length; i++) {
                var card = $('<div>').addClass('card mb-3');
                var cardBody = $('<div>').addClass('card-body');
                var anchor = $('<a>').attr('href', 'https://reddit.com' + data.data.children[i].data.permalink);
                var title = $('<h2>').text(data.data.children[i].data.title);
                var thumbnail = $('<img>').attr('src', data.data.children[i].data.thumbnail);
                var author = $('<p>').text('By: ' + data.data.children[i].data.author);
                card.append(cardBody);
                cardBody.append(anchor, thumbnail, author);
                anchor.append(title);
                $('#results').append(card);
            }
            // create div with class="card mb-3"
            // create div with class="card-body"
            // create anchor tag (append to card-body)
            // create h2 for the title (append to anchor tag)
            // create img tag for thumbnail (append to card-body)
            // create p tag for the description (append to card-body)
        });
}


function setParam(param) {
    searchParam = param;
    getRedditData();
}

$('#guide').change(function (event) {
    event.preventDefault();
    var param = $(this).val();
    setParam(param);
})