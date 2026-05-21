import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';

interface RegisterUserDTO {
  id: string;
  email: string;
}

export class RegisterUser {
  constructor(private userRepository: UserRepository) {}

  async execute(dto: RegisterUserDTO): Promise<void> {
    const user = new User(dto.id, dto.email);
    await this.userRepository.save(user);
  }
}
