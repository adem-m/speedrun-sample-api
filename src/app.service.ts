import { Injectable } from "@nestjs/common";
import { SpeedrunEntry } from "./speedrun-entry";
import { CreateSpeedrun } from "./create-speedrun";

@Injectable()
export class AppService {
  private readonly speedruns: SpeedrunEntry[] = [
    {
      id: 1,
      game: "The Legend of Zelda: Ocarina of Time",
      category: "Any%",
      time: "0:21:09",
      date: "2019-01-01",
      video: "https://www.youtube.com/watch?v=9wJQEHNYOwM"
    },
    {
      id: 2,
      game: "The Legend of Zelda: Ocarina of Time",
      category: "100%",
      time: "4:00:00",
      date: "2019-01-02",
      video: "https://www.youtube.com/watch?v=9wJQEHNYOwM"
    },
    {
      id: 3,
      game: "The Legend of Zelda: Ocarina of Time",
      category: "All Dungeons",
      time: "1:00:00",
      date: "2019-01-03",
      video: "https://www.youtube.com/watch?v=9wJQEHNYOwM"
    },
    {
      id: 4,
      game: "Grand Theft Auto: San Andreas",
      category: "Any%",
      time: "0:21:09",
      date: "2019-01-04",
      video: "https://www.youtube.com/watch?v=9wJQEHNYOwM"
    },
    {
      id: 5,
      game: "Super Mario 64",
      category: "16 Star",
      time: "0:21:09",
      date: "2019-01-05",
      video: "https://www.youtube.com/watch?v=9wJQEHNYOwM"
    },
    {
      id: 6,
      game: "Paper Mario",
      category: "Any%",
      time: "0:21:09",
      date: "2019-01-06",
      video: "https://www.youtube.com/watch?v=9wJQEHNYOwM"
    },
    {
      id: 7,
      game: "The Legend of Iltes",
      category: "Any%",
      time: "0:21:09",
      date: "2019-01-07",
      video: "https://www.youtube.com/watch?v=9wJQEHNYOwM"
    }
  ];

  getSpeedruns(): any[] {
    return this.speedruns.map(speedrun => {
      return {
        id: speedrun.id,
        game: speedrun.game,
        time: speedrun.time
      };
    });
  }

  getSpeedrun(id: number): SpeedrunEntry {
    return this.speedruns.find(speedrun => speedrun.id == id);
  }

  createSpeedrun(speedrun: CreateSpeedrun) {
    const id = this.speedruns.length + 1;
    const newSpeedrun = { id, ...speedrun };
    this.speedruns.push(newSpeedrun);
  }
}
