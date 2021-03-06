import elephant1 from '../../images/1250-1275c.jpg';
import elephant2 from '../../images/1255-1259.jpg';
import elephant3 from '../../images/1275-1300b.jpg';
import elephant4 from '../../images/1275-1300c.jpg';
import elephant5 from '../../images/1511.jpg';

export default class PieceDef {
    constructor(
        private name: string,
        private imageSrc: string,
    ) {}

    getName(): string { return this.name; }
    getImageUrl(): string { return `${this.imageSrc}` }
}

export function createRandomPiece() {
    const namept1 = ["Ele", "Ali", "Honky"];
    const namept2 = ["t", "tium", "ter"];
    const imageSrcs = [elephant1, elephant2, elephant3, elephant4, elephant5]

    const pt1 = namept1[Math.floor(Math.random() * namept1.length)];
    const pt2 = namept2[Math.floor(Math.random() * namept2.length)];
    const img = imageSrcs[Math.floor(Math.random() * imageSrcs.length)];

    return new PieceDef(
        pt1 + "phan" + pt2,
        img,
    );
}