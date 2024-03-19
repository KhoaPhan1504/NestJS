import { Injectable } from "@nestjs/common";
import { Product } from "src/models/product.model";

@Injectable()
export class ProductService{

    private products: Product[] = [
        {id: 1, categoryId: 2, productName: 'Keyboard', price:8000000},
        {id: 2, categoryId: 3, productName: 'Mouse', price:150000},
    ]
   
    getProducts(): Product[] {
       return this.products;
    }

 
    createProduct() : string {
        return 'POST PRODUCT';
    }

    
    detailProduct(id: number) : Product {
        return this.products.find(item => item.id === Number(id));
    }

    
    updateProduct() : string {
        return 'UPDATE PRODUCT';
    }

    
    deleteProduct() : string {
        return 'DELETE PRODUCT';
    }
};