/**
 * All scope chain ends at global scope in nodejs
 * (global)
           ↑
           |
       someFunc()
           ↑
          / \
         /   \
        /     \
    inner()  inner2()
               ↑
               |
             foo()
 */