import { ApiProperty } from "@nestjs/swagger"

export class CreatePostDto {
    @ApiProperty()
    title: string
    
    @ApiProperty({ required: false })
    content?: string
    
    @ApiProperty({ required: false, default: false })
    publish?: boolean = false
    
    @ApiProperty({ required: false, default: false })
    autherID?: number
}
