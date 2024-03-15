function encode() {
  var input = document.getElementById('input').value;
  var output = obfuscate(input);
  document.getElementById('output').value = output;
}

function decode() {
  var input = document.getElementById('input').value;
  var output = deobfuscate(input);
  document.getElementById('output').value = output;
}

function obfuscate(code) {
  var obfuscatedCode = code;
  obfuscatedCode = btoa(obfuscatedCode);
  obfuscatedCode = obfuscatedCode.split('').reverse().join('');

  // Transformation 3: Swap characters
  obfuscatedCode = obfuscatedCode.replace(/./g, function(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  });

  return obfuscatedCode;
}

function deobfuscate(code) {

  var deobfuscatedCode = code;


  deobfuscatedCode = deobfuscatedCode.replace(/./g, function(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
  });


  deobfuscatedCode = deobfuscatedCode.split('').reverse().join('');

  deobfuscatedCode = atob(deobfuscatedCode);

  return deobfuscatedCode;
}
