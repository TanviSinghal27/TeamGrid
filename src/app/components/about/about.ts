import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  systemVersion: string = 'v1.4.2.stable';
  developerAccount: string = 'ansittanvi149';
  buildStatus: string = 'Angular Frontend Architecture';
  releaseDate: string = 'October 2026';
}
