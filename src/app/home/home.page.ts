import { Component, OnInit } from '@angular/core';
import { deezerService } from 'src/services/deezer.service';
import { Songs } from 'src/models/songs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  lista: Songs[] = [];
  constructor(
    private deezerService: deezerService,
    private route: Router
  ) { }

  async ngOnInit() {
    (await this.deezerService.getMusica()).subscribe(Response => {
      this.lista = <Songs[]>Response.data;
    });
  }

  viewSong(id: number) {
    this.route.navigateByUrl('detail-song/' + id);
  }

  durationToMin(d: number) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";
    return hDisplay + mDisplay + sDisplay;
  }

}
