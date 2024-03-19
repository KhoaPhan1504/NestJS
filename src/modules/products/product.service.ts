import { Injectable } from "@nestjs/common";
import { ProductDTO } from "src/dto/product.dto";
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

 
    createProduct(productDTO: ProductDTO) : Product {
        const product: Product = {
            id: Math.random(),
            ...productDTO
        };
        this.products.push(product);
        return product;
    }

    
    detailProduct(id: number) : Product {
        return this.products.find(item => item.id === Number(id));
    }

    
    updateProduct(productDTO: ProductDTO, id: number) : Product {
        const index = this.products.findIndex(item => item.id === Number(id));
        this.products[index] .categoryId = productDTO.categoryId;
        this.products[index] .productName = productDTO.productName;
        this.products[index] .price = productDTO.price;
        return this.products[index];
    }

    
    deleteProduct(id: number) : Boolean {
        const index = this.products.findIndex(item => item.id === Number(id));
        if(index != -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }
};