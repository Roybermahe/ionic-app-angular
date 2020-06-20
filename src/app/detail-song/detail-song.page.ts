import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { deezerService } from 'src/services/deezer.service';
import { Songs } from 'src/models/songs';

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.page.html',
  styleUrls: ['./detail-song.page.scss'],
})
export class DetailSongPage implements OnInit {

  idDetailSong: number = 0;
  Song: Songs = new Songs();
  constructor(
    private deezerService: deezerService,
    private pageRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.idDetailSong = +this.pageRoute.snapshot.paramMap.get("id");
    (await this.deezerService.getMusica()).subscribe(Response => {
      this.Song = (<Songs[]>Response.data).find(item => item.id === this.idDetailSong);
    });
  }

}
