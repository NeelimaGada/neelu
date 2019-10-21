import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht:HttpClient) { }
  getData() {
    return this.ht.get("https://hn.algolia.com/api/v1/search_by_date?tags=story")
  }
  postData(d) {
    return this.ht.post("http://localhost:3500/posts",d)
  }
}
