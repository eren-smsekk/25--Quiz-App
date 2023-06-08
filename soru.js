// Constructor tanımlarken bunun bir sınıf olduğunu düşünerek fonksiyon adının baş harfini büyük harf yapacaz
function Soru(soruMetni, cevapSecenekleri,dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1-Hangisi Javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget"}, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?", {a: "Css", b: "Html", c: "Javascript", d: "sql"}, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilmez?", {a: "Node.js", b: "Typescript", c: "Angular", d:"react"}, "a"),
    new Soru("4-Hangisi Javascript programlama dilini kullanmaz?", {a: "React", b: "Angular", c: "Vue", d: "asp.net"}, "d")
];