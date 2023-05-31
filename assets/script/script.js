var youtubeApiKey = 'AIzaSyD72xaN7Me4CqXheV39Q-OkMFk86DYRX90';

var subreddit = 'elderscrollsonline';
var searchParam = '';


function getRedditData() {
    if (searchParam === '-- Select a Class --') {
        return;
    }
    var redditUrl = `https://www.reddit.com/r/${subreddit}/search.json?q=${searchParam}&restrict_sr=1&sort=top&limit=25`;
    fetch(redditUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var resultsHead = $('<h2>').text('Top results for ' + searchParam + ':');
            $('#results').append(resultsHead);
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
        });
}


function clearResults() {
    $('#results').empty();
}


function setParam(param) {
    searchParam = param;
    getRedditData();
}


$('#eso-class').change(function (event) {
    event.preventDefault();
    var param = $(this).val();
    clearResults();
    setParam(param);
})