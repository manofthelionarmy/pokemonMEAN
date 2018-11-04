import { Post } from './../../models/post.models';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  enteredContent = '';
  enteredTitle = '';

  @Output() postCreated = new EventEmitter<Post>();

  ngOnInit() {
  }

  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };

    this.postCreated.emit(post);

  }

}
