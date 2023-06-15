class Bil {
    static antalBiler = 0;
  
    constructor(bilmaerke, pris) {
      if (typeof bilmaerke !== "string" || typeof pris !== "number") {
        throw new Error("Forkert type for bilmaerke eller pris");
      }
      this.bilmaerke = bilmaerke;
      this.pris = pris;
      Bil.antalBiler++;
    }
  
    toString() {
      return `Bilmaerke: ${this.bilmaerke}, Pris: ${this.pris}`;
    }
}
  
class Varevogn extends Bil {
    constructor(bilmaerke, pris, lasteevne) {
        super(bilmaerke, pris);
        if (typeof lasteevne !== "number") {
            throw new Error("Forkert type for lasteevne");
        }
        this.lasteevne = lasteevne;
    }

    toString() {
      return `${super.toString()}, Lasteevne: ${this.lasteevne} kg`;
    }
}
  
// Test
const biler = [
    new Bil("Toyota", 200000),
    new Varevogn("Ford", 300000, 1000),
    new Bil("Honda", 150000),
];
  
for (let bil of biler) {
    console.log(bil.toString());
}
  
console.log(`Antal oprettede biler: ${Bil.antalBiler}`);