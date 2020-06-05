import { TestBed } from '@angular/core/testing';

import { BackendDataCourseService } from './backend-data-course.service';

describe('BackendDataCourseService', () => {
  let service: BackendDataCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendDataCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
