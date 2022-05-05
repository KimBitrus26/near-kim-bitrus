import { Product, listedProducts } from './model';
import { ContractPromiseBatch, context, u128 } from 'near-sdk-as';


export function setProduct(product: Product): void {
    let storedProduct = listedProducts.get(product.id);
    if (storedProduct !== null) {
        throw new Error(`a product with ${product.id} already exists`);
    }
    if (product.price <= u128.from(0)){
        throw new Error(`wrong product price`);
    }
    listedProducts.set(product.id, Product.fromPayload(product));
}

export function getProduct(id: string): Product {
    let prod = listedProducts.get(id);
    if (prod == null) {
        throw new Error("product not found");
    }
    return prod;
}

export function getProducts(): Product[] {
    return listedProducts.values();
}

export function buyProduct(productId: string): void {
    const product = getProduct(productId);
    if (product.price != context.attachedDeposit) {
        throw new Error("attached deposit should equal to the product's price");
    }
    ContractPromiseBatch.create(product.owner).transfer(context.attachedDeposit);
    product.incrementSoldAmount();
    listedProducts.set(product.id, product);
}

export function removeProduct(product: Product): void {
    const prod = getProduct(product.id);
    listedProducts.delete(prod.id);
}


