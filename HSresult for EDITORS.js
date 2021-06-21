function Subject()
{
	var Subject = document.getElementById("Subject").value ;
	var Theo = document.getElementById("SubjectTheo").value ;
	var TheoFull = document.getElementById("SubjectTheoFull").value ;
	var Prac = document.getElementById("SubjectPrac").value ;
	var PracFull= document.getElementById("SubjectPracFull").value;
	var x1 = document.getElementById("Best1").value ;
	var x2 = document.getElementById("Best2").value ;
	var x3 = document.getElementById("Best3").value ;
	var x4 = document.getElementById("Best4").value ;
	  

    // Calculation of Theory ( RELATIVE )//
    if (
		(TheoFull>=100)
		)
			{ var TheoFullF=100-parseFloat(PracFull);
			  var TheoF=parseFloat(Theo)-parseFloat(PracFull);
			}
		else {
			  TheoFullF= TheoFull;
			  TheoF=Theo;
		}
      // Theory XI //
		var percentXI=parseFloat(TheoFullF)*0.60;
		var TheoRXI=parseFloat(TheoF)*parseFloat(percentXI)/parseFloat(TheoFullF);		
		
	// Theory X //	
	    var percentX=parseFloat(TheoFullF)*0.40;
		var TheoXTotal=parseFloat(x1)+parseFloat(x2)+parseFloat(x3)+parseFloat(x4);
		var TheoRX=parseFloat(percentX)*parseFloat(TheoXTotal)/400;
		
	//Result//
	var result=parseFloat(TheoRX)+parseFloat(TheoRXI)+parseFloat(Prac);
	var recheck=parseFloat(percentXI)+parseFloat(percentX)+parseFloat(PracFull);

    // Publish//
	document.getElementById("fromTheoXI").innerHTML=TheoRXI+" out of "+percentXI+" from class XI (2020) : "+Subject;

	document.getElementById("fromPracXII").innerHTML=Prac+" out of "+PracFull+" from class XII (2021) : "+Subject;

	document.getElementById("fromTheoX").innerHTML=TheoRX+" out of "+percentX+" from Madhyamik (2019) : "+Subject;

	document.getElementById("mainResult").innerHTML="You got : "+result+" out of 100"+" in H.S. (2021) : "+Subject;

	document.getElementById("recheck").innerHTML="For our recheck purpose : "+"You got "+" ( "+TheoRXI+" + "+Prac+" + "+TheoRX+" ) "+" = "+result+" "+" out  of "+" "+" ( "+percentXI+" + "+percentX+" + "+PracFull+" ) = "+recheck+" .  "+" You may have got the right answers 😊 . "+" In case of any error consider re-entering value properly & go through the QUICK GUIDE 😊🧐" ;
	document.getElementById("share").innerHTML="👨‍👨‍👧‍👦👨‍👨 Consider Sharing To Your Friends & School 👨‍👨‍👧‍👦👨‍👨‍👧";
	document.getElementById("issue").innerHTML="For Any Issue Please Inform us 😊 ";


		
				if (
					(TheoF>TheoFullF)
					)
						{ alert("Your Number in Theory must not exceed Total Number in Theory (As you selected)")
						}
					else {
						if((Prac>PracFull)){
							alert("Your Number in Practical must not exceed Total Number in Project/Lab.Practical (As you selected)")
						}
						else{
							if((x1>100)){
								alert("Your Number in Subject : 1 of Madhyamik must not exceed Total Number (100)")
							}
							if((x2>100)){
								alert("Your Number in Subject : 2 of Madhyamik must not exceed Total Number (100)")
							}
							if((x3>100)){
								alert("Your Number in Subject : 3 of Madhyamik must not exceed Total Number (100)")
							}
							if((x4>100)){
								alert("Your Number in Subject : 4 of Madhyamik must not exceed Total Number (100)")
							};
						};
					};
				

				
	

	if (
		(result>=90)&&(result<=100)
		)
			{ alert("😎😎🥇You have crossed 90 in HS🥇😎😎")
			}
		else {
			if (
				(result>=80)&&(result<90)
				)
					{ alert("😎😎⚡You got Letter Marks 📧📧📧 in HS⚡️😎😎")
					}
				else {
					if (
						(result>=75)&&(result<80)
						)
							{ alert("😎😎😊You got star⭐⭐⭐in HS😊😎😎")
							}
						else {
							if ((result>=25)&&(result<75)){
								alert("😘😘Best wishes for your future😘😘")
							};
							
						};
				};
		};

};
