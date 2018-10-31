import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  /*posts = [
    { title: 'First post', content: 'This is the first post\'s content' },
    { title: 'Second post', content: `This is the second post's content`}
  ];*/
  @Input() posts = [];

  ngOnInit() {
  }



}
