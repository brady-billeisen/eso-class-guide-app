var youtubeApiKey = 'AIzaSyD72xaN7Me4CqXheV39Q-OkMFk86DYRX90';
var subreddit = 'elderscrollsonline';
var searchParam = '';
var searchPlatform = '';


function getData() {
    if (searchPlatform === '-- Select a Platform --' || searchParam === '' || searchParam === '-- Select a Class --') {
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
                var resultsHead = $('<h2>').attr('id', 'resultsHead').text('Top results on Reddit for ' + '"' + searchParam + '"' + ' within r/' + subreddit + ':');
                var grid = $('<div>').addClass('grid-container-reddit');
                $('#results').prepend($('<div>').addClass('row').append($('<div>').addClass('col-12').append(resultsHead, grid)));
                for (var i = 0; i < data.data.children.length; i++) {
                    var card = $('<div>').addClass('card mb-3');
                    var cardBody = $('<div>').addClass('card-body');
                    var anchor = $('<a>').attr('href', 'https://reddit.com' + data.data.children[i].data.permalink);
                    var title = $('<h2>').attr('id', 'reddit-title').text(data.data.children[i].data.title);
                    var author = $('<p>').attr('id', 'reddit-author').text('By: ' + data.data.children[i].data.author);
                    card.append(cardBody);
                    cardBody.append(anchor);
                    cardBody.append(author);
                    anchor.append(title);
                    grid.append(card);
                }
            });
    } else if (searchPlatform === 'Youtube') {
        var youtubeUrl = `https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&q=${'Elder Scrolls Online ' + searchParam}&maxResults=25&videoSyndicated=true&videoEmbeddable=true&type=video&videoEmbeddable=true`;
        fetch(youtubeUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var resultsHead = $('<h2>').attr('id', 'resultsHead').text('Top results on Youtube for "Elder Scrolls Online ' + searchParam + '"' + ':');
                var grid = $('<div>').addClass('grid-container-youtube');
                $('#results').prepend($('<div>').addClass('row').append($('<div>').addClass('col-12').append(resultsHead, grid)));
                for (var i = 0; i < data.items.length; i++) {
                    $.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${data.items[i].id.videoId}&key=${youtubeApiKey}`, function(videoData) {
                        var card = $('<div>').addClass('card mb-3');
                        var cardBody = $('<div>').addClass('card-body');
                        var anchor = $('<a>').attr('href', 'https://www.youtube.com/watch?v=' + videoData.items[0].id);
                        var title = $('<h2>').attr('id', 'yt-title').text(videoData.items[0].snippet.title);
                        var iframeWrapper = $('<div>').addClass('video-wrapper');
                        var iframe = $('<iframe>').attr({
                            'src': 'https://www.youtube.com/embed/' + videoData.items[0].id,
                            'id': 'ytplayer',
                            'type': 'text/html',
                            'frameborder': '0',
                            'width': '100%',
                            'height': '100%',
                            'allowfullscreen': 'true'
                        });
                        card.append(cardBody);
                        cardBody.append(iframeWrapper);
                        cardBody.append(anchor);
                        anchor.append(title);
                        iframeWrapper.append(iframe);
                        grid.append(card);
                    });
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



$('.navbar').on('click', '.nav-link', function () {
    $('.nav-item').removeClass('active');
    $(this).parent().addClass('active');
})


$('.nav-link').each(function () {
    if ($(this).attr('href') === document.location.hash) {
        $(this).parent().addClass('active');
    }
})