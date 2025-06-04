import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToGitHub() {
    window.open('https://github.com/JaronHel?tab=repositories', '_blank', 'noopener,noreferrer');
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
