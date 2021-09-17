let mensagem = "Ola tudo bem";

function vogalEncoder(vogal) {
    vogal = vogal.replaceAll("e", "enter");
    vogal = vogal.replaceAll("i", "imes");
    vogal = vogal.replaceAll("a", "ai");
    vogal = vogal.replaceAll("o", "ober");
    vogal = vogal.replaceAll("u", "ufat");
                 return vogal; 
  }

  function vogalDecoder(vogal) {
    vogal = vogal.replaceAll("enter", "e");
    vogal = vogal.replaceAll("imes", "i");
    vogal = vogal.replaceAll("ai", "a");
    vogal = vogal.replaceAll("ober", "o");
    vogal = vogal.replaceAll("ufat", "u");
                 return vogal;
  }


if (mensagem = "Ola tudo bem"){

console.log(vogalEncoder(mensagem));
};

let mensagem2 = "Olai tufatdober benterm";

if (mensagem = "Ola tudo bem"){

console.log(vogalDecoder(mensagem));
};