import { MinLength, IsNotEmpty, IsNumber } from "class-validator";


export class ProductDTO {
    @IsNotEmpty()
    categoryId?: number;

    @MinLength(5, {message: 'This fill must be than 5 characters'})
    productName?: string;

    @IsNumber()
    price?: number;
};