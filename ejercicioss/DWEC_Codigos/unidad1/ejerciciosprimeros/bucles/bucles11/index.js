let numeroColumnas = parseInt(prompt("Introduce el número de columnas"));
let altura = parseInt(prompt("Introduce la altura de las celdas"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas"));

document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.write("<tr bgcolor='white' height='" + altura + "'>");

for (let i = 0; i < numeroColumnas; i++) {
    document.write("<td width='" + ancho + "'>&nbsp;</td>");
}

document.write("</tr>");
document.write("</table>");
