# TwitchChatBot
This is a basic bot to interact with chat on Twitch

I have this running on a raspberry pi zero but it should be able to work with any wifi
enabled raspberry pi.

Get Environment Variables
To start, you’ll need three environment variables:

USERNAME

The account (username) that the chatbot uses to send chat messages. This can be your Twitch account. Alternately, many developers choose to create a second Twitch account for their bot, so it's clear from whom the messages originate.

CHANNEL_NAME

The Twitch channel name where you want to run the bot. Usually this is your main Twitch account.

PASSWORD	

The token to authenticate your chatbot with Twitch's servers. Generate this with https://twitchapps.com/tmi/ (a Twitch community-driven wrapper around the Twitch API), while logged in to your chatbot account. The token will be an alphanumeric string. DO NOT INCLUDE OATH:

Example password

oath:twitch12345

What you use as password

twitch12345

