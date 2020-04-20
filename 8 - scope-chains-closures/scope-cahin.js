function foo() {
  var bar;
  function zip() {
    var quux;
  }
}

// Example of Nested scope which will create a chain like the following.

/**
 * The scope chain you created now looks like this:

    (global)
        ↑
        |
      foo()
     var bar
        ↑
        |
       zip()
     var quux

By following the arrows, we can see zip() has access to var bar, but not the
other way around.

 */