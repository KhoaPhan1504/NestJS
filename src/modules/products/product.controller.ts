import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Product } from "src/models/product.model";
import { ProductDTO } from "src/dto/product.dto";

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {

    }

    @Get()
    getProducts(): ResponseData<Product[]> {
        try {
            return new ResponseData<Product[]>(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS) ;
            
        } catch (error) {
            return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR) ;
            
        }
    }

    @Post()
    createProduct(@Body(new ValidationPipe()) productDTO: ProductDTO) : ResponseData<ProductDTO> {
        try {
            return new ResponseData<Product>(this.productService.createProduct(productDTO), HttpStatus.SUCCESS, HttpMessage.SUCCESS) ;
            
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR) ;
            
        }
    }

    @Get('/:id')
    detailProduct(@Param('id') id : number) : ResponseData<Product> {
        try {
            return new ResponseData<Product>(this.productService.detailProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS) ;
            
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR) ;
            
        }
    }

    @Put('/:id')
    updateProduct(@Body() productDTO: ProductDTO, @Param('id') id: number) : ResponseData<Product> {
        try {
            return new ResponseData<Product>(this.productService.updateProduct(productDTO, id), HttpStatus.SUCCESS, HttpMessage.SUCCESS) ;
            
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR) ;
            
        }
    }

    @Delete('/:id')
    deleteProduct(@Param('id') id: number) : ResponseData<Boolean> {
        try {
            return new ResponseData<Boolean>(this.productService.deleteProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS) ;
            
        } catch (error) {
            return new ResponseData<Boolean>(null, HttpStatus.ERROR, HttpMessage.ERROR) ;
            
        }
    }
}