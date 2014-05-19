---
layout: post
title: Four-Second Test Runs
---

## Qualities of Tests

When I talk to people about a test suite, I often say that they should satisfy the 3 F's:

* *Fast* - They should be fast as possible to minimize the amount of time to get your feedback.
* *Focused* - They should be focused and provide you with specific, immediate details on where the failure is.
* *Full* - They should fully cover your system.

When people ask me how fast their test suite should be, my general answer is "faster." Whether you do TDD, test-first, test-while or test-after, being able to change your code and quickly see whether you've broken anything is very important from a workflow perspective. Whenever you have to sit and wait to find out the results of your change, your flow is broken.

One way to achieve the "Fast" requirement is by using certain isolation techniques. In Rails, the greatest way to achieve a first level of isolation is simply by removing the dependency your domain logic has on the underlying Rails framework. There are many benefits of isolation, but I want to talk about the obvious benefit of a major side-effect, fast tests: your workflow isn't interrupted.

In DHH's post, Slow Database Test Fallacy, he talks proudly about their use of the spring application loader, allowing him to run a specific model's tests in "just under 4 seconds from start to finish." He then follows up with the statement "Plenty fast for a great feedback cycle!" This definitely seems like a reasonable perspective. However, whenever I hear claims about time and its effects, I like to do what I call the *Yellow Submarine Test*: see the time and see exactly how it feels.

I pulled down an application I've worked on and decided to run my tests.
<aside class='callout highlight'>
*Note* This specific model doesn't need 52 cases and 111 assertions. To keep a like-like comparison, though, I duplicated my tests to have around the same number.
</aside>

To show 4 seconds, I had to alter my tests to add a sleep to increase the time for the tests (this is why there is a pause at the end). Here is what 4 seconds looks like.
<iframe width="420" height="315" src="//www.youtube.com/embed/rQOsJEzxuZo" frameborder="0" allowfullscreen></iframe>

Now, here is my actual timing using a very simple <a href="/posts/active-record-spec-helper/">"only load active record" technique</a>: 2.5 seconds. When recording with Quicktime, it adds half a second to the run, so it actually takes around 2 seconds. This is still a bit slow, though.
<iframe width="420" height="315" src="//www.youtube.com/embed/00OSP-5LrVs" frameborder="0" allowfullscreen></iframe>

Now, even the 2 or 2.5 second run is quite a pause. When working in a good flow that includes writing unit tests, it can definitely pull me out of my workflow. When writing my domain code, the business logic, I find that a lot of the code doesn't actually need to load up my database. By writing my domain logic in pure Ruby, without a dependency on the Rails framework, the flow looks something like this.
<iframe width="420" height="315" src="//www.youtube.com/embed/vV0GEE7pd1g" frameborder="0" allowfullscreen></iframe>

<aside class='callout highlight'>
*Reminder* this is about half a second slower because Quicktime adds that when doing recording on my laptop.
</aside>

Whether you write your tests first or your tests last, the feedback time is important. Let's look again at the "Plenty fast for a great feedback cycle!" run.
<iframe width="420" height="315" src="//www.youtube.com/embed/rQOsJEzxuZo" frameborder="0" allowfullscreen></iframe>

Now let's look again at the feedback cycle I have when I am working on business logic.
<iframe width="420" height="315" src="//www.youtube.com/embed/vV0GEE7pd1g" frameborder="0" allowfullscreen></iframe>

The four-second test run is obviously okay for some people, but I prefer to keep my flow uninterrupted and my feedback loop very small. As with everything, the choice is yours and highly dependent on your style.













