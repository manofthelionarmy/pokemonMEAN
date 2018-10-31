import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  enteredValue = '';
  newPost = '';

  ngOnInit() {
  }

  onAddPost() {
    // console.log(postInput);
    this.newPost = this.enteredValue;
  }

}
