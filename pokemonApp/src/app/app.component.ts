import { Post } from './models/post.models';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  storedPosts: Post[] = [];
  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
