var youtubeApiKey = 'AIzaSyD72xaN7Me4CqXheV39Q-OkMFk86DYRX90';

var subreddit = 'elderscrollsonline';
var searchParam = '';
var searchPlatform = '';


// function getRedditData() {
//     if (searchParam === '-- Select a Class --') {
//         return;
//     }
//     var redditUrl = `https://www.reddit.com/r/${subreddit}/search.json?q=${searchParam}&restrict_sr=1&sort=top&limit=25`;
//     fetch(redditUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             var resultsHead = $('<h2>').text('Top results on Reddit for ' + searchParam + ':');
//             $('#results').append(resultsHead);
//             for (var i = 0; i < data.data.children.length; i++) {
//                 var card = $('<div>').addClass('card mb-3');
//                 var cardBody = $('<div>').addClass('card-body');
//                 var anchor = $('<a>').attr('href', 'https://reddit.com' + data.data.children[i].data.permalink);
//                 var title = $('<h2>').text(data.data.children[i].data.title);
//                 var thumbnail = $('<img>').attr('src', data.data.children[i].data.thumbnail);
//                 var author = $('<p>').text('By: ' + data.data.children[i].data.author);
//                 card.append(cardBody);
//                 cardBody.append(anchor, thumbnail, author);
//                 anchor.append(title);
//                 $('#results').append(card);
//             }
//         });
// }


// function getYoutubeData() {
//     if (searchParam === '-- Select a Class --') {
//         return;
//     }
//     var youtubeUrl = `https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&q=${'Elder Scrolls Online ' + searchParam}&maxResults=25&type=video`;
//     fetch(youtubeUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             for (var i = 0; i < data.items.length; i++) {
//                 var card = $('<div>').addClass('card mb-3');
//                 var cardBody = $('<div>').addClass('card-body');
//                 var iframe = $('<iframe>').attr({
//                     'src': 'https://www.youtube.com/embed/' + data.items[i].id.videoId,
//                     'id': 'ytplayer',
//                     'type': 'text/html',
//                     'frameborder': '0',
//                     'width': '640',
//                     'height': '360'
//                   });
//                 card.append(cardBody);
//                 cardBody.append(iframe);
//                 $('#results').append(card);
//             }
//         });
// }


function getData() {
    if (searchPlatform === '-- Select a Platform --' || searchParam === '-- Select a Class --') {
        clearResults();
        return;
    }


    if (searchPlatform === 'Reddit') {
        var redditUrl = `https://www.reddit.com/r/${subreddit}/search.json?q=${searchParam}&restrict_sr=1&sort=top&limit=25`;
        fetch(redditUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var resultsHead = $('<h2>').text('Top results on Reddit for ' + searchParam + ':');
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
    } else if (searchPlatform === 'Youtube') {
        var youtubeUrl = `https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&q=${'Elder Scrolls Online ' + searchParam}&maxResults=25&type=video`;
        fetch(youtubeUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var resultsHead = $('<h2>').text('Top results on Youtube for "Elder Scrolls Online ' + searchParam + '"' + ':');
                $('#results').append(resultsHead);
                for (var i = 0; i < data.items.length; i++) {
                    var card = $('<div>').addClass('card mb-3');
                    var cardBody = $('<div>').addClass('card-body');
                    var iframe = $('<iframe>').attr({
                        'src': 'https://www.youtube.com/embed/' + data.items[i].id.videoId,
                        'id': 'ytplayer',
                        'type': 'text/html',
                        'frameborder': '0',
                        'width': '640',
                        'height': '360'
                    });
                    card.append(cardBody);
                    cardBody.append(iframe);
                    $('#results').append(card);
                }
            });
    }
}


function clearResults() {
    $('#results').empty();
}

function setPlatform(platform) {
    searchPlatform = platform;
    getData();
}


function setParam(param) {
    searchParam = param;
    getData();
}


$('#eso-class').change(function (event) {
    event.preventDefault();
    var param = $(this).val();
    clearResults();
    setParam(param);
})


$('#platform').change(function (event) {
    event.preventDefault();
    var platform = $(this).val();
    clearResults();
    setPlatform(platform);
})