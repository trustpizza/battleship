export default function ShipFactory(length) {
    const ship = {
        length,
        hits: 0, 
        hit() {
            this.hits++
        },
        isSunk() {
            return this.hits === this.length
        }
    };

    return ship;
}
