/**
 * Desde otras bases a decimal
 * parzibyte.me/blog
 * @author parzibyte
 */
// Binario a decimal
let binario = "1100"; // 12
let binarioEnDecimal = parseInt(binario, 2); // La base es 2
console.log("El número binario %s en decimal es %s", binario, binarioEnDecimal);

// Octal a decimal
let octal = "60"; // 48
let octalEnDecimal = parseInt(octal, 8); // La base es 8
console.log("El número octal %s en decimal es %s", octal, octalEnDecimal);

// Hexadecimal a decimal
let hexadecimal = "FF"; // 255
let hexadecimalEnDecimal = parseInt(hexadecimal, 16); // La base es 16
console.log("El número hexadecimal %s en decimal es %s", hexadecimal, hexadecimalEnDecimal);