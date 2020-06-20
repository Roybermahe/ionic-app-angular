export class Songs {
    id?: number;
    title?: string;
    duration?: number;
    artist?: any;
    album?: any;

    constructor() { 
        this.id = 0;
        this.title = '';
        this.duration = 0;
        this.artist  = {
            picture_medium: ""
        };
        this.album = {
            title: ""
        }
    }

}
