import { ApiProperty } from "@nestjs/swagger"
import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @MaxLength(20)
    @MinLength(5)
    @IsNotEmpty()
    @ApiProperty()
    title: string
    
    @IsString()
    @IsOptional()
    @MaxLength(300)
    @ApiProperty({ required: false })
    content?: string

    @IsBoolean()
    @IsOptional()
    @ApiProperty({ required: false, default: false })
    publish?: boolean = false
    
    @IsNumber()
    @IsOptional()
    @ApiProperty({ required: false, default: false })
    autherID?: number
}
