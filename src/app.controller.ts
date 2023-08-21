import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { SpeedrunEntry } from "./speedrun-entry";
import { CreateSpeedrun } from "./create-speedrun";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get("api/speedruns")
  getSpeedruns(): any {
    return {
      data: this.appService.getSpeedruns()
    };
  }

  @Get("api/speedruns/:id")
  getSpeedrunById(@Param() params: any): SpeedrunEntry {
    const speedrun = this.appService.getSpeedrun(params.id);
    if (!speedrun) {
      throw new NotFoundException();
    }
    return speedrun;
  }

  @Post("api/speedruns")
  createSpeedrun(@Body() body: CreateSpeedrun) {
    this.appService.createSpeedrun(body);
  }
}
