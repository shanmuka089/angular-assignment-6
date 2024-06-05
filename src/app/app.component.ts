import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('form')
  inputFrom!:NgForm;

  constructor() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.inputFrom.form.patchValue({
        plan : "advanced"
      })
    })
  }

  plans = ['basic', 'advanced', 'pro'];

  title = 'assignment-6';

  onSubmit() {
    console.log(this.inputFrom);
    this.inputFrom.reset({
        plan : "basic"
    })
  }
}
