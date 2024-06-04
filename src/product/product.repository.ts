import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { log } from 'console';


@Injectable()
export class ProductRepository {
    product = [];
    create(data: CreateProductDto) {
        const newProduct = {
            id: (this.product[this.product.length - 1]?.id || 0) + 1,
            title: data.title,
            price: data.price,
            image: data.image,
            color: data.color,
            description: data.description
        }
        this.product.push(newProduct);
        console.log(this.product)
        return newProduct
    }

    findAll() {
        return this.product
    }

    findOne(id: number) {
        for (let i = 0; i < this.product.length; i++) {
            if (id == this.product[i].id) return {
                ...this.product[i],
                index: i

            }
        }
        return "არ არსებობს ეგეთი მონაცემი"
    }

    update(id: number, data: UpdateProductDto) {
        const producti = this.findOne(id);
        const updatedProduct = {
            id: producti.id,
            title: data.title || producti.title,
            color: data.color || producti.color,
            image: data.image || producti.image,
            price: data.price || producti.price,
            description: data.description || producti.description
        }
        this.product[producti.index] = updatedProduct;
        return updatedProduct
    }

    delete(id: number) {
        const producti = this.findOne(id);
        return this.product.splice(producti.index, 1)
    }
}