
 document.write(user_name);

function welcome() {
  let a = "Please enter your name.";
  let b = "Write your name here.";
  A prompt box is used to prompt users to input a value before entering a page.
 let message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
 return message
 }
document.write(welcome());

function webmap_table()
{
  document.write("<table width=100%>");
    for (var row=0; row < 2; row++)
  {
      document.write("<tr>");
  for (var column=0; column < 3; column++)
  {
        document.write("<td>" + row + "," + column + "</td>");
  }
    document.write("</tr>");
  }
  document.write("</table>");
  return "";
  }

}
var webmaps =[["Oil Spill Toolkit", "https://www.glo.texas.gov", "The oil spill toolkit
developed by Enterprise Technology Solutions is neat."],
["Texas Ecosystems Analytical Mapper", "http://tpwd.texas.gov/gis/team/", "The
Texas Parks and Wildlife's Landscape Ecology program is great."]
];
function webmap_table()
{
document.write("<table width=100%>");
for (var row=0; row < webmaps.length; row++)
{
document.write("<tr>");
for (var column=0; column < webmaps[0].length; column++)
{
document.write("<td>" + webmaps[row][column] + "</td>");
}
document.write("</tr>");
}
document.write("</table>");
return "";
}
const reviews = [
  {
    name: "Oil Spill Toolkit",
    url: "https://www.glo.texas.gov",
    description:
      "The Oil Spill Toolkit developed by Enterprise Technology Solutions of the Texas General Land Office is a decision-support resource. " +
      "This is my second sentence about the Oil Spill Toolkit. " +
      "This is my third sentence about the Oil Spill Toolkit. " +
      "This is my fourth sentence about the Oil Spill Toolkit."
  },
  {
    name: "Texas Ecosystems Analytical Mapper",
    url: "http://tpwd.texas.gov/gis/team/",
    description:
      "The Texas Parks and Wildlife's Landscape Ecology program is great."
  }
];
