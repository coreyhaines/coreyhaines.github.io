---
layout: post
title: Speeding Up Active Record Tests
---

It is no secret that I am a huge proponent of fast tests. When doing any form of test-first development, the length of the feedback cycle when running individual tests should be as fast as possible. The design techniques heavily associated with test-driven development (TDD), in particular, rely on taking small steps, teasing out your design via constant and focused refactoring. To do this effectively, it is essential that you the process of running individual tests, the ones for what you are working on right now, be so fast it would be silly not to run them constantly.

Of course, when building an application with Ruby on Rails, the test speed has always been a huge problem. It hasn't necessarily been a problem with the individual tests, but rather with the startup time for Rails. This is due to the attitude of the Rails team that individual tests should load up your entire environment, rather than providing support and guidance for writing tests against individual, isolated parts of your application. The recent release of Rails 4.1 including the Spring pre-loading system to help with startup time. This is the latest in a long-line of application pre-loaders and has finally been bundled into the core distribution.

While this helps startup time, it is really just a band-aid over the real problem: loading up your entire environment when running a microtest. By loading up your entire environment, and relying on the auto-loader, you are losing one of the most important parts of test-driven development: design feedback. Often people say that TDD is a design technique, rather than a verification technique. The design feedback provided by TDD can be understood in many ways, but I like to explain it in a simple statement:

"If you find something difficult to test, change your design to make it easy to test."

If this seems a bit overly simplistic, I recommend you watch Michael Feathers great talk called *[The Deep Synergy Between Testability and Good Design](http://vimeo.com/15007792)*. In it he discusses how many instances of code smells are naturally dealt with by focusing on testability.

This post isn't about that, though, but rather a technique for speeding up tests that are dependent on ActiveRecord and the database. While there is a lot of information and talk about testing the parts of your system that are independent of the Rails framework (and, frankly, most of your business logic shouldn't be dependent on it), there isn't a lot about how to make your tests truly effective and enjoyable when testing the parts that are integrated with parts of Rails.

But, wait, you say, aren't unit tests isolated from the database? If they touch the database, you aren't writing unit tests anymore! Perhaps, perhaps. But, this post is also not about the meaning of the term "unit tests", or even if we should all switch to the term "[micro tests](http://anarchycreek.com/2009/05/20/theyre-called-microtests/)". I hold that almost of all of your code should be isolated from the database with one exception: code that explicitly is writing and making sql queries. In this case, ActiveRecord scopes and other code that explicitly updates records in the database.

I love scopes. I find them to be a great way to write code emphasizing "Expresses Intent" from the 4 rules of simple design. In fact, for anything other than simple lookups using an id or a single field, I almost always force my code into using scopes. TDD naturally leads to heavy scope usage, but that is another topic.




