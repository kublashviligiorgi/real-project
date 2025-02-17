import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): {
        id: any;
        title: string;
        price: number;
        image: string;
        color: string[];
        description: string;
    };
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateProductDto: UpdateProductDto): {
        id: any;
        title: any;
        color: any;
        image: any;
        price: any;
        description: any;
    };
    remove(id: string): any[];
}
