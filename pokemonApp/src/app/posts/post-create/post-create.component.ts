import { PostsService } from './../../services/posts.service';
import { Post } from './../../models/post.models';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postService: PostsService) { }

  enteredContent = '';
  enteredTitle = '';

  types: string[];

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
