---
layout: post
title: Short-lived Branches
---

<aside class='callout highlight'>
<header>tl;dr</header>

What if a branch had only a day to live? What if you had a single day to either complete your feature or start over the next day? How would this impact your coding? Sometimes you would work hard to cut features in small-enough sizes. For "longer" features that take n days, you would have n-1 days to use as drafts for it, then a day to complete the final version.
</aside>

tl;sr (too long; still read)

Suppose you have a feature that you've estimated would take about 4 days to complete. Monday comes around, and you begin development on it.

Now consider a familiar workflow when developing this feature.

After exploring the requirements and possible designs, you create a branch and start writing some code. By the end of the day, you've made some progress, ready to start again the next morning. Tuesday morning rolls around, and you have an epiphany in the shower of a better solution. Getting into work, you begin making some adjustments to the code you wrote the day before. Of course, Monday's work wasn't really done with this new thought in mind, so you have to decide whether to put some shims in for your new idea or just keep going with the approach from the day before. Already, a single day in, you've got some technical debt built up: decisions that were made at the beginning of the feature are now negatively influencing your design. But, of course, you keep going. You could take the time to refactor the previous day's work, but that would take time you aren't sure you want to spend right now.

Now consider a different workflow.

After exploring the requirements and possible designs, you create a branch and start writing some code. By the end of the day, you've made some progress, ready to continue the next morning. Tuesday morning rolls around, and you have an epiphany in the shower of a better solution. Getting into work, you notice the work from yesterday has been deleted, so you create a branch and start working. You reexplore the requirements and possible designs, now influenced by the learnings and thoughts you had the previous day plus the time you had to think in the shower. While the code you written the day before is gone, it only takes an hour, or so, to get back to where you were. You actually end up in a better place, since you've had some insights into the design that will make it simpler.

<aside class='callout highlight'>
This idea originally started as a thought experiment based on talks with Michael Feathers and others about code lifetime and churn, combined with my experiences running coderetreat workshops, where we actively delete code and start afresh. Over time, though, my thoughts have become more concrete, and I think this could have some great outcomes on our code.
</aside>

## So, what if branches had only a day to live, disappearing each and every day?

I'm going to write up some more thoughts about the effect, but the core idea is that you could accomplish a task in the same amount of time with better code quality.

If you have a task that you think is going to take you 4 days to complete, you could do 1 of 2 things: spend 4 days coding away; or, you can have 3 days to write drafts, effectively exploring the space, then spend a single day writing your final version with much better quality of code based on 3 spikes.

At first, this seems like a strange, even nonworkable, idea; it is easy to immediately come up with situations where this absolutely wouldn't work. For each of those examples that come to mind, I would encourage you to take some time really thinking about it before you form an opinion. If you didn't have a choice, how would your code and habits change?

I'm going to be writing more about this, exploring some of the benefits (and dangers) with this idea, but I wanted to get this out in the world.
