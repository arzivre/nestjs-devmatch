import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  // GET /profiles
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }

  // GET /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  // POST /profiles
  @Post()
  create(@Body() createProfileDTO: CreateProfileDTO) {
    return {
      name: createProfileDTO.name,
      descripton: createProfileDTO.description,
    };
  }

  // PUT /profiles/:id
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDTO: UpdateProfileDTO) {
    return {
      id,
      ...updateProfileDTO,
    };
  }
  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {}
}
