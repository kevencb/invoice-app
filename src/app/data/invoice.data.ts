import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
    id: 1,
    name: "Componentes PC Gamer",
    client: {
        name: "Joe",
        lastName: "Doe",
        address: {
            country: "Colombia",
            city: "Bogotá",
            street: "Avenida Siempre Viva",
            number: "1234",
        },
        phone: "1234567890",
        email: "joe@doe.com",
    },
    company: {
        name: "Apple Company",
        fiscalNumber: 1234567890,
    },
    items: [
        {
            id: 1,
            product: "Product 1",
            quantity: 1,
            price: 100,
        },
        {
            id: 2,
            product: "Product 2",
            quantity: 2,
            price: 200,
        },
        {
            id: 3,
            product: "Product 3",
            quantity: 3,
            price: 300,
        },
        {
            id: 4,
            product: "Product 4",
            quantity: 4,
            price: 400,
        },
    ]
}