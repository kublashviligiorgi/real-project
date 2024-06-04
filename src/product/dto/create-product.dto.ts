import { IsArray, IsNumber, IsOptional, IsPositive, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MinLength(3)
    title: string;

    @IsPositive()
    @IsNumber()
    price: number;

    @IsUrl()
    image: string;

    @IsArray()
    color: string[];

    @MaxLength(200)
    @IsString()
    @IsOptional()
    description: string;
}
