---
layout: post
title: Some thoughts on pair-programming styles
---

Over the past 10 years of practicing extreme programming, I've done a lot of pairing; I've worked in traditional pairing styles, and I've written code with someone in less-traditional places. I've worked with people who have been pairing much longer than I have, and other who had never written code like this before.

And over the past 5 years of facilitating coderetreat workshops, I've watched a lot of people in different pair-programming situations. I've watched people who have never written code with someone else, and I've looked over the shoulders of people who have been writing code in pairs for years.

All of this time spent both doing and watching has given me some thoughts around the technique. So, I thought I would write down some observations and thoughts I've developed over the years regarding pair-programming, specifically around a couple different styles.

## Driver-Navigator

Traditionally, pair-programming has been introduced via the [Driver-Navigator](http://guide.agilealliance.org/guide/pairing.html) form. In this form, one member, The Driver, has the keyboard and control of the input. Their job is to type and focus on the minute-to-minute coding. The other member is The Navigator. Their job is to pay attention to the code being written, but keep the larger picture in mind, guiding the driver in the right direction. Frequently, the roles should be swapped.

Unfortunately, too often this form of pair-programming leads to what I call the "Driver-Twitterer" style of collaboration. In this mode, the person with the keyboard is writing code while the other person watches intently for a short time. Then, after a bit, the navigator starts to lose interest. Perhaps the driver isn't talking, perhaps the navigator doesn't want to disturb them. Sometimes I've seen where the driver says "just a second, I've got an idea," and then proceeds to code in silence for minutes on end. As expected, this can have the effect of boring the navigator. So, what do they do? Naturally, they check twitter, or email, or some other non-code-focused task.

Now, the above situation isn't what is *supposed* to happen, but I see it end up like that way too often. As with every aspect of development, communication is key here. But, without practice, driver-navigator level of communication can be difficult to achieve. In order for this style to work, the pair needs to have good communication habits, constantly keeping the other abreast of what thoughts are going through their head. Unfortunately, this level of communication isn't necessarily built-in to a new pair. Because of this intense communication requirement, I generally consider the driver-navigator style of pair-programming to be a more intermediate level style, and I guide new people away from it.

It is quite common for a coderetreat workshop to be a person's first time pair-programming, their introduction to the practice of writing code in an intense collaborative style. Because of this, I like to introduce them with a pairing form that has the necessary level of communication built-in to the practice. The style I introduce is called "Ping-Pong Pairing."

## Ping-Pong Pairing

There are two basic forms of ping-pong, but they both share on very important aspect: both members are writing code frequently. Because of this, I stress the importance of having two sets of live input devices, one for each participant. So, there would be two keyboards and two mouses, both live. I find that having this setup minimizes the context shift when switching who is typing. Having two live input devices isn't a requirement, of course, but it definitely can help smooth over some inherent friction that can arise if you have to pass the keyboard back and forth.

The first style of ping-pong is where one member takes on the role of test writer, and the other takes on the role of getting the tests to pass. I like to call the test writer the **"test redder"** and the one getting them to pass the **"test greener"**. The table below illustrates the flow of control.

| member 1   | member 2        |
| ---------- | --------------- |
| write test |                 |
|            | make test green |
| write test |                 |
|            | make test green |

The second style of ping-pong is where the role of "test redder" passes between participants. This is done by having the first member write a test, then control is passed to the other member. That person gets the test to pass, to turn green, then they are immediately responsible for writing the next test. The table below illustrates the flow of writing.

| member 1        | member 2        |
|-----------------|-----------------|
| write test      |                 |
|                 | make test green |
|                 | write next test |
| make test green |                 |
| write next test |                 |
|                 | make test green |
|                 | write next test |

The primary difference between these two is that in the first form, the role is stable, but control is passed. In the second, the role is passed along with control. Both can be effective and great ways to introduce people to pair-programming.

## Which style should you choose?

If you are working in an experienced pairing, both members are experienced at some form of collaborative code writing, then it doesn't matter which style you use. In fact, it is common to see all styles used through a pairing session, cycling through all types. With experience, participants generally have developed the level of communication necessary for working in whatever form is useful at the moment, and the moments and pairing needs change throughout a programming session.

As I mentioned above, though, I consider driver-navigator a more intermediate style. So, if one, or both, of the participants are new to pair-programming, then ping-pong can be a fantastic way to introduce the concepts. I generally recommend a specific ping-pong style based on the level of testing experience of the members.

* One member has experience writing tests, but the other doesn't = Form 1 

  Beginning with having the experienced person writing most of the tests is the most effective. Over time, the less-experienced person can start writing some tests. By watching the tests being written, though, they can learn the thought process behind test-driven development.

* Both members have experience writing tests = Form 2

  I generally recommend the second form, where control of input is passed back and forth. This gives a good workout of both roles in a pairing situation.

Pairing is a fantastic way to develop software. I've written some of my best code, my best systems, when most of it was written with two people's hands on a keyboard together. At the end of a coderetreat, it is very common to get the feedback from first-timers that they didn't expect working in a pair to be so productive. Pair-programming is listed frequently in the closing questions as both surprising and what they will take with them going forward.

