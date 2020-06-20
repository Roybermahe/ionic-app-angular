import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSongPage } from './detail-song.page';

describe('DetailSongPage', () => {
  let component: DetailSongPage;
  let fixture: ComponentFixture<DetailSongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
