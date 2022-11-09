const productosArray = []
// clase producto
class mueble {
  constructor(id, name, price, stock) {
    this.id = id
    this.name = name
    this.price = price
    this.stock = stock
  }
}
const mesa1 = new mueble(1, 'mesa1', 600, 20)
productosArray.push(mesa1)
const mesa2 = new mueble(2, 'mesa2', 1000, 40)
productosArray.push(mesa2)
const mesa3 = new mueble(3, 'mesa3', 200, 30)
productosArray.push(mesa3)
const mesa4 = new mueble(4, 'mesa4', 800, 15)
productosArray.push(mesa4)