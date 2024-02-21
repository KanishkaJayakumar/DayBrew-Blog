import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { ShowpostService } from '../../showpost.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent implements OnInit{
  posts: any;
  postArray:any=[];

  ngOnInit() {
    this.posts = this.showpostService.getPosts();
    console.log('Posts in component:', this.posts);
  }
  // ngOnInit() {
  //   const existingPostsString = localStorage.getItem('posts');
  //   console.log('Existing Posts:', existingPostsString);
  
  //   this.postArray = existingPostsString ? JSON.parse(existingPostsString) : [];
  //   console.log('Posts in component:', this.postArray);
  // }
  
  
   required: any;
   minlength: any;
   postimg: any;
  permaLink:string='';
  imgSrc: string = './assets/default-image.webp';
  selectedimg:any;
   postForm=this.fb.group({
    title:['',[Validators.required,Validators.minLength(10)]],
    permaLink:[' ',Validators.required],
    excerpt:[' ',[Validators.required,Validators.minLength(50)]],
    category:[' ',Validators.required],
    postimg:[' ',Validators.required],
    content:[' ',Validators.required]
  })
  constructor(private fb:FormBuilder, private showpostService: ShowpostService,private router: Router){
    
  }
  
get fc(){
  return this.postForm.controls
 }
  
  onTitleChanged($event: Event): void {
    if ($event.target instanceof HTMLInputElement) {
    const title=$event.target.value;
    this.permaLink=title.replace(/\s/g,'-');
    }
  }

  showPreview(e: Event): void {
    const fileInput = (e.target as HTMLInputElement)?.files?.[0];
    if (fileInput) {
      this.imgSrc = URL.createObjectURL(fileInput);
  
      // Set the value of the postimg control in the form
      this.postForm.get('postimg')?.setValue(this.imgSrc); // Use imgSrc here, which is a string
    } else {
      // No file selected, show the default image
      this.imgSrc = './assets/default-image.webp';
  
      // Clear the value of the postimg control in the form
      this.postForm.get('postimg')?.setValue(null);
    }
  }
 
  onSubmit() {
    // console.log('Form submitted');
    // const newPost = this.postForm.value;
    // console.log(newPost);
    // this.showpostService.addPost(newPost);
    // this.router.navigate(['/showpost']);
    // this.postForm.reset;
    // onSubmit() {
      console.log('Form submitted');
      const newPost = this.postForm.value;
      
      console.log('New Post:', newPost);
      
    
      // Save data to localStorage
      const existingPostsString = localStorage.getItem('posts');
      console.log('Existing Posts:', existingPostsString);
    
      const existingPosts = existingPostsString ? JSON.parse(existingPostsString) : [];
      existingPosts.push(newPost);
      localStorage.setItem('posts', JSON.stringify(existingPosts));
      console.log('Post details stored in localStorage.');
    
      // Redirect to showpost page or perform any other actions
      this.router.navigate(['/showpost']);
    }
    
  }






// const postData: Post={
//   title : this.postForm.value.title,
//   permaLink:this.postForm.value.permaLink,
//   excerpt:this.postForm.value.excerpt,
//   content:this.postForm.value.content,
//   status:'new',
//   views:0,
//   isFeatured:false,
//   createdAt:new Data(),
// }