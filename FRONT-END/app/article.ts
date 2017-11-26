export class Article
{
    private nom: string;
    private quantite: number;
    private prix: number;
    private dbId: string;

    constructor(name: string = '', quantity: number = 1, price: number = 0, id: string = '00XX') {
        this.nom = name;
        this.quantite = quantity;
        this.prix = price;
        this.dbId = id;
    }

    getNom(): string {
        return this.nom;
    }
    setNom(name: string) {
        this.nom = name;
    }
    getQuantite(): number {
        return this.quantite;
    }
    setQuantite(quantity: number) {
        this.quantite = quantity;
    }
    getPrix(): number {
        return this.prix;
    }
    setPrix(price: number) {
        this.prix = price;
    }
    getDbId(): string {
        return this.dbId;
    }
    setDbId(id: string) {
        this.dbId = id;
    }
}
