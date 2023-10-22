import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ required: false })
    firstName?: string
    
    @ApiProperty({ required: false })
    lastName?: string
    
    @ApiProperty({ required: false, default: true })
    isActive?: boolean = true
}
