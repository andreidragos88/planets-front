import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetListComponent } from './planet-list.component';
import {PlanetService} from "../service/planet.service";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {ApiResponse} from "../model/api.response";
import {Observable} from "rxjs/index";
import { of } from 'rxjs';

describe('PlanetListComponent', () => {
  let component: PlanetListComponent;
  let fixture: ComponentFixture<PlanetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    	imports: [RouterTestingModule],
      declarations: [ PlanetListComponent ],
      providers: [
      	{ provide: PlanetService, useClass: MockPlanetService }
		  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});

class MockPlanetService {
	getAll() {
		return of([{id:1,title:"Earth",description:"Lorem upse",status:1,editable:true},
			{id:2,title:"Earth",description:"Lorem upse",status:1,editable:true}]);
	}
};




