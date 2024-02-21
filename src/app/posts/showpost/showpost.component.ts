import { Component, OnInit } from '@angular/core';
import { ShowpostService } from '../../showpost.service';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrl: './showpost.component.css'
})
export class ShowpostComponent implements OnInit{
  posts: any[] = [];
excerpt: any;
category: any;
post: any;

  constructor(private showpostService: ShowpostService) { }

  ngOnInit(): void {
    this.posts = this.showpostService.getPosts();
  }

}
