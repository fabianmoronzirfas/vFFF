#include "chooseFont.jsx";
function buildStyles(doc){
	
	//H1,H2,H3,H4,H5,H6,footnote,endnote,body;
var  basicParStyles = new Array();
basicParStyles[0] = "h1";
basicParStyles[1] = "h2";
basicParStyles[2] = "h3";
basicParStyles[3] = "h4";
basicParStyles[4] = "h5";
basicParStyles[5] = "h6";
basicParStyles[6] = "body";
basicParStyles[7] = "footnote";
basicParStyles[8] = "endnote";
basicParStyles[9] = "quote";
basicParStyles[10] = "pagina";
basicParStyles[11] = "pagina_Left";
basicParStyles[12] = "pagina_Right";




var  basicCharStyles = new Array();
basicCharStyles[0] = "strong";
basicCharStyles[1] = "em";
basicCharStyles[2] = "li";
basicCharStyles[3] = "span";
basicCharStyles[4] = "sup";
basicCharStyles[5] = "footnote";
basicCharStyles[6] = "endnote";
basicCharStyles[7] = "ul";
basicCharStyles[8] = "img";
basicCharStyles[9] = "footnote_inText";
basicCharStyles[10] = "endnote_inText";

// see "chooseFont.jsx";
	//var theFont = chooseFont();

	for(var i = 0; i < basicParStyles.length;i++){
	
		var ps;
		var aName;
		try{
		    	ps = doc.paragraphStyles.item(basicParStyles[i]);
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	aName = ps.name;
		    }
		catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	ps = doc.paragraphStyles.add({name:basicParStyles[i]})
			with(ps){
			//appliedFont  = theFont
			}
		}
	}
	
	
	for(var i = 0; i < basicCharStyles.length;i++){
	
		var ps;
		var aName;
		try{
		    	ps = doc.characterStyles.item(basicCharStyles[i]);
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	aName = ps.name;
		    }
		catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	ps = doc.characterStyles.add({name:basicCharStyles[i]})
			with(ps){
			//	appliedFont  = theFont
			
			}
		}
	}

	
	
	// this is some manual tweak
		var ul = "underline";
		var cs;
		var aName;
		try{
		    	cs = doc.characterStyles.item(ul);
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	aName = cs.name;
		    }
		catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	cs = doc.characterStyles.add({name:ul})
			with(cs){
			basedOn = doc.characterStyles.item("ul")
			}
		}
		
		var quote = doc.paragraphStyles.item("quote");
		var body = doc.paragraphStyles.item("body")
		var pagina = doc.paragraphStyles.item("pagina");
		var pagina_L = doc.paragraphStyles.item("pagina_Left");
		var pagina_R = doc.paragraphStyles.item("pagina_Right");
		
		
		quote.basedOn = body;
		body.alignToBaseline = true;
		body.pointSize = 13;
		body.leading = body.pointSize *1.5;
		pagina_L.basedOn = pagina;
		pagina_R.basedOn = pagina;
		pagina_L.justification = Justification.CENTER_ALIGN;
		pagina_R.justification = Justification.CENTER_ALIGN;
		
		
		
		//*******************
		// from here on you can edit parstyles
		// this is editing Paragraph Style"h1"
		editParStyleH1();
		editParStyleH2();
		editParStyleH3();
		editParStyleH4();
		editParStyleH5();
		editParStyleBody();
		editParStylePagina();
		editParStyleFootnote();
		editParStyleEndnote();
	
	// this edits the character style "strong"
		editPCharStyleStrong();
		editPCharStyleEm();
		editPCharStylefootnote_inText();
		editPCharStyleendnote_inText();

		//
		
}
// tis is for paragraphStyles
//kapitelüberschrift
function editParStyleH1(){

	var theStyle = app.activeDocument.paragraphStyles.item("h1")
	with(theStyle){
		pointSize = 9;
		leading = 11.5;
		appliedFont = "DTLProkyonST	Bold";
		kerningMethod : "Metrics";
		tracking = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
		capitalization = Capitalization.ALL_CAPS;
		position = Position.NORMAL; // The text position relative to the baseline.
		Underline = false;
		strikeThru = false;
		ligatures =  true;
		noBreak =  false;
		
		appliedLanguage : "de_DE_2006";
		
	
		alignToBaseline = true;
		gridAlignFirstLineOnly = false;			
		justification = Justification.CENTER_ALIGN; //1667591796;
		balanceRaggedLines  = false;

		
		hyphenation = true;
		hyphenateWordsLongerThan = 5;
		hyphenateAfterFirst = 2;
		hyphenateBeforeLast = 2;
		hyphenateLadderLimit = 3;
		hyphenationZone  = "12.7mm";
		hyphenWeight  = 5;
		hyphenateCapitalizedWords = true;
		hyphenateLastWord = true;

		maximumWordSpacing  = 133; // (Range: 0 to 1000)
		minimumWordSpacing  =  80; // (Range: 0 to 1000)
		desiredWordSpacing  = 100; // (Range: 0 to 1000)

		maximumLetterSpacing  = 0; // (Range: -100 to 500) 
		minimumLetterSpacing  =  0; //(Range: -100 to 500) 
		desiredLetterSpacing  = 0; //(Range: -100 to 500) 

		maximumGlyphScaling  = 100; // (Range: 50 to 200)
		minimumGlyphScaling  =  100; //(Range: 50 to 200)
		desiredGlyphScaling  = 100; //(Range: 50 to 200)

		autoLeading =  120; //(Range: 0 to 500)

		singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
		composer: "Adobe-Absatzsetzer";
		
		dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
		dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

		fillColor = app.activeDocument.swatches.item("Black"); // Schwarz/Black
		fillTint  = 100; 
		overprintFill = false;
		strokeWeight = "1pt";
		strokeColor =  app.activeDocument.swatches.item("None");
		strokeTint = 100;
		overprintStroke  = false;
		
		underline = false;
		strikeThru = false;
	}
		
}
//Überschrift
function editParStyleH2(){

	var theStyle = app.activeDocument.paragraphStyles.item("h2")
	with(theStyle){
		pointSize = 9;
		leading = 11.5;
		appliedFont = "DTLProkyonST	Bold";
		kerningMethod : "Metrics";
		tracking = 0; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
		capitalization = Capitalization.NORMAL;
		position = Position.NORMAL; // The text position relative to the baseline.
		Underline = false;
		strikeThru = false;
		ligatures =  true;
		noBreak =  false;
		
		appliedLanguage : "de_DE_2006";
		
	
		alignToBaseline = true;
		gridAlignFirstLineOnly = false;			
		justification = Justification.CENTER_ALIGN; //1667591796;
		balanceRaggedLines  = false;

		
		hyphenation = true;
		hyphenateWordsLongerThan = 5;
		hyphenateAfterFirst = 2;
		hyphenateBeforeLast = 2;
		hyphenateLadderLimit = 3;
		hyphenationZone  = "12.7mm";
		hyphenWeight  = 5;
		hyphenateCapitalizedWords = true;
		hyphenateLastWord = true;

		maximumWordSpacing  = 133; // (Range: 0 to 1000)
		minimumWordSpacing  =  80; // (Range: 0 to 1000)
		desiredWordSpacing  = 100; // (Range: 0 to 1000)

		maximumLetterSpacing  = 0; // (Range: -100 to 500) 
		minimumLetterSpacing  =  0; //(Range: -100 to 500) 
		desiredLetterSpacing  = 0; //(Range: -100 to 500) 

		maximumGlyphScaling  = 100; // (Range: 50 to 200)
		minimumGlyphScaling  =  100; //(Range: 50 to 200)
		desiredGlyphScaling  = 100; //(Range: 50 to 200)

		autoLeading =  120; //(Range: 0 to 500)

		singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
		composer: "Adobe-Absatzsetzer";
		
		dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
		dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

		fillColor = app.activeDocument.swatches.item("Black"); // Schwarz/Black
		fillTint  = 100; 
		overprintFill = false;
		strokeWeight = "1pt";
		strokeColor =  app.activeDocument.swatches.item("None");
		strokeTint = 100;
		overprintStroke  = false;
		
		underline = false;
		strikeThru = false;
	}		
}
//Zwischenüberschrift
function editParStyleH3(){

	var theStyle = app.activeDocument.paragraphStyles.item("h3")
	with(theStyle){
		pointSize = 9;
		leading = 11.5;
		appliedFont = "DTLProkyonTCaps	Regular";
		kerningMethod : "Metrics";
		tracking = 0; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
		capitalization = Capitalization.NORMAL;
		position = Position.NORMAL; // The text position relative to the baseline.
		Underline = false;
		strikeThru = false;
		ligatures =  true;
		noBreak =  false;
		
		appliedLanguage : "de_DE_2006";
		
	
		alignToBaseline = true;
		gridAlignFirstLineOnly = false;			
		justification = Justification.LEFT_JUSTIFIED; //1667591796;
		balanceRaggedLines  = false;

		
		hyphenation = true;
		hyphenateWordsLongerThan = 5;
		hyphenateAfterFirst = 2;
		hyphenateBeforeLast = 2;
		hyphenateLadderLimit = 3;
		hyphenationZone  = "12.7mm";
		hyphenWeight  = 5;
		hyphenateCapitalizedWords = true;
		hyphenateLastWord = true;

		maximumWordSpacing  = 133; // (Range: 0 to 1000)
		minimumWordSpacing  =  80; // (Range: 0 to 1000)
		desiredWordSpacing  = 100; // (Range: 0 to 1000)

		maximumLetterSpacing  = 0; // (Range: -100 to 500) 
		minimumLetterSpacing  =  0; //(Range: -100 to 500) 
		desiredLetterSpacing  = 0; //(Range: -100 to 500) 

		maximumGlyphScaling  = 100; // (Range: 50 to 200)
		minimumGlyphScaling  =  100; //(Range: 50 to 200)
		desiredGlyphScaling  = 100; //(Range: 50 to 200)

		autoLeading =  120; //(Range: 0 to 500)

		singleWordJustification = SingleWordJustification.FULLY_JUSTIFIED;
		composer: "Adobe-Absatzsetzer";
		
		dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
		dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

		fillColor = app.activeDocument.swatches.item("Black"); // Schwarz/Black
		fillTint  = 100; 
		overprintFill = false;
		strokeWeight = "1pt";
		strokeColor =  app.activeDocument.swatches.item("None");
		strokeTint = 100;
		overprintStroke  = false;
		
		underline = false;
		strikeThru = false;
	}
		
}
//Zitat
function editParStyleH4(){

	var theStyle = app.activeDocument.paragraphStyles.item("h4")
	with(theStyle){
		pointSize = 9;
		leading = 11.5;
		tracking = 0;
		firstLineIndent = 3;
		appliedFont = "Skolar	Italic";
		kerningMethod : "Metrics";
		tracking  = 0; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
		capitalization = Capitalization.NORMAL;
		position = Position.NORMAL; // The text position relative to the baseline.
		Underline = false;
		strikeThru = false;
		ligatures =  true;
		noBreak =  false;
		
		appliedLanguage : "de_DE_2006";
		
	
		alignToBaseline = true;
		gridAlignFirstLineOnly = false;			
		justification = Justification.LEFT_JUSTIFIED; //1667591796;
		balanceRaggedLines  = false;

		
		hyphenation = true;
		hyphenateWordsLongerThan = 5;
		hyphenateAfterFirst = 2;
		hyphenateBeforeLast = 2;
		hyphenateLadderLimit = 3;
		hyphenationZone  = "12.7mm";
		hyphenWeight  = 5;
		hyphenateCapitalizedWords = true;
		hyphenateLastWord = true;

		maximumWordSpacing  = 133; // (Range: 0 to 1000)
		minimumWordSpacing  =  80; // (Range: 0 to 1000)
		desiredWordSpacing  = 100; // (Range: 0 to 1000)

		maximumLetterSpacing  = 0; // (Range: -100 to 500) 
		minimumLetterSpacing  =  0; //(Range: -100 to 500) 
		desiredLetterSpacing  = 0; //(Range: -100 to 500) 

		maximumGlyphScaling  = 100; // (Range: 50 to 200)
		minimumGlyphScaling  =  100; //(Range: 50 to 200)
		desiredGlyphScaling  = 100; //(Range: 50 to 200)

		autoLeading =  120; //(Range: 0 to 500)

		singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
		composer: "Adobe-Absatzsetzer";
		
		dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
		dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

		fillColor = app.activeDocument.swatches.item("Black"); // Schwarz/Black
		fillTint  = 100; 
		overprintFill = false;
		strokeWeight = "1pt";
		strokeColor =  app.activeDocument.swatches.item("None");
		strokeTint = 100;
		overprintStroke  = false;
		
		underline = false;
		strikeThru = false;
	}
		
}
//Bildunterschrift
function editParStyleH5(){

	var theStyle = app.activeDocument.paragraphStyles.item("h5")
	with(theStyle){
		pointSize = 7;
		leading = 10;
		tracking = 0;
		leftIndent = 3;
		firstLineIndent = -3;
		appliedFont = "Skolar	SemiBold";
		kerningMethod : "Metrics";
		tracking  = 0; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
		capitalization = Capitalization.NORMAL;
		position = Position.NORMAL; // The text position relative to the baseline.
		Underline = false;
		strikeThru = false;
		ligatures =  true;
		noBreak =  false;
		
		appliedLanguage : "de_DE_2006";
		
	
		alignToBaseline = false;
		gridAlignFirstLineOnly = true;			
		justification = Justification.LEFT_JUSTIFIED; //1667591796;
		balanceRaggedLines  = false;

		
		hyphenation = true;
		hyphenateWordsLongerThan = 5;
		hyphenateAfterFirst = 2;
		hyphenateBeforeLast = 2;
		hyphenateLadderLimit = 3;
		hyphenationZone  = "12.7mm";
		hyphenWeight  = 5;
		hyphenateCapitalizedWords = true;
		hyphenateLastWord = true;

		maximumWordSpacing  = 133; // (Range: 0 to 1000)
		minimumWordSpacing  =  80; // (Range: 0 to 1000)
		desiredWordSpacing  = 100; // (Range: 0 to 1000)

		maximumLetterSpacing  = 0; // (Range: -100 to 500) 
		minimumLetterSpacing  =  0; //(Range: -100 to 500) 
		desiredLetterSpacing  = 0; //(Range: -100 to 500) 

		maximumGlyphScaling  = 100; // (Range: 50 to 200)
		minimumGlyphScaling  =  100; //(Range: 50 to 200)
		desiredGlyphScaling  = 100; //(Range: 50 to 200)

		autoLeading =  120; //(Range: 0 to 500)

		singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
		composer: "Adobe-Absatzsetzer";
		
		dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
		dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

		fillColor = app.activeDocument.swatches.item("Black"); // Schwarz/Black
		fillTint  = 100; 
		overprintFill = false;
		strokeWeight = "1pt";
		strokeColor =  app.activeDocument.swatches.item("None");
		strokeTint = 100;
		overprintStroke  = false;
		
		underline = false;
		strikeThru = false;
	}
		
}
//Fließtext
function editParStyleBody(){

	var theStyle = app.activeDocument.paragraphStyles.item("body")
	with(theStyle){
		pointSize = 9;
		leading = 11.5;
		appliedFont = "Skolar	Regular";
		kerningMethod : "Metrics";
		tracking = 0; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
		firstLineIndent = 3;
		capitalization = Capitalization.NORMAL;
		position = Position.NORMAL; // The text position relative to the baseline.
		Underline = false;
		strikeThru = false;
		ligatures =  true;
		noBreak =  false;
		
		appliedLanguage : "de_DE_2006";
		
	
		alignToBaseline = true;
		gridAlignFirstLineOnly = false;			
		justification = Justification.LEFT_JUSTIFIED; //1667591796;
		balanceRaggedLines  = false;

		
		hyphenation = true;
		hyphenateWordsLongerThan = 5;
		hyphenateAfterFirst = 2;
		hyphenateBeforeLast = 2;
		hyphenateLadderLimit = 3;
		hyphenationZone  = "12.7mm";
		hyphenWeight  = 5;
		hyphenateCapitalizedWords = true;
		hyphenateLastWord = true;

		maximumWordSpacing  = 133; // (Range: 0 to 1000)
		minimumWordSpacing  =  80; // (Range: 0 to 1000)
		desiredWordSpacing  = 100; // (Range: 0 to 1000)

		maximumLetterSpacing  = 0; // (Range: -100 to 500) 
		minimumLetterSpacing  =  0; //(Range: -100 to 500) 
		desiredLetterSpacing  = 0; //(Range: -100 to 500) 

		maximumGlyphScaling  = 100; // (Range: 50 to 200)
		minimumGlyphScaling  =  100; //(Range: 50 to 200)
		desiredGlyphScaling  = 100; //(Range: 50 to 200)

		autoLeading =  120; //(Range: 0 to 500)

		singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
		composer: "Adobe-Absatzsetzer";
		
		dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
		dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

		fillColor = app.activeDocument.swatches.item("Black"); // Schwarz/Black
		fillTint  = 100; 
		overprintFill = false;
		strokeWeight = "1pt";
		strokeColor =  app.activeDocument.swatches.item("None");
		strokeTint = 100;
		overprintStroke  = false;
		
		underline = false;
		strikeThru = false;
	}		
}
//footnote
function editParStyleFootnote(){

	var theStyle = app.activeDocument.paragraphStyles.item("footnote")
	with(theStyle){
		pointSize = 7;
		leading = 10;
		appliedFont = "Skolar	Regular";
		kerningMethod : "Metrics";
		tracking = 0; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
		capitalization = Capitalization.NORMAL;
		position = Position.NORMAL; // The text position relative to the baseline.
		Underline = false;
		strikeThru = false;
		ligatures =  true;
		noBreak =  false;
		
		appliedLanguage : "de_DE_2006";
		
	
		alignToBaseline = false;
		gridAlignFirstLineOnly = true;			
		justification = Justification.LEFT_JUSTIFIED; //1667591796;
		balanceRaggedLines  = false;

		
		hyphenation = true;
		hyphenateWordsLongerThan = 5;
		hyphenateAfterFirst = 2;
		hyphenateBeforeLast = 2;
		hyphenateLadderLimit = 3;
		hyphenationZone  = "12.7mm";
		hyphenWeight  = 5;
		hyphenateCapitalizedWords = true;
		hyphenateLastWord = true;

		maximumWordSpacing  = 133; // (Range: 0 to 1000)
		minimumWordSpacing  =  80; // (Range: 0 to 1000)
		desiredWordSpacing  = 100; // (Range: 0 to 1000)

		maximumLetterSpacing  = 0; // (Range: -100 to 500) 
		minimumLetterSpacing  =  0; //(Range: -100 to 500) 
		desiredLetterSpacing  = 0; //(Range: -100 to 500) 

		maximumGlyphScaling  = 100; // (Range: 50 to 200)
		minimumGlyphScaling  =  100; //(Range: 50 to 200)
		desiredGlyphScaling  = 100; //(Range: 50 to 200)

		autoLeading =  120; //(Range: 0 to 500)

		singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
		composer: "Adobe-Absatzsetzer";
		
		dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
		dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

		fillColor = app.activeDocument.swatches.item("Black"); // Schwarz/Black
		fillTint  = 100; 
		overprintFill = false;
		strokeWeight = "1pt";
		strokeColor =  app.activeDocument.swatches.item("None");
		strokeTint = 100;
		overprintStroke  = false;
		
		underline = false;
		strikeThru = false;
	}		
}
//endnote
function editParStyleEndnote(){

	var theStyle = app.activeDocument.paragraphStyles.item("endnote")
	with(theStyle){
		pointSize = 7;
		leading = 10;
		appliedFont = "Skolar	Regular";
		kerningMethod : "Metrics";
		tracking = 0; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
		capitalization = Capitalization.NORMAL;
		position = Position.NORMAL; // The text position relative to the baseline.
		Underline = false;
		strikeThru = false;
		ligatures =  true;
		noBreak =  false;
		
		appliedLanguage : "de_DE_2006";
		
	
		alignToBaseline = false;
		gridAlignFirstLineOnly = true;			
		justification = Justification.LEFT_JUSTIFIED; //1667591796;
		balanceRaggedLines  = false;

		
		hyphenation = true;
		hyphenateWordsLongerThan = 5;
		hyphenateAfterFirst = 2;
		hyphenateBeforeLast = 2;
		hyphenateLadderLimit = 3;
		hyphenationZone  = "12.7mm";
		hyphenWeight  = 5;
		hyphenateCapitalizedWords = true;
		hyphenateLastWord = true;

		maximumWordSpacing  = 133; // (Range: 0 to 1000)
		minimumWordSpacing  =  80; // (Range: 0 to 1000)
		desiredWordSpacing  = 100; // (Range: 0 to 1000)

		maximumLetterSpacing  = 0; // (Range: -100 to 500) 
		minimumLetterSpacing  =  0; //(Range: -100 to 500) 
		desiredLetterSpacing  = 0; //(Range: -100 to 500) 

		maximumGlyphScaling  = 100; // (Range: 50 to 200)
		minimumGlyphScaling  =  100; //(Range: 50 to 200)
		desiredGlyphScaling  = 100; //(Range: 50 to 200)

		autoLeading =  120; //(Range: 0 to 500)

		singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
		composer: "Adobe-Absatzsetzer";
		
		dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
		dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

		fillColor = app.activeDocument.swatches.item("Black"); // Schwarz/Black
		fillTint  = 100; 
		overprintFill = false;
		strokeWeight = "1pt";
		strokeColor =  app.activeDocument.swatches.item("None");
		strokeTint = 100;
		overprintStroke  = false;
		
		underline = false;
		strikeThru = false;
	}		
}

