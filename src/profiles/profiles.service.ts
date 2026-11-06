import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { CreateProfileDTO } from './dto/create-profile.dto';
import type { UpdateProfileDTO } from './dto/update-profile.dto';
@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description: '1',
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      description: '2',
    },
    {
      id: randomUUID(),
      name: 'Leo Park',
      description: '3',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    const matchingProfile = this.profiles.find((profile) => profile.id === id);

    if (!matchingProfile) {
      throw new Error(`Profile with ID ${id} not found`);
    }

    return matchingProfile;
  }

  create(createProfileDTO: CreateProfileDTO) {
    const newProfile = {
      id: randomUUID(),
      ...createProfileDTO,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: string, updateProfileDTO: UpdateProfileDTO) {
    const matchingProfile = this.profiles.find(
      (existingProfile) => existingProfile.id === id,
    );

    if (!matchingProfile) {
      throw new Error(`Profile with ID ${id} not found`);
    }

    matchingProfile.name = updateProfileDTO.name;
    matchingProfile.description = updateProfileDTO.description;

    return matchingProfile;
  }

  remove(id: string) {
    const matchingProfileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );

    if (matchingProfileIndex === -1) {
      throw new Error(`Profile with ID ${id} not found`);
    }

    this.profiles.splice(matchingProfileIndex, 1);
  }
}
