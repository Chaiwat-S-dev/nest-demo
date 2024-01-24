import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @MaxLength(20)
    @MinLength(5)
    @IsNotEmpty()
    @ApiProperty({ required: true })
    firstName?: string
    
    @IsString()
    @MaxLength(20)
    @MinLength(5)
    @IsNotEmpty()
    @ApiPropertyOptional()
    lastName?: string
    
    @IsBoolean()
    @IsOptional()
    @ApiProperty({ required: false, default: true })
    isActive?: boolean = true
}