//Seitenzahl
function editParStylePagina(){

	var theStyle = app.activeDocument.paragraphStyles.item("pagina")
	with(theStyle){
		pointSize = 8;
		leading = 11.5;
		appliedFont = "DTLProkyonTCaps	Regular";
		kerningMethod : "Metrics";
		tracking = 0; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
		firstLineIndent = 0;
		capitalization = Capitalization.NORMAL;
		position = Position.NORMAL; // The text position relative to the baseline.
		Underline = false;
		strikeThru = false;
		ligatures =  true;
		noBreak =  false;
		
		appliedLanguage : "de_DE_2006";
		
	
		alignToBaseline = true;
		gridAlignFirstLineOnly = false;			
		balanceRaggedLines = false;

		
		hyphenation = true;
		hyphenateWordsLongerThan = 5;
		hyphenateAfterFirst = 2;
		hyphenateBeforeLast = 2;
		hyphenateLadderLimit = 3;
		hyphenationZone  = "12.7mm";
		hyphenWeight  = 5;
		hyphenateCapitalizedWords = true;
		hyphenateLastWord = true;

		maximumWordSpacing  = 133; // (Range: 0 to 1000)
		minimumWordSpacing  =  80; // (Range: 0 to 1000)
		desiredWordSpacing  = 100; // (Range: 0 to 1000)

		maximumLetterSpacing  = 0; // (Range: -100 to 500) 
		minimumLetterSpacing  =  0; //(Range: -100 to 500) 
		desiredLetterSpacing  = 0; //(Range: -100 to 500) 

		maximumGlyphScaling  = 100; // (Range: 50 to 200)
		minimumGlyphScaling  =  100; //(Range: 50 to 200)
		desiredGlyphScaling  = 100; //(Range: 50 to 200)

		autoLeading =  120; //(Range: 0 to 500)

		singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
		composer: "Adobe-Absatzsetzer";
		
		dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
		dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

		fillColor = app.activeDocument.swatches.item("Black"); // Schwarz/Black
		fillTint  = 100; 
		overprintFill = false;
		strokeWeight = "1pt";
		strokeColor =  app.activeDocument.swatches.item("None");
		strokeTint = 100;
		overprintStroke  = false;
		
		underline = false;
		strikeThru = false;
	}		

}
//fett
function editPCharStyleStrong(){
	
	var theStyle =app.activeDocument.characterStyles.item("strong") 
		with(theStyle){

			pointSize = 9;
			leading = 11,5;
			appliedFont = "Skolar	SemiBold";
//			kerningMethod : "Metrics";
//			capitalization = Capitalization.ALL_CAPS;
//			position = Position.NORMAL; // The text position relative to the baseline.
//			Underline = false;
//			strikeThru = false;
//			ligatures =  true;
//			noBreak =  false;

			appliedLanguage : "de_DE_2006";

			//fillColor = myFillColor; // Schwarz/Black
			fillTint  = 100; 
			overprintFill = false;
			strokeWeight = "1pt";
			//strokeColor =  myStrokeColor;
			strokeTint = 100;
			overprintStroke  = false;

			underline = false;
			strikeThru = false;

			}
}
//kursiv
function editPCharStyleEm(){
	
	var theStyle =app.activeDocument.characterStyles.item("em") 
		with(theStyle){

			pointSize = 9;
			leading = 11,5;
			appliedFont = "Skolar	Italic";
//			kerningMethod : "Metrics";
//			capitalization = Capitalization.ALL_CAPS;
//			position = Position.NORMAL; // The text position relative to the baseline.
//			Underline = false;
//			strikeThru = false;
//			ligatures =  true;
//			noBreak =  false;

			appliedLanguage : "de_DE_2006";

			//fillColor = myFillColor; // Schwarz/Black
			fillTint  = 100; 
			overprintFill = false;
			strokeWeight = "1pt";
			//strokeColor =  myStrokeColor;
			strokeTint = 100;
			overprintStroke  = false;

			underline = false;
			strikeThru = false;

			}
}
//Fußnote im Text
function editPCharStylefootnote_inText(){
	
	var theStyle =app.activeDocument.characterStyles.item("footnote_inText") 
		with(theStyle){

			pointSize = 5.5;
			leading = 9;
			appliedFont = "Skolar	Regular";
			baselineShift = 2.5;
//			kerningMethod : "Metrics";
//			capitalization = Capitalization.ALL_CAPS;
//			position = Position.NORMAL; // The text position relative to the baseline.
//			Underline = false;
//			strikeThru = false;
//			ligatures =  true;
//			noBreak =  false;

			appliedLanguage : "de_DE_2006";

			//fillColor = myFillColor; // Schwarz/Black
			fillTint  = 100; 
			overprintFill = false;
			strokeWeight = "1pt";
			//strokeColor =  myStrokeColor;
			strokeTint = 100;
			overprintStroke  = false;

			underline = false;
			strikeThru = false;

			}
}
//Endnote im Text
function editPCharStyleendnote_inText(){
	
	var theStyle =app.activeDocument.characterStyles.item("endnote_inText") 
		with(theStyle){

			pointSize = 5.5;
			leading = 9;
			appliedFont = "Skolar	Regular";
			baselineShift = 2.5;
//			kerningMethod : "Metrics";
//			capitalization = Capitalization.ALL_CAPS;
//			position = Position.NORMAL; // The text position relative to the baseline.
//			Underline = false;
//			strikeThru = false;
//			ligatures =  true;
//			noBreak =  false;

			appliedLanguage : "de_DE_2006";

			//fillColor = myFillColor; // Schwarz/Black
			fillTint  = 100; 
			overprintFill = false;
			strokeWeight = "1pt";
			//strokeColor =  myStrokeColor;
			strokeTint = 100;
			overprintStroke  = false;

			underline = false;
			strikeThru = false;

			}
}
