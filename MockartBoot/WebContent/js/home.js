//array of car
//var arr=["../images/mob/m1.jpg","../images/mob/m2.jpg","../images/mob/tab1.jpg","../images/mob/tab2.jpg","../images/mob/tab3.png","../images/mob/m6.jpg"];
// array of bike


       var advertisements=[

                    {name:"Home",category:"Homes",loc:"../images/home/h1.jpg",status:"available",price:"1000",city:"Mumbai"},
                    {name:"Home",category:"Homes",loc:"../images/home/h2.jpg",status:"available",price:"1000",city:"Nagpur"},
                    {name:"Home",category:"Homes",loc:"../images/home/h3.jpg",status:"available",price:"1000",city:"Pune"},
                    {name:"Home",category:"Homes",loc:"../images/home/h4.jpg",status:"available",price:"1000",city:"Mumbai"},
                    {name:"Home",category:"Homes",loc:"../images/home/rowhouse.jpg",status:"available",price:"1000",city:"Nagpur"},
                    ];

//var arn=["Samsung","Nokia","Sony","HTC","Micromax","L.G."];
//var ar=["R.K. Sharma","P.G.patel","Mayur patel","Rajeev Gupta","shahid patel","Ram khanna"];
//var arp=["9993016648","8564215754","72516324444","854254455214","4351588522","4415845225"];
//var arpd=["11/04/2014","07/08/2013","07/12/2012","08/04/2015","03/02/2013","07/10/2015"];
var car=document.getElementById("my_home");
car.onload=Function()
{
	document.write("<center>");
	document.write("<table style=width:100%,left:20%,border: 1px solid black;;>");
	for(i in advertisements)
		{
		//if(i%5==0 || i==0)
		//	{document.write("<th>"+"</th>"+"<th>Name "+"</th>"+"<th>Status  "+"</th>"+"<th>Price  "+"</th>"+"<th>City "+"</th>");}
		if(i%3==0 || i==0)
		{document.write("<tr>");}
	document.write("<td style=width:30% ><div>");
	document.write("<figure>");
document.write("<img src="+advertisements[i].loc+" width=200 height=200>");
//document.write("<figcaption>"+ap[i] +"</figcaption>");
document.write("<figcaption>"+" Name :"+advertisements[i].name +"<br>"+"Status:"+advertisements[i].status+"<br>Price :"+advertisements[i].price+"<br >City :"+" "+advertisements[i].city+"<figcaption>");

document.write("</figure>");
document.write("</div></td>");
if(i==2 || i==5 ||i==8)
	{document.write("</tr>");}
		
		
		
		
		
		}
	document.write("</table>");
	document.write("</center>");
}
 
/**
 * 
 *//**
 * 
 */