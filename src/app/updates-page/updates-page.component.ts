import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { data } from '../../assets/updates.json';

@Component({
  selector: 'updates-page',
  templateUrl: './updates-page.component.html',
  styleUrls: ['./updates-page.component.css']
})
export class UpdatesPageComponent implements OnInit {
  //facebookFeedURL = 'https://graph.facebook.com/105539168009010/feed?fields=message,created_time,event,full_picture,properties,attachments';
  //accessToken = 'EAAFRYq2SDWIBADoRSE7ggUCxH54UEQZAbaij0R2GCCtjKYfUyfMMQXZBFRQ3enxIwkFvwmWv7nghZBq2D8q1XqY0OJSPW7yOGumHWFZAyx3pNkdtazYqEuwGYE7WxT1JDKCjSyPtfG3AupeOPcYJ6Ews9K1SJrqs7a3I8mZB4vQZDZD';
  //feed;
  //feedError = false;
  //feedLoaded = false;
  data: any = data;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // const options = { params: new HttpParams().set('access_token', this.accessToken) };
    // this.http.get(this.facebookFeedURL, options).subscribe(response => {
    //     let messages = response['data'].filter(x => x['message']);
    //     console.log(messages);
    //     messages = messages.map(x => {
    //       let images = [];
    //       if (x['full_picture']) images.push(x['full_picture']);
    //       if (x['attachments']) {
    //         x['attachments']['data'].forEach(obj => {
    //           if (obj['media'] && obj['media']['image']) images.push(obj['media']['image']['src']);
    //           if (obj['subattachments']) {
    //             obj['subattachments']['data'].forEach(subObj => {
    //               if (subObj['media'] && subObj['media']['image']) images.push(subObj['media']['image']['src']);
    //             });
    //           }
    //         });
    //       }
    //       let created_time = (new Date(x['created_time'])).toUTCString();
    //       created_time = created_time.substring(0, created_time.indexOf("GMT")-4);
    //       return {
    //       created_time: created_time,
    //       message: x.message,
    //       images: [...new Set(images)]
    //       }
    //     });
    //     this.feed = messages;
    //     this.feedLoaded = true;
    //   },
    //   error => {
    //     this.feedError = true;
    //   });
      this.data = this.data.map(x => {
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
  }
}
