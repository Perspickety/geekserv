/*To Do:
	- hNDN should be shrunk and made into mobile hamburger menu style for small scrolled?
*/
//Erik's Standard Functions
function dGet(elt){
	return document.getElementById(elt);}
function dSetC(cls, attr, val){
	var elts = document.getElementsByClassName(cls);
	for(var i=0; i<elts.length; i++)
		elts[i][attr] = val;}
function dSetCSty(cls, attr, val){
	var elts = document.getElementsByClassName(cls);
	for(var i=0; i<elts.length; i++)
		elts[i].style[attr] = val;}

var hCDOrig, hNDOrig;

function onStart(){
	var hCD = dGet("hdrCntctDiv"), hNDM = dGet("hdrNavDivMenu"), hNDN = dGet("hdrNavDivNav");
	hCDOrig = hCD.innerHTML;
	hNDNOrig = hNDN.innerHTML;
	eltWillHvrHu(hCD, true);
	eltWillHvrHu(hNDN, true);
	hCD.addEventListener("click", cntctClick);
	hNDM.addEventListener("click", menuPop);
	dGet("cntctDiv").setAttribute("data-wFoc", "0");
	pageReorg();
	//_googWcmGet(googDynPhnRep, '1-206-963-4550');
	}
	
	
function reorg(){
	var w = document.documentElement.clientWidth, s = window.pageYOffset;
	var hNDM = dGet("hdrNavDivMenu"), hNDN = dGet("hdrNavDivNav"), hCD = dGet("hdrCntctDiv");
	document.body.style.fontSize = 	(w > 1301 ? "18px" : w > 953 ? "17px" : w > 739 ? "19px" : w > 457 ? "23px" : "19px");
	dGet("hdrHidLogoBckDiv").style.width = (w > 809 ? "491px" : parseInt(491-(809-w)/1.59) + "px");
	dGet("hdrHidLogoBckDiv").style.height = (w > 739 ? "47px" : parseInt(89-(743-w)/9) + "px");
	dGet("hdrNavDiv").style.marginTop = (w > 739 ? "13px" : "7px");
	dGet("hdrNavDiv").style.fontSize = (w > 457 ? "127%" : "113%");
	hCD.style.marginTop = (w > 739 ? "4px" : w > 457 ? parseInt(23-(739-w)/14.84) + "px" : "4px");
	hCD.style.marginRight = (w > 739 ? "4px" : w > 457 ? parseInt(43-(739-w)/7.23) + "px" : "4px");
	
	/*dSetC("cntctIn", "onfocus", (w > 739 ? function(){} : function(){}); //Still needs appropriate function, or a better way of expressing this idea!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	dSetC("cntctIn", "onblur", (w > 739 ? function(){} : function(){});*/
	
	hNDM.style.display = (w > 997 ? "none" : w > 739 ? "inline-block" : "none");
	hNDM.setAttribute("data-state", "1");
	//hNDM.setAttribute("data-typ", (s ? "2" : "1"));
	menuPop();
	hNDN.style.position = (w > 997 ? "initial" : w > 739 ? "fixed" : "initial");
	hNDN.style.border = (w > 997 ? "initial" : w > 739 ? "3px solid dimgray" : "initial");
	dGet("bdyPrntDiv").style.paddingTop = (w > 739 ? "109px" : w > 457 ? "139px" : "109px");
	dSetCSty("bdyDiv", "width", (w > 941 ? "61%" : w > 743 ? "73%" : w > 457 ? "83%" : "86%"));
	dSetCSty("tstiPic", "width", (w > 743 ? "175px" : w > 457 ? "150px" : "97px"));
	if(w <= 997 && w > 739){ //Mid-size
		var vbs = hNDN.getElementsByClassName("verbar");
		for(var i=0; i<vbs.length; i++)
			vbs[i].innerHTML = "<br>";
		var anchs = hNDN.getElementsByTagName("A");
		for(var i=0; i<anchs.length; i++)
			anchs[i].style.color = "dimgray";
		eltWillHvrHu(hNDN, false);
		hNDN.style.backgroundColor = "white";
		hNDN.style.color = "dimgray";
		hNDN.style.top = "-" + (hNDN.offsetHeight*2) + "px";
		hNDN.style.left = (hNDM.offsetLeft + hNDM.offsetWidth/2 - hNDN.offsetWidth/2 - 1) + "px";}
	else{
		hNDN.innerHTML = hNDNOrig;
		eltWillHvrHu(hNDN, true);
		hNDN.style.backgroundColor = "initial";
		hNDN.style.color = "white";}
	if(w <= 740 && window.pageYOffset > 10){ //Small and scrolled
		hCD.removeEventListener("click", cntctClick);
		hCD.style.backgroundColor = "initial";
		hCD.style.border = "none";
		hCD.style.boxShadow = "none";
		hCD.style.marginTop = "0px";
		hCD.style.marginRight = "0px";
		hCD.innerHTML = dGet("hdrCntctSmlDiv").innerHTML;
		eltWillHvrHu(hCD, false);
		dGet("hdrNavDiv").style.display = "none";
		if(w > 457){
			dGet("gslogo").style.width = parseInt(423-((739-w)*0.4539)) + "px";
			dGet("hdrDiv").style.height = "47px";
			dGet("hdrHidLogoBckDiv").style.height = "46px";
			dSetCSty("cntctIcn", "height", "31px");}
		else{
			dGet("gslogo").style.width = parseInt(317-((457-w)*0.7477)) + "px";
			dGet("hdrDiv").style.height = "43px";
			dGet("hdrHidLogoBckDiv").style.height = "41px";
			dSetCSty("cntctIcn", "height", "27px");}}
	else{
		dGet("gslogo").style.width = (w > 809 ? "467px" : parseInt(467-((809-w)*0.6286)) + "px");
		if(!hCD.hasAttribute("onclick"))
			hCD.addEventListener("click", cntctClick);
		hCD.style.backgroundColor = "#f2800d";
		hCD.style.border = "3px solid white";
		hCD.style.boxShadow = "3px 2px 2px dimgray";
		hCD.style.marginTop = (w > 739 ? "4px" : w > 457 ? parseInt(23-(739-w)/14.84) + "px" : "4px");
		hCD.style.marginRight = (w > 739 ? "4px" : w > 457 ? parseInt(43-(739-w)/7.23) + "px" : "4px");
		hCD.innerHTML = hCDOrig;
		eltWillHvrHu(hCD, true);
		dGet("hdrNavDiv").style.display = "inline-block";
		dGet("hdrDiv").style.height = "initial";}
	var fD = dGet("ftrDiv");
	if(dGet("bdyPrntDiv").offsetHeight + dGet("ftrDiv").offsetHeight < document.documentElement.clientHeight){
		fD.style.position = "fixed";}
	else{
		fD.style.position = "initial";}}

