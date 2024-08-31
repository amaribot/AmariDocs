# 🚀 Getting Started

::: tip
If you are having any issues setting up features have a read through FAQ.
:::

#### This guide will cover the basics you need to do to get started with AmariBot.

## 1. Setup Prefix

If you want the bot to respond to the prefix `?`, you can do so using `:?prefix ?`. The prefix cannot be longer than 6 characters.

## 2. Setup Level Roles

Users can earn roles by reaching certain levels, this can be set up using the `:?rlevel` command. We can add roles using `:?rlevel add <level> <@role>`.

When setting up `rlevel` rewards make sure the AmariBot role is above all the roles you are assigning:

![image](/levelRoles.png "Level Roles")

## 3. Custom Announcements

Server admins can set up custom announcements for when users level up. Using the `:?announce` command you can set up custom announcements for each level or set up an announcement for all levels. You can use `:?announce custom <text>` to set up the message. The following shows an example of the command to use and the output for the command, `:?announce custom CONGRATS You are now level {level}!!!`

![image](/levelup.avif "Level Up")

Custom announcements can be also used to set up announcements for each level, this will allow you to mention the role the user earns for that level. Example of command, `:?announce level add <level> <text>` will allow you to set up the custom announcement for specific levels. You can also check which levels have custom announcements using `:?announce level show`

#### Announce Syntax

For a full list of syntax available for announce, check out the [Announcement Syntax](/features/announcements.html#variables) page.

## 4. Blacklisting Channels & Roles

Everyone has those spam command channels, so you can use the `:?blacklist` command to stop users from gain EXP from all the spam messages. Using `:?blacklist` you can either blacklist channels or roles. To add channels to the blacklist run `:?blacklist add #channel` and to add a role you can run `:?blacklist add @role`

## 5. Weekly Leaderboard

Weekly command can be used to track user activity over a smaller period of time, we usually set this up to give out rewards but you can use it for what ever you want. If you want to set up weekly you can use `:?weekly` on and use `:?weekly winners` to get a nice image of the top 3 winners.

![image](/weeklyWinners.avif "Leaderboard")

This is just a few of the features AmariBot offers, but this guide allows you to set up the cores features and from here you can [invite the bot](https://amaribot.com/invite) and check out all the other features.
