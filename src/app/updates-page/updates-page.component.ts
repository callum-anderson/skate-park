import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'updates-page',
  templateUrl: './updates-page.component.html',
  styleUrls: ['./updates-page.component.css']
})
export class UpdatesPageComponent implements OnInit {
  //facebookFeedURL = 'https://graph.facebook.com/105539168009010/feed?fields=message,created_time,event,full_picture,properties,attachments';
  dataError = false;
  dataLoaded = false;
  data: any;
  updatesToDisplay = 10;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('../../assets/updates.json')
      .toPromise().then(res => {
          this.data = res['data'].map(x => {
            let images = [];
            if (x['full_picture']) images.push(x['full_picture']);
            if (x['attachments']) {
              x['attachments']['data'].forEach(obj => {
                if (obj['media'] && obj['media']['image']) images.push(obj['media']['image']['src']);
                if (obj['subattachments']) {
                  obj['subattachments']['data'].forEach(subObj => {
                    if (subObj['media'] && subObj['media']['image']) images.push(subObj['media']['image']['src']);
                  });
                }
              });
            }
            let created_time = (new Date(x['created_time'])).toUTCString();
            created_time = created_time.substring(0, created_time.indexOf("GMT")-4);
            return {
              created_time: created_time,
              message: x.message,
              images: [...new Set(images)]
            }
          });
          this.dataLoaded = true;
      }, err => {
        this.dataError = true;
      });
  }
}
