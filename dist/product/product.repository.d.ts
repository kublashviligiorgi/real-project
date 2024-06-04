import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductRepository {
    product: any[];
    create(data: CreateProductDto): {
        id: any;
        title: string;
        price: number;
        image: string;
        color: string[];
        description: string;
    };
    findAll(): any[];
    findOne(id: number): any;
    update(id: number, data: UpdateProductDto): {
        id: any;
        title: any;
        color: any;
        image: any;
        price: any;
        description: any;
    };
    delete(id: number): any[];
}
