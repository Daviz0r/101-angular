import { Product, taxCalculation } from './06-function-destructuring';


const shoppingCart:Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'Huawei',
        price: 30
    },
    {
        description: 'Redmi',
        price: 50
    },
    {
        description: 'RedmiNote 13',
        price: 5000
    }
];


const [total, taxTotal] = taxCalculation({
    tax: 0.15,
    products: shoppingCart,
});

console.log(`El Subtotal es: ${total}, el impuesto es: ${taxTotal} y el total es: ${total + taxTotal}`)
console.log('El detalle de su pedido es:')

shoppingCart.forEach(product =>{
    console.log(`Producto: ${product.description} de valor: ${product.price}`)
})