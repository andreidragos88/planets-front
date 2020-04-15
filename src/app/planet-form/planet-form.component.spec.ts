import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetFormComponent } from './planet-form.component';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlanetService} from "../service/planet.service";
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import {Observable} from "rxjs/index";

describe('PlanetFormComponent', () => {
  let component: PlanetFormComponent;
  let fixture: ComponentFixture<PlanetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    	imports: [RouterTestingModule],
      declarations: [ PlanetFormComponent ],
      providers: [
      	{ provide: PlanetService, useClass: MockPlanetService },
		    { provide: FormBuilder }
		  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockPlanetService {
  update = function() {

  }
};
