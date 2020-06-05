import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Course } from './types/joyOfWhitewater';
import { Observable, of } from 'rxjs';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BackendDataCourseService {
  private courses: Course[] = [];
  // private coursesUrl = 'https://joyofwhitewater.ch/api/kurse/get.php';
  // Geht nur, weil ich temp. den Header angepasst habe (Access-Control-Allow-Origin: *)
  private coursesUrl = 'http://localhost:8888/api/kurse/get.php';

  constructor(
    private http: HttpClient,
    /*private messageService: MessageService*/) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl);
  }

  /** Log a BackendDataCourseService message with the MessageService */
  /*private log(message: string) {
    this.messageService.add(`BackendDataCourseService: ${message}`);
  }*/
}
