export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 900.0
}

const tablet: Product = {
    description: "Samsung",
    price: 1500.0
}

const imac: Product = {
    description: 'i mac 15.5"',
    price: 1.1
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// detalles de los productos

//const {description, price} = tablet;
//const {description:anotherDescription , price:anotherPrice} = phone;
//const {description:nombre, price:precio} = imac;

// Funcion de calcular impuestos

export function taxCalculation( options: TaxCalculationOptions ):number[] {

    let total = 0;
    options.products.forEach( product => {
        total += product.price
    })
    return [total, total * options.tax]
}

//productos en el carrito de compra y valor de impuestos al 18%
const shoppingCart1 = [phone, tablet, imac];
const shoppingCart2 = [phone]
export const tax = 0.18;

//llamo a la función taxCalculation y uso la destructuración para asignar los valores que la función devuelve a dos variables: total y taxTotal.

const [total, taxTotal] = taxCalculation ({
    tax,
    products: shoppingCart2,
})

//console.log('Total', total.toFixed(3));
//console.log('Tax', taxTotal.toFixed(3));
//console.log(`Total incluido impuestos: $ ${total + taxTotal}`)
//console.warn(`El detalle de su compra es: ${shoppingCart1} de valor $ ${price} y ${anotherDescription} de valor $ ${anotherPrice} de regalo te llevas ${nombre} a $${precio}`)

// Mostrar el detalle del carrito de compras 
//console.log("El detalle de su compra es:"); 
//shoppingCart1.forEach(product => { 
//    console.log(`Producto: ${product.description} de valor $ ${product.price.toFixed(2)}`); 
//});
