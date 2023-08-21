import { IsNotEmpty, IsUrl } from "class-validator";

export class CreateSpeedrun {
  @IsNotEmpty()
  game: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  time: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  @IsUrl()
  video: string;
}