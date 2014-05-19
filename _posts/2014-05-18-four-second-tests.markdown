---
layout: post
title: Four-Second Test Runs
---

## Qualities of Tests

When I talk to people about a test suite, I often say that they should satisfy the 3 F's:

* **Fast** - They should be fast as possible to minimize the amount of time to get your feedback.
* **Focused** - They should be focused and provide you with specific, immediate details on where the failure is.
* **Full** - They should fully cover your system.

When people ask me how fast their test suite should be, my general answer is "faster." Whether you do TDD, test-first, test-while or test-after, being able to change your code and quickly see whether you've broken anything is very important from a workflow perspective. Whenever you have to sit and wait to find out the results of your change, your flow is broken.

One way to achieve the "Fast" requirement is by using certain isolation techniques. In Rails, the greatest way to achieve a first level of isolation is simply by removing the dependency your domain logic has on the underlying Rails framework. There are many benefits of isolation, but I want to talk about the obvious benefit of a major side-effect, fast tests: your workflow isn't interrupted.

In DHH's post, Slow Database Test Fallacy, he talks proudly about their use of the spring application loader and how that allows him to run a specific model's tests in "just under 4 seconds from start to finish." He then follows up with the statement "Plenty fast for a great feedback cycle!" This definitely seems like a reasonable perspective. But is it? Whenever I hear claims about time and its effects, I like to do what I call the *Yellow Submarine Test*: see the time and see exactly how it feels.

I pulled down an application I've worked on and decided to run my tests.
<aside class='callout highlight'>
*Note* This specific model doesn't need 52 cases and 111 assertions. To keep a like-like comparison, though, I duplicated my tests to have around the same number.
</aside>

To show 4 seconds, I had to alter my tests to add a sleep to increase the time for the tests (this is why there is a pause at the end). Here is what 4 seconds looks like.
<iframe width="420" height="315" src="//www.youtube.com/embed/rQOsJEzxuZo" frameborder="0" allowfullscreen></iframe>

For me, this pause is too much, especially when running it frequently. For every change I make, I like to run the tests to make sure I haven't broken any previous functionality. Waiting 4 seconds each time, with this sort of pause, can be frustrating. DHH seems to imply that this speed is plenty fast as a trade-off for the increased complexity any sort of isolation brings. Let's see if we can do better.

Let's take a look at using my very simple <a href="/posts/active-record-spec-helper/">"only load active record" technique</a>, which doesn't require any changes to your design, and, thus, no added complexity. In fact, it can help minimize complexity by highlighting unnecessary or too many dependencies.
<iframe width="420" height="315" src="//www.youtube.com/embed/00OSP-5LrVs" frameborder="0" allowfullscreen></iframe>

When recording with Quicktime, it adds half a second to the run, so it actually takes around 2 seconds. This is still a bit slow, though. For me, even the 2 or 2.5 second run is still quite a pause when I'm working. When in a good process that includes writing unit tests, it can definitely pull me out of my flow.

By doing very small changes to my design, though, I can improve this. When writing my domain code, it generally doesn't actually need to load up my database. By writing my business logic in pure Ruby, without a dependency on the Rails framework, the flow looks something like this.
<iframe width="420" height="315" src="//www.youtube.com/embed/vV0GEE7pd1g" frameborder="0" allowfullscreen></iframe>

<aside class='callout highlight'>
*Reminder* this is about half a second slower because Quicktime adds that when doing recording on my laptop.
</aside>
By emphasizing the separation of concerns between my business logic and the underlying persistence-layer or whole web framework, I can achieve a much nicer flow, a pretty good feedback cycle.


Whether you write your tests first or your tests last, the feedback time is important. Let's look again at the "Plenty fast for a great feedback cycle!" run.
<iframe width="420" height="315" src="//www.youtube.com/embed/rQOsJEzxuZo" frameborder="0" allowfullscreen></iframe>

Now let's look again at the feedback cycle I have when I am working on business logic.
<iframe width="420" height="315" src="//www.youtube.com/embed/vV0GEE7pd1g" frameborder="0" allowfullscreen></iframe>

The four-second test run is obviously okay for some people, but I prefer to keep my flow uninterrupted and my feedback loop very small. As with everything, the choice is yours and highly dependent on your style.

The original code for this can be seen at <a href="https://github.com/coreyhaines/bawch">my video series' repository</a>.











