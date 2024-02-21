import { Component } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-single-category',
    standalone: true,
    templateUrl: './single-category.component.html',
    styleUrl: './single-category.component.css',
    imports: [PostCardComponent,CommonModule]
})
export class SingleCategoryComponent {
    articles = [
      {
        imgUrl:'https://cupofjo.com/wp-content/uploads/2022/09/JODY_DRIVER_081-scaled-e1662481809676.jpg',
      title: 'What It’s Like to Parent in Western Australia',
      author: 'by LAURA GUMMERMAN updated 5/15/23',
      content: "Our sixth — and final — Parenthood Around the World interview this year features Jody Driver, who lives with her kids – Maharny (23) and Shelby (15) — in Perth, Australia. “We’re very, very far from anywhere else — in fact, Perth is often called ‘the most isolated city in the world,'” she says. Here, Jody tells us about swimming babies, funny slang, and how to avoid deadly snakes…",
      category: 'Parenting'
    },
      {
        imgUrl:'https://imgs.search.brave.com/aT1vm1htW1tpzOtjFzL_axUyg-D7TZULn47jOuDALyQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjA0MzczNTgyMDct/MzIzYjQzYjUwNzI5/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRSOGZI/QnNZVzVsSlRJd2RI/SmhkbVZzZkdWdWZE/QjhmREI4Zkh3dw',
      title: 'A Random Thing NOT to Do on a Plane',
      author: 'by LAURA GUMMERMAN updated 5/15/23',
      content: "I carry my iPad, my husband’s iPad, a notebook, copies of our travel documents, headphones, and a headphone splitter, along with chargers, backup batteries, and international converters. My bag has a pouch of beauty stuff, a pouch of all the cords, and a pouch of snacks. I also bring two large pashminas that we use as either pillows or blankets.",
      category: 'Travel'
    },
    {
        imgUrl:'https://imgs.search.brave.com/T28Gi8pI-OZJxcqgfbGEvaq26a_kgvhWRBwuuvb1eLw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF6anVZRE5kTEwu/anBn',
      title: 'Visiting My Twin Sister in California',
      author: 'by LAURA GUMMERMAN updated 5/15/23',
      content: "My twin sister Lucy and I chat all the time on the phone, but we realized the other day that since we’re always surrounded by friends and relatives, we hadn’t spent extended one-on-one time together in 12 years! (!!!) And sometimes you just want to twin it up. So, this weekend, we spent three days together in Northern California…",
      category:'Family'
    },
        {
          imgUrl:'https://cupofjo.com/wp-content/uploads/2023/12/Screenshot-2023-12-06-at-2.59.22%E2%80%AFPM.png',
          title: 'Are You Mysteriously Drawn to Bows Right Now?',
          author: 'by LAURA GUMMERMAN updated 5/15/23',
          content: "I don’t usually gravitate to dressy things — I live in white sneakers, and my typical hairstyle is bedhead — but for some reason, this season, I’m really loving bows, and I know many other women who feel the same. Did our collective bow yearnings start last winter, when Mia, in White Lotus, wore a red ribbon in her hair?",
          category: 'Relationship'
        }
        
    ];

}
