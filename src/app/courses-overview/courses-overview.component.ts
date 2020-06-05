import { Component, OnInit } from '@angular/core';

import { Course } from '../types/joyOfWhitewater';


@Component({
  selector: 'app-courses-overview',
  templateUrl: './courses-overview.component.html',
  styleUrls: ['./courses-overview.component.scss']
})
export class CoursesOverviewComponent implements OnInit {

  courses: Course[] = [{
    name: 'Basiskurs',
    description: 'Für blutige Neulinge',
    level: 'BB',
    meetingPoint: 'Versam Station',
    guide: 'Joe Frey',
    price: 450.00,
    fromDate: '23.06.2020',
    toDate: '25.06.2020',
  }, {
    name: 'Könnerkurs',
    description: 'Für Profis',
    level: 'K',
    meetingPoint: 'Ilanz',
    guide: 'Joe Frey',
    price: 450.00,
    fromDate: '23.07.2020',
    toDate: '25.07.2020',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
