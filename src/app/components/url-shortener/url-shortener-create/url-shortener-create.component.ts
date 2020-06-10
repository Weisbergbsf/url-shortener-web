import { Component, OnInit } from '@angular/core';
import { OriginalUrl } from "../original-url.model";
import { ShortenedUrl } from "../shortened-url.model";

import { UrlShortenerService } from '../url-shortener.service';

@Component({
  selector: 'app-url-shortener-create',
  templateUrl: './url-shortener-create.component.html',
  styleUrls: ['./url-shortener-create.component.css']
})
export class UrlShortenerCreateComponent implements OnInit {

  url: OriginalUrl = {
    originalUrl: ''
  }

  shortenedUrl: string

  constructor(private urlShortenerService: UrlShortenerService) { }

  ngOnInit(): void {}

  createShortUrl() {

    return this.urlShortenerService.create(this.url).subscribe((shortenedUrl: ShortenedUrl) => {
      this.shortenedUrl = shortenedUrl.shortenedUrl
    });
  }

  cancel(): void {
    this.url.originalUrl = ''
    this.shortenedUrl = undefined
  }

}
