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


/* auto fill expressions */
var seed_url = $("#seed_url").val();
var status = (document.evaluate('//select[@id="importConfigEditVO.status"]/option[@selected]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).value;
var cluster = (document.evaluate('//select[@id="importConfigEditVO.clusterEnvironment"]/option[@selected]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).value;

var listing = $("#AdminEditImportConfigForm_importConfigEditVO_metadata2XPathPairs");
var desc = $("#AdminEditImportConfigForm_importConfigEditVO_templatesXPathPairs");
var expressions = $("#AdminEditImportConfigForm_importConfigEditVO_metadataExpressionPairs");

var listing_text = "JOB_LISTING_URL<=>\nJOB_TITLE<=>\nID_FROM_SOURCE<=>\nJOB_LOCATION<=>";
var desc_text = "JOB_DESCRIPTION<=>";
var expressions_text = "JOB_CATEGORY<=>jobMetadataCategory\nPOSTAL_CODE<=>jobMetadataPostalCode\nAPPLY_TO_EMAIL<=>jobMetadataJobListingEmail\nJOB_DATE<=>jobMetadataDate\nJOB_EMPLOYER<=>jobMetadataEmployer\nJOB_COUNTRY<=>jobMetadataCountry\nJOB_TITLE<=>jobMetadataTitle\nJOB_LOCATION<=>jobMetadataRawLocation\nJOB_CITY<=>jobMetadataCity\nID_FROM_SOURCE<=>jobMetadataSourceId\nJOB_SOURCE_AD_TARGET<=>jobMetadataAdTarget\nJOB_COMPENSATION<=>jobMetadataCompensation\nEXPIRE_DATE<=>jobMetadataExpirationDate\nJOB_DESCRIPTION<=>jobMetadataDescription\nEMPLOYER_INDUSTRY<=>jobMetadataIndustry\nJOB_LISTING_URL<=>jobMetadataJobListingUrl\nJOB_STATE<=>jobMetadataState";

if (!seed_url && !!listing && cluster == "ENABLED" && status == "DISABLED") {
  listing.val(listing_text);
  desc.val(desc_text);
  expressions.val(expressions_text);
}
