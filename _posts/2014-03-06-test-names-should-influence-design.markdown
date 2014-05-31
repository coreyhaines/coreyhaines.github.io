---
layout: post
title: Thoughts on the symmetry between good test names and your object's API
---

While running [coderetreats](http://coderetreat.org/), I have the opportunity to see a lot of people working on [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway%27s_game_of_life). As we go through the day, I make comments about design, both in the large and in the small. Over the years, I've seen similar patterns pop up across many different developers. This article is one of those ideas that has come up over the years.

One of the [4 Rules of Simple Design](http://c2.com/cgi/wiki?XpSimplicityRules) is "Expresses Intent." In a lot of cases, this can be thought of as "Good Names." The idea of naming, and how it relates to the intent of your code, can be seen when looking at the symmetry between test names and the test code.

In Conway's Game of Life, a common approach is to start with a World class. Since one of the techniques we practice at coderetreat is test-driven development, they start with a test. A common starting point is that a living cell can be added. I see the following 2 tests quite often.
{% highlight ruby %}
def test_a_new_world_is_empty
  world = World.new
  assert_equal 0, world.living_cells.count
end

def test_a_cell_can_be_added_to_the_world
  world = World.new
  world.set_living_at(1, 1)
  assert_equal 1, world.living_cells.count
end
{% endhighlight %}

On the surface, these seem like reasonably-written tests. However, let's look at it from the idea that the tests should express intent. There is an obvious mismatch between the test names and the code in the test.

Let's look at the first one, since this probably the simple one that we write first.

{% highlight ruby %}
def test_a_new_world_is_empty
  world = World.new
  assert_equal 0, world.living_cells.count
end
{% endhighlight %}

The test name talks about an empty world. The test code, though, has nothing to do with an empty world. Instead, it is brutally reaching into the object, yanking out some sort of collection and counting it.

When we write our tests, we naturally spend time on our test names. We focus on describing the behavior of the system and the way we expect to use the component under test. Especially when starting a new component, we can use our test names to influence and mold our API. Think of the test as the first consumer of the component; it should interact with the object the same way as the rest of the system. Do you want the rest of the system to be reaching in and grabbing the internal collection. No, of course you don't. Instead, have the test code reflect the test name. How about something like this.

{% highlight ruby %}
def test_a_new_world_is_empty
  world = World.new
  assert_true world.empty?
end
{% endhighlight %}

This hides the internals of the object, all the while building up a usable API for the rest of the system.

Now, let's look at the second test.

{% highlight ruby %}
def test_a_cell_can_be_added_to_the_world
  world = World.new
  world.set_living_at(1, 1)
  assert_equal 1, world.living_cells.count
end
{% endhighlight %}

After the previous discussion, we can see the lack of symmetry here. The test name talks about adding to the world, but the verification step isn't looking for the cell that was added, it is simply looking to see if a counter was incremented. Let's apply the symmetry again and have the test code actually reflect what we say is being tested.

{% highlight ruby %}
def test_a_cell_can_be_added_to_the_world
  world = World.new
  world.set_living_at(1, 1)
  assert_true world.is_living_at?(1, 1)
end
{% endhighlight %}

This now adds to our API. Additional tests, of course, will flush out the behavior of these methods, but we now have begun to build up the usage pattern for this object.

We also could add a test around the #empty? method using #set_living_at.
{% highlight ruby %}
def test_after_adding_a_cell_the_world_is_not_empty
  world = World.new
  world.set_living_at(1, 1)
  assert_false world.empty?
end
{% endhighlight %}

This is another way of slowly building up the API, especially the beginnings of the #set_living_at behavior.

Focusing on the symmetry between a good test name and the code under tests is a subtle design technique. It is definitely not the only design influence that our tests can have on our code, but it can be an important one. So, next time you are flying through your tdd cycle, take a moment to make sure that you are actually testing what you say you are testing.

Thanks to <a href="https://twitter.com/fablednet">Sarah Gray</a> for proof-reading this post.
