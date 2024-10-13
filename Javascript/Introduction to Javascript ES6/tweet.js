var tweet = prompt("Your Text here : ");
        console.log(tweet)
        var Tlength = tweet.length; 
        alert("Your Text is " + Tlength + " characters long and only " + (140-Tlength)+ " characters left.")
        console.log(tweet.length)
        tweet = tweet.slice(0,140)
        console.log(tweet)
        console.log(tweet.length)