import { Post } from './../models/post.models';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts(): Post[] {
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = {
      title: title,
      content: content
    };
    this.posts.push(post);
    this.postsUpdated.next( [...this.posts] );
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
