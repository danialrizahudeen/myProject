import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class SpotifyService {
 getHeader(query: string) {
 const url = 'https://api.spotify.com/v1/' + query;
 let headers = new HttpHeaders();
 headers = headers.append(
 'Authorization',
 // tslint:disable-next-line: max-line-length
 "Bearer BQBTncL5fJBoQrV_ypcUl4HJ5_nKu862yvZZDkChtMRwsgYaJ3oE6HHhBbs9EvQZdT2PdPIGxfBLSqIS7IpiOeRCwje8DSMwWTg_vYQy8sBs4pHqfuy7Zg-pQDNJtNCqXGf3mHV1MMxTPnxvRgPKLWAO8QBzZ8FvOE20lcxuXUz8NT0YNznMFaUKhJQ3N8g"
 );
 return this._http.get(url, { headers });
 }
 // tslint:disable-next-line: variable-name
 constructor(private _http: HttpClient) {}
 searchMusic(str: string, type = 'artist') {
 const param = '&offset=0' + '&limit=20' + '&type=' + type +
'&market=US';
 const query = 'search?query=' + str + param;
 return this.getHeader(query);
 }
 getArtist(id: string) {
 const query = `artists/${id}`;
 return this.getArtist(query);
 }
}
