import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ShowpostService } from '../../showpost.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrl: './all-post.component.css'
})
export class AllPostComponent {
  posts: any[];

  constructor(private showpostService: ShowpostService) {
    this.posts = this.showpostService.retrievePosts();
    console.log(this.posts);
  }

  onDelete(post: any) {
    // Call the deletePost method from the service
    this.showpostService.deletePost(post);
    
    // Optionally, you can refresh the posts array if required.
    this.posts = this.showpostService.getPosts();
  } 
}


