import { Component } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Alumne } from './alumne';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alumnes: Observable<Alumne[]>;

  constructor(private dataService: DataService) {
    this.alumnes = this.dataService.getAlumnes();
  }
}
