import { Post } from './../models/post.models';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    const url = 'http://localhost:3000/api/posts';
    return this.http.get<{messages: string, posts: Post[]}>(url).subscribe( (postData) => {
      this.posts = postData.posts;
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
    this.http.post<{message: string}>(url, post)
                  .subscribe((responseData) => {
                    console.log(responseData.message);
                    this.posts.push(post);
                    this.postsUpdated.next([...this.posts]);
                  });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
