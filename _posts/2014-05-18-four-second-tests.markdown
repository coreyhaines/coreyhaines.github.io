---
layout: post
title: Test Speed Can Be Important
---

## Qualities of Tests

When I talk to people about their test suite, I often will say that they should satisfy the 3 F's:
* Fast - They should be fast as possible to minimize the amount of time to get your feedback.
* Focused - They should be focused and provide you with specific, immediate details on where the failure is.
* Full - They should fully cover your system.

One way to achieve the "Fast" requirement is by using certain isolation techniques. In Rails, the greatest way to achieve a first level of isolation is by removing the dependency your domain code has on the underlying Rails framework.

There are many benefits of the isolation that , but I want to talk about the obvious benefit of fast tests: your workflow isn't interrupted.

When people ask me how fast their test suite should be, my general answer is "faster." Whether you do TDD, test-first or test-while or test-after, being able to change your code and quickly see whether you've broken anything is very important from a workflow perspective.

In DHH's post, Slow Database Test Fallacy, he talks proudly about their use of the spring application loader that allows him to run a specific model's tests in "just under 4 seconds from start to finish." He then follows up with the statement "Plenty fast for a great feedback cycle!" This definitely seems like a reasonable perspective. However, whenever I hear claims about time and its effects, I like to do what I call the *Yellow Submarine Test*: run the time and see just how that feels.

So, I pulled down an application I've worked on and decided to run my database tests.
Note: This specific model doesn't need 52 cases and 111 assertions. To keep a like-like comparison, though, I duplicated my tests to have around the same number.

To show 4 seconds, I had to alter my tests to add a sleep to increase the time for the tests (this is why there is a pause at the end). Here is what 4 seconds looks like.

This is 2.5 seconds. When running without Quicktime running, it generally is around 2 seconds. This is still a bit slow, though.

Now, even the 2 or 2.5 second run is quite a pause. For your actual domain code, you don't actually need to load up your database. By writing your domain code in pure Ruby, without a dependency on the Rails framework, the flow looks something like this.

Now, this is even a bit slower because Quicktime adds a bit when doing recording on my laptop.

Whether you write your tests first or your tests last, the feedback time is important. Let's look again at the "Plenty fast for a great feedback cycle!" run.


Now let's look again at my run.
















