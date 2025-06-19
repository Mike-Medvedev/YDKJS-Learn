## Appendix A

- In javascript all primitive values are passed by value
- var x = 5; var y = x; var x = 10; x is 10 but y is still 5
- all object values are passed by reference
- var someObj = {data: "xyz"}
- var copyObj = someObj
- someObj.data = "abc"
- copyObj.data is also changeed to abc
