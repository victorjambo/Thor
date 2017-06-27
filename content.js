/*
* References
* https://blog.lateral.io/2016/04/create-chrome-extension-modify-websites-html-css
* https://scheinast.eu/javascript-generate-an-result-array-from-xpath
* https://developer.mozilla.org/en/docs/Introduction_to_using_XPath_in_JavaScript
*/
function getElementsByXpath(xpath){
  var list = new Array();
  var elements = 0;
  var xPathRes = document.evaluate (xpath, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
  var actualSpan = xPathRes.iterateNext();
  while (actualSpan) {
    list[elements] = actualSpan;
    actualSpan = xPathRes.iterateNext ();
    ++elements;
  }
  return(list);
}

var myArray = getElementsByXpath('//h1[@class="entry-title"]');
for ( var i=0 ; i < myArray.length; i++ )
{
  $(myArray[i]).html('<a href="https://www.google.com/#q='+myArray[i].textContent+'">'+myArray[i].textContent+'</a>');
}
/*
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
//test 2. to delete
var tContent = $(".blog-title").text();

alert("Hello" + xpath.textContent); // test. to delete
//test 3. use the gd xpath
var xpath = getElementByXpath('//h1[@class="entry-title"]');
//test 4. place the glassdoor url here. change victor jambo to xpath.textContent.
$(xpath).html('<a href="https://www.google.com/#q='+xpath.textContent+'">Victor jambo</a>');
*/
