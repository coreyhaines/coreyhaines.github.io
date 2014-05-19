---
layout: post
title: We don't (always) need no stinkin' testing framework
---
## So much setup
So, for some crazy reason, I like writing small collection implementations. I don't worry too much about performance, I'm just writing them as small exercises when I want to write something. Because of their size and fairly straight-forward(haha) requirements, I can use them to experiment with how I write tests. But, often I find setting up a testing framework to feel so heavy-weight.

*what a pain!*

I also use simple stacks and queues as introductory challenges when I'm introducing people to the idea of automated unit testing, especially moving to test-driven development. But, there is a bit of a chicken-and-egg situation when first starting: writing tests requires introducing a testing framework, but testing frameworks often assume some base knowledge of testing by hiding a lot of the underlying principles.

*hard to know where to start!*

Helping beginners learn to program also has its rewards. When people are still trying to understand the very basics, even things like classes or dependencies can be confusing. Having a test framework potentially diverts us to talking about non-beginner or non-relevant topics.

*yak-shaving galore!*

## When all you have are frameworks, every problem looks like a DSL
Learning a new testing framework often can involve some form of a DSL. True, it might be as "simple" as learning:
* name your methods in the form testXXX;
* don't forget the call to assert_XXX.

or it might be more complex:
* method definitions? Oh, we don't really use those, we have a DSL;
* oh, assertions are actually done by calling methods on the object you are testing.

When you've been doing automated unit testing for a while, and you've played with different tools, it can be easy to forget that a lot of the testing tool concepts aren't clear and obvious.

## Testing Framework? We don't (always) need no stinkin' testing framework.
So, what's to do when we need something quick, or we don't want to introduce unnecessary complexity? Get back to the basics! To understand that, we can ask ourselves what is at the core of a testing framework? This isn't actually the right question, though. Let's get even more basic. What is at the heart of testing? Forget the automated part and think about what you do when you are building without automated tests.

Let's investigate this with the beginnings of a stack. Put the following into a file and run it.

```
  stack = Stack.new
  puts "New stack size is #{stack.size}"
```

Once we get this passing, we can write another test.

```
  stack = Stack.new
  stack.push 1
  puts "Stack size after pushing is #{stack.size}"
```

Now run this script and see if the messages make sense. We have two tests now.

And so on. The problem here is pretty obvious: this method is fairly inefficient. Every time you run, there is a mental step to interpret the messages. As the number of tests get larger, the feedback cycle to make sure you broke something gets larger and longer.

This is one of the standard arguments for having an automated test suite, of course. But, we are just playing around with building a stack. Or, we don't really know how to work with a testing framework. Or, lots of different reasons. What to do?

Let's go back to the core of testing. We run the script, look at the output and compare it to our mental checklist. AHA! Let's just make the computer do that. Using the standard "programming by wishful thinking" methodology, let's rewrite our test to look like this.

```
  stack = Stack.new
  assert_equal 0, stack.size, "New stack should have no elements"
```

Do you need anything fancy to run this? Not really, you just need a method to compare the two values. So, when in doubt, or you want a quick way to run some automated tests, just give yourself the following method:

```
def assert_equal(expected, actual, message)
  if expected != actual
    raise "Expected #{expected}, got #{actual}\n#{message}"
  end
end
```

This simple method can help you quickly get up and running, allowing you to focus on the problem your solving, rather than the possible complexities of a testing framework.

So, the next time you are playing around, or learning a new language, or teaching someone the idea of automated testing, ask yourself if you need anything more than this simple method and hold off on bringing in something larger.


Thanks to <a href="https://twitter.com/fablednet">Sarah Gray</a> for proof-reading this post.
