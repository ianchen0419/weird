/**
 * jQuery
 * @description
 * 
 * 可以使用`$`或是`jQuery`呼叫jQuery。
 * 
 * `$`等於`jQuery`等於`new jQuery.fn.init()`。 
 */

// var q = $("ul.people li") // new jQuery.fn.init();

var q = $("ul.people li").addClass("newClass").removeClass("people"); // Method C haining


console.log(q); // jQuery.fn.init(3)