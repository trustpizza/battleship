function ShipFactory(length) {
    const hits = 0;

    const ship = {
        length,
        hits,  
        hit() {
            this.hits++
        },
        isSunk() {
            return this.hits === this.length
        }
    };

    return ship;
}

module.exports = ShipFactory;