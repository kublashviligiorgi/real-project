import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    create(createProductDto: CreateProductDto): {
        id: any;
        title: string;
        price: number;
        image: string;
        color: string[];
        description: string;
    };
    findAll(): any[];
    findOne(id: number): any;
    update(id: number, updateProductDto: UpdateProductDto): {
        id: any;
        title: any;
        color: any;
        image: any;
        price: any;
        description: any;
    };
    remove(id: number): any[];
}
