import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter',
        [
          style({opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms',
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)'})))
        ], { optional: true }),
        query(':leave', animate('50ms', style ({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  images = [
    '../../assets/img/30p-quilt-jpgs/IMG_0834.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0835.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0836.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0837.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0838.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0839.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0840.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0841.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0842.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0843.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0844.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0845.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0846.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0847.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0848.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0849.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0850.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0851.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0852.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0853.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0854.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0855.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0856.jpg',
    '../../assets/img/30p-quilt-jpgs/IMG_0857.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
