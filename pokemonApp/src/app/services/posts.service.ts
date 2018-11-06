import { Post } from './../models/post.models';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    const url = 'http://localhost:3000/api/posts';
    return this.http.get<{messages: string, posts: any[]}>(url)
    .pipe(map( (postData) => {
      return postData.posts.map(post => {
        return {
          title: post.title,
          content: post.content,
          id: post._id
        };
      });
    }))
    .subscribe( (transfomredPosts) => {
      this.posts = transfomredPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }

  addPost(title: string, content: string) {
    const url = 'http://localhost:3000/api/posts';
    const post: Post = {
      id: null,
      title: title,
      content: content
    };
    this.http.post<{message: string, postId: string}>(url, post)
                  .subscribe((responseData) => {
                    const id = responseData.postId;
                    post.id = id;
                    this.posts.push(post);
                    this.postsUpdated.next([...this.posts]);
                  });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  deletePost(postId: string) {
    const url = 'http://localhost:3000/api/posts/';
    this.http.delete(url + postId).subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id.toString() !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }
}
