// showpost.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowpostService {

  
  private posts: any[] = [];

  getPosts() {
    const existingPostsString = localStorage.getItem('posts');
    console.log('Existing Posts:', existingPostsString);

    this.posts = existingPostsString ? JSON.parse(existingPostsString) : [];
    console.log('Posts in service:', this.posts);

    return this.posts.length > 0 ? [this.posts[this.posts.length - 1]] : [];
  }
 retrievePosts() {

    const existingPostsString = localStorage.getItem('posts');
    console.log('Existing Posts:', existingPostsString);

     const existingPosts = existingPostsString ? JSON.parse(existingPostsString) : [];
    console.log('Posts in service:', existingPosts);

     return existingPosts;
}
  

  addPost(post: any) {
    post.date = new Date(); // Add a date property to the post
    this.posts.push(post);
  }

  // deletePost(post: any) {
  //   const index = this.posts.indexOf(post);
  //   if (index !== -1) {
  //     this.posts.splice(index, 1);
  //   }
  // }

  deletePost(post: any) {
    // const index = this.posts.findIndex(p => p === post);
    // if (index !== -1) {
    //   this.posts.splice(index, 1);
    //   // Update localStorage after deleting the post
    //   localStorage.setItem('posts', JSON.stringify(this.posts));
    // }
    this.posts = this.posts.filter(p => p !== post);

  // Update localStorage after deleting the post
  localStorage.setItem('posts', JSON.stringify(this.posts));
  }
}
