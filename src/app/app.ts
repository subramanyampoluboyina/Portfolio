import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('navLinks')
  private navLinks?: ElementRef<HTMLElement>;

  protected scrollNav(direction: 'left' | 'right'): void {
    const nav = this.navLinks?.nativeElement;

    if (!nav) {
      return;
    }

    const offset = direction === 'left' ? -140 : 140;
    nav.scrollBy({ left: offset, behavior: 'smooth' });
  }
}
