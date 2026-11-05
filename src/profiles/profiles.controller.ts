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
} from '@nestjs/common';
import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  // GET /profiles
  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  // GET /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  // POST /profiles
  @Post()
  create(@Body() createProfileDTO: CreateProfileDTO) {
    return this.profileService.create(createProfileDTO);
  }

  // PUT /profiles/:id
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDTO: UpdateProfileDTO) {
    return this.profileService.update(id, updateProfileDTO);
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.profileService.remove(id);
  }
}
