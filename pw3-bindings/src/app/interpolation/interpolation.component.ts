import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  title = 'teste legal!';
  foto = 'favicon.ico';

  soma(n1: number, n2: number) : Number{
    return n1 + n2;
}
}
