import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendDataCourseService {
  private courses: Course[] = [];
  private coursesUrl = 'https://joyofwhitewater.ch/api/kurse/get.php';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl);
  }

  /** Log a BackendDataCourseService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BackendDataCourseService: ${message}`);
  }
}
