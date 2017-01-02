---
layout: project
title: Twitter Bot
---

<div class="message">
  What is a "Twitter Bot"?
</div>
A Twitterbot is a bot program used to produce automated posts on the Twitter microblogging service, or to automatically follow Twitter users. Twitterbots come in various forms. For example, many serve as spam, enticing clicks on promotional links. Others post @replies or automatically "retweet" in response to tweets that include a certain word or phrase. These automatic tweets are often seen as fun or silly. Some Twitter users even program Twitterbots to assist themselves with scheduling or reminders.

More on <a href="https://en.wikipedia.org/wiki/Twitterbot" target="_blank">Twitter Bot</a>

<br>

<div class="message">
  What I wanted my Twitter Bot to do?
</div>
My Twitter Bot (called "Stefa Bot"), would post a new random generated tweet from my tweets on my official Twitter account every 24h. Also, at the moment Stefa Bot can reply to tweets and mentions, but not DMs yet.

<br>

<div class="message">
  How is it done?
</div>
The basic idea of this Twitter Bot is to grab older tweets from a specific Twitter account, build a <a href="https://en.wikipedia.org/wiki/Markov_model" target="_blank">Markov Model</a> and generate a random statement. The implementation of this bot was made using <b>twitter_ebooks</b>, which is a framework for building interactive twitterbots which respond to mentions and can be found on <a href="https://github.com/mispy/twitter_ebooks" target="_blank">https://github.com/mispy/twitter_ebooks</a>.
<br>

<div class="message">
  Stefa Bot Timeline
</div>

<a class="twitter-timeline" href="https://twitter.com/stefabot">Tweets by stefabot</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>



<iframe src="//www.facebook.com/plugins/share_button.php?href=http://stefanos990.com/projects/twitter-bot&amp;layout=button_count&amp;appId=460671367340473&amp;text=Twitter Bot" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px;" allowTransparency="true"></iframe>

<iframe id="tweet-button" allowtransparency="true" frameborder="0" scrolling="no" src="http://platform.twitter.com/widgets/tweet_button.html?via=stefanos990&amp;count=horizontal&amp;url=http://stefanos990.com/projects/twitter-bot&amp;text=Twitter Bot"></iframe>
</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-58975019-1', 'auto');
  ga('send', 'pageview');

</script>