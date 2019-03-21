/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery"s document ready function
 */
$(document).ready(function() {
    



let tweetDb = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1553196460021

  }

createTweetElement = (tweetObj) => {

 // Main
  const articleMain = $("<article>")
    .addClass("main-tweets-container")
     
    // Header
    const divHeader = $("<header>")
    .addClass("tweet-header-sizing")
    
    const divH2Img = $("<div>")
    .addClass("img-h2-header")
    
    
    const imgName = $("<img>")
    .attr( "src", tweetObj.user.avatars.small)
    
    
    const h2Name = $("<h2>")
    .addClass("move-motherfucker")
    .text(tweetObj.user.name)
    
    const divH3 = $("<div>")
    .addClass("h3-header")
    

  const h3Header = $("<h3>")
  .addClass("h3-header-text")
  .text(tweetObj.user.handle)
  
  divH3.append(h3Header);
  divH2Img.append(imgName).append(h2Name)
  divHeader.append(divH2Img).append(divH3)
  
  // Body
  const tweetMain = $("<main>")
  .addClass("main-tweet-box")
  
  
  const tweetBody = $("<p>")
  .addClass("main-tweet-text")
  .text(tweetObj.content.text)
  
  tweetMain.append(tweetBody)
  
  // Footer
  const footerTweet = $("<footer>")
  .addClass("footer-main")
  
  
  const footerH3 = $("<h3>")
  .addClass("footer-main-h3")
  .text(moment(tweetObj.created_at).fromNow())
  
  footerTweet.append(footerH3)
  
  articleMain.append(divHeader).append(tweetMain).append(footerTweet);
  console.log("test", articleMain)
  return articleMain
  
}

$(".main-tweet-section").append(createTweetElement(tweetDb))

})
