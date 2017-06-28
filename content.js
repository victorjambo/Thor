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

//get an array of the elements to be modified
var myArray = getElementsByXpath('//table[@class="previewResult"]/tbody/tr/td[@class][1]/div[1]/span[2]');
for ( var i=0 ; i < myArray.length; i++ )
{
	//Changes the text content inside the selected element
  $(myArray[i]).html('<a target="_blank" href="https://www.glassdoor.com/job-listing/JV.htm?jl='+myArray[i].textContent+'">'+myArray[i].textContent+'</a>');
}
