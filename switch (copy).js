
console.log("Hello world!");
a = 10;
b = 20;
c = a * 2 === b;
console.log(c)

console.log("aula 6")
nota1 = 5.0
nota2 = 7.0
media = (nota1 + nota2) / 2
console.log(media)
if (media >= 7.0) {
  console.log("passou com media ", media)
} else {
  console.log("foi reprovado")
}
conceito = ""
if (media <= 4.0) {
  conceito = "ruim"
} else if (media <= 6.0) {
  conceito = "regular"
} else if (media <= 8.0) {
  conceito = "bom"
} else {
  conceito = "otimo"
}
console.log(conceito)

obs = ""
switch (media) {
  case (< 3.0):
    obs = "Precisa estudar mais"
    break
  case "regular":
    obs = "Está quase lá"
    break
  case "bom":
    obs = "Continue assim!"
    break
  case "otimo":
    obs = "Mandou bem!"
    break
}
console.log(obs)