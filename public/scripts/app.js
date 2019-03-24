

const request = (options, cb) => {
    console.log(options)
    $.ajax(options)

    .done(response => {
        cb(response);
    })

   .fail(() => {
    alert('error')
    })

    .always(() => {
    });
};

createTweetElement = (tweetObj) => {

    // Main
    const articleMain = $('<article>')
    .addClass('main-tweets-container')

    // Header
    const divHeader = $('<header>')
    .addClass('tweet-header-sizing')

    const divH2Img = $('<div>')
    .addClass('img-h2-header')

    const imgName = $('<img>')
    .attr( 'src', tweetObj.user.avatars.small)

    const h2Name = $('<h2>')
    .addClass('header-name')
    .text(tweetObj.user.name)
    
    const divH3 = $('<div>')
    .addClass('h3-header')
    
    
    const h3Header = $('<h3>')
    .addClass('h3-header-text')
    .text(tweetObj.user.handle)
    
    divH3.append(h3Header);
    divH2Img.append(imgName).append(h2Name)
    divHeader.append(divH2Img).append(divH3)
    
    // Body
    const tweetMain = $('<main>')
    .addClass('main-tweet-box')
    
    const tweetBody = $('<p>')
    .addClass('main-tweet-text')
    .text(tweetObj.content.text)
    
    tweetMain.append(tweetBody)
    
    // Footer
    const footerTweet = $('<footer>')
    .addClass('footer-main')
    
    
    const footerH3 = $('<h3>')
    .addClass('footer-main-h3')
    .text(moment(tweetObj.created_at).fromNow())
    
    footerTweet.append(footerH3)
    
    // Appending Header, main and Footer to articleMain
    articleMain.append(divHeader).append(tweetMain).append(footerTweet);
    
    return articleMain;
    
}

// $('.main-tweet-section').append(createTweetElement(tweetDb))
const renderTweets = (data) => {

   const sortedData = data.sort(function(a, b) {
       return b.created_at - a.created_at
   });
   
    $('.main-tweet-section').empty();

    for (const tweetsObjs of sortedData) {
        $('.main-tweet-section').append(createTweetElement(tweetsObjs))
    };
};

const url = 'http://localhost:8080/tweets';

const returnMeTheOption = function(method, data) {
    return {
        url: '/tweets',
        method: method,
        data: data
    }
} 

$(document).ready(function() {

    $('form').submit(function(event) {
        event.preventDefault()
        const upsPackage = $(this).serialize()
        request(
            returnMeTheOption('post',upsPackage ), 
            function(res ){
                request( returnMeTheOption('get'), renderTweets);
            }
        )
    })
    
    request( returnMeTheOption('get'), renderTweets)
    
})