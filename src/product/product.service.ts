import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';
import { throwIfEmpty } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) { }
  create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  findAll() {
    return this.productRepository.findAll();
  }

  findOne(id: number) {
    return this.productRepository.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto)
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