function googDynPhnRep(nFrm, nLnk){
	//nFrm should be of format 1-8XX-XXX-XXXX
	//nLnk should be of format +18XXXXXXXXX;
	//phLnk class denotes that it's an anchor with our tel: link
	//phNum class denotes that it's a parent tag for text of our phone number
	dSetC("phLnk", "href", "tel:"+nLnk);
	dSetC("phNum", "innerHTML", nFrm.replace(/-/g, "."));}
		
function cntctClick(){
	var cDiv = dGet("cntctDiv"), w = document.documentElement.clientWidth, h = document.documentElement.clientHeight;
	cDiv.style.display = "inline-block";
	cDiv.style.top = (h/2 - cDiv.clientHeight/2) + "px";
	cDiv.style.left = (w/2 - cDiv.clientWidth/2) + "px";}
	
	
function cntctSubClick(){
	dSetC("cntctIn", "value", "");
	dGet('cntctDiv').style.display = "none";}
	
	
function menuPop(){ //When you click the menu button
	var hND = dGet("hdrNavDiv"), hNDM = dGet("hdrNavDivMenu"), hNDN = dGet("hdrNavDivNav");
	if(hNDM.getAttribute("data-state") == "0"){
		if(hNDM.getAttribute("data-typ") == "1"){
			hNDM.setAttribute("data-state", "1");
			hND.style.marginTop = "7px";
			hND.style.lineHeight = "173%";
			eltWillHvrHu(hNDM, false);
			hNDM.style.width = (hNDN.offsetWidth-10) + "px";
			hNDM.style.border = "3px solid dimgray";
			hNDM.style.borderBottom = "none";
			hNDM.style.borderRadius = "7px 7px 0px 0px";
			hNDM.style.backgroundColor = "white";
			hNDM.style.color = "dimgray";
			hNDN.style.left = hNDM.offsetLeft + "px";
			hNDN.style.borderTop = "none";
			hNDN.style.top = (hNDM.offsetTop + hNDM.offsetHeight - 1) + "px";}
		else{
			return;}}
	else{
		hNDM.setAttribute("data-state", "0");
		hND.style.marginTop = "13px";
		hND.style.lineHeight = "initial";
		eltWillHvrHu(hNDM, true);
		hNDM.style.width = "initial";
		hNDM.style.border = "2px solid dimgray";
		hNDM.style.borderRadius = "7px";
		hNDM.style.backgroundColor = "initial";
		hNDM.style.color = "white";
		hNDN.style.top = "-" + (hNDN.offsetHeight*2) + "px";}}
		
function eltWillHvrHu(elt, will){
	if(will){
		elt.addEventListener("mouseenter", hvrHu);
		elt.addEventListener("mouseout", hvrHu);}
	else{
		elt.removeEventListener("mouseenter", hvrHu);
		elt.removeEventListener("mouseout", hvrHu);}}

function hvrHu(evOb){
	var cT = evOb.currentTarget;
	var oldBG = cT.getAttribute("data-bg"), newBG = cT.getAttribute("data-bgNxt"), oldHu = cT.getAttribute("data-hu"), newHu = cT.getAttribute("data-huNxt");
	cT.style.backgroundColor = newBG;
	cT.style.color = newHu;
	cT.setAttribute("data-bg", newBG);
	cT.setAttribute("data-bgNxt", oldBG);
	cT.setAttribute("data-hu", newHu);
	cT.setAttribute("data-huNxt", oldHu);}
	
function svcClk(e, notMe){
	var Ds = document.getElementsByClassName("svcDesc"), Hs = document.getElementsByClassName("svcHs");
	for(var i=0; i<Ds.length; i++){
		Ds[i].style.display = "none";
		Hs[i].innerHTML = "+ "+Hs[i].innerHTML.slice(Hs[i].innerHTML.indexOf(" "));}
	notMe.style.display = "inline-block";
	e.target.innerHTML = e.target.innerHTML.replace("\+", "&ndash;");}