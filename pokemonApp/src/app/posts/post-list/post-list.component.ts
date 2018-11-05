import { Post } from './../../models/post.models';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(postService: PostsService) {
    this.postsService = postService;
  }

  /*posts = [
    { title: 'First post', content: 'This is the first post\'s content' },
    { title: 'Second post', content: `This is the second post's content`}
  ];*/
  posts: Post[] = [];
  postsService: PostsService;

  private postsSub: Subscription;
  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
                      .subscribe((posts: Post[]) => {
                        this.posts = posts;
                      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
