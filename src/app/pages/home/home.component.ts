import { Component } from '@angular/core';
import { SingleCategoryComponent } from "../single-category/single-category.component";
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { CommentsListComponent } from '../../comments/comments-list/comments-list.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SingleCategoryComponent, PostCardComponent,CommentsListComponent,CommonModule]
})
export class HomeComponent {
    articles = [
        {
          imgUrl:'https://cupofjo.com/wp-content/uploads/2023/05/Joanna-kids-2048x1439.jpg',
          title: 'Happy Holidays! Lively Hawaai!',
          author: 'by LAURA GUMMERMAN updated 5/15/23',
          content: "I’ve never been much of a camping person (I’m more of a “glamping” person for sure). I’ve certainly done my fair share of it over the years, but I have to admit that I love my outdoorsy events best when I can still end up in a real bed after a shower at night. However, one of my favorite camping-related activities is a campfire. It’s warm, it’s cozy, and there’s usually some sort of yummy snack involved in the process.",
          category: 'Lifestyle'
        },
        {
            imgUrl:'https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
          title: 'Five Ways to Turn a Rotisserie Chicken ',
          author: 'by LAURA GUMMERMAN updated 5/15/23',
          content: "Ever since moving to Manhattan, I feel like the siren song of dinner takeout in the Land of Everything Can Be Delivered has been very hard to resist……but I’ve also found myself very into “halfway-homemade” cooking, picking up a poached salmon or some falafel balls from a local Lebanese spot then fleshing them out with greens or grains. This kind of cooking, of course, calls to mind everybody’s favorite halfway homemade launching point: the always reliable, impossibly tasty rotisserie chicken.",
          category: 'Food'
        },
        {
            imgUrl:'https://imgs.search.brave.com/jNA9IxiwIdhJUMaBOqxmuGvsTMZ1fPFX1wNiXsqm6A8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/Y2VuZS1pbWFnZS1y/ZWQtY2hyaXN0bWFz/LXN0b2NraW5ncy1o/dW5nLWRlY29yYXRl/ZC1maXJlcGxhY2Vf/MTI1NTQwLTUwMzEu/anBnP3NpemU9NjI2/JmV4dD1qcGc',
          title: "Make Your Own Fire Pit in 4 Easy Steps!",
          author: 'by LAURA GUMMERMAN updated 5/15/23',
          content: "Last fall, we bought a mini portable fire pit for our backyard, and we liked it so much that we decided we wanted to build a proper fire pit so we could have fires more often. After doing some research, I was pleasantly surprised to find out that it’s really not that hard to build your own professional-looking fire pit. It’s a pretty easy process to plan out, and although it does take a bit of muscle to complete, it’s totally worth a bit of cardio. Ready to create your own backyard campfires (and get an arm workout in the process)?? Good, let’s get going!",
          category: 'Holidays'
        },
        {
            imgUrl:'https://imgs.search.brave.com/aSNxzNpAIyHL3PGC3osB3TyIYJt8KMAbPWWUuhwHvXk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib29rLWxpYnJh/cnktd2l0aC1vbGQt/b3Blbi10ZXh0Ym9v/ay1zdGFjay1waWxl/cy1saXRlcmF0dXJl/LXRleHQtYXJjaGl2/ZS1yZWFkaW5nLWRl/c2tfNzc5NDY4LTU4/MjIuanBnP3NpemU9/NjI2JmV4dD1qcGc',
          title: 'The 9 Best Fall Cookbooks',
          author: 'by LAURA GUMMERMAN updated 5/15/23',
          content: "If the measure of a good cookbook is that it is ‘of a place,’ then Amy Thielen’s Company wins. Thielen, the James Beard Award winning author of The New Midwestern Table (and onetime host of Food Network’s Heartland Table) lives in the woods of northern Minnesota with her husband and son, “close to the night stars but far from any nightlife.”",
          category: 'Books'
        },
        {
            imgUrl:'https://cupofjo.com/wp-content/uploads/2023/09/Screen-Shot-2023-09-14-at-2.09.09-PM.png',
          title: 'Are You a Party Host or Enthusiastic Guest?',
          author: 'by LAURA GUMMERMAN updated 5/15/23',
          content: "YES! YES! YES! In my group of friends, there are a few Party Hosts (myself included because I enjoy it). Then the Enthusiastic Guests show up with gossip and jokes and Prosecco and Chipwiches. And that’s where the magic happens.",
          category: 'Friendship'
        },
        {
            imgUrl:'https://cupofjo.com/wp-content/uploads/2023/09/Rachael-Petach-house-tour-staircase.jpg',
          title: 'This Family House in Upstate New York',
          author: 'by LAURA GUMMERMAN updated 5/15/23',
          content: "I’ve never been much of a camping person (I’m more of a “glamping” person for sure). I’ve certainly done my fair share of it over the years, but I have to admit that I love my outdoorsy events best when I can still end up in a real bed after a shower at night. However, one of my favorite camping-related activities is a campfire. It’s warm, it’s cozy, and there’s usually some sort of yummy snack involved in the process.",
          category: 'House Tour'
        }
        
    ];
    latests= [
        {
          imgUrl:'https://cupofjo.com/wp-content/uploads/2023/12/Screenshot-2023-12-18-at-9.49.32%E2%80%AFAM.png',
          title: 'Toby and Anton in Conversation',
          author: 'by LAURA GUMMERMAN updated 5/15/23',
          content: "I always figured ages three and four would be my forever favorite — they are such magical thinkers! — so nothing has surprised me more than ages 10 and 13, which are the actual BEST. The boys now make me laugh not just with their cuteness but also with their wit, and I feel like I live with my two incredibly fun friends.",
          category: 'Kids'
        },
        {
            imgUrl:'https://cupofjo.com/wp-content/uploads/2022/06/Stocksy_txp0ded3c4b0FS300_Medium_3569861.jpg',
          title: 'Let’s Find This Reader a Wedding Guest Dress!',
          author: 'by LAURA GUMMERMAN updated 5/15/23',
          content: "I totally get the stress of this, Jodi! Finding a wedding guest outfit can be tough. If you’d rather not shop, consider asking a friend who is the same size if she has something you can borrow? And if you’re on a budget, there are a ton of beautiful dresses on Rent the Runway and Poshmark.",
          category: 'Relationship'
        },
        {
            imgUrl:'https://cupofjo.com/wp-content/uploads/2023/11/monster-cookies-yossy-arefi.jpeg',
          title: 'Monster Cookies',
          author: 'by LAURA GUMMERMAN updated 5/15/23',
          content: "It’s always a good day when we get to tell you about a new book from Yossy Arefi, long-time contributor to Cup of Jo and one of my recipe writers who meets me where I am, namely: in no-fuss baked goods land. Her latest cookbook, Snacking Bakes, speaks my love language, promising treats (bars, brownies, cookies, cakes) that can be made.",
          category: 'Food'
        },
        {
            imgUrl:'https://cupofjo.com/wp-content/uploads/2020/12/peppermint-hc-scaled.jpg',
            title: 'A Shrub for Summer Nights',
            author: 'by LAURA GUMMERMAN updated 5/15/23',
            content: "Today, I’d like to introduce you to my favorite non-alcoholic drink: the fruity, tangy, vibrant shrub. Shrubs are drinking vinegars, and though there are lots of great ones on the market right now — UpMountain and Weathertop are recent wins — the most satisfying kind of shrub is the one I make at home.",
            category : "Drinks"
          }
        
    ];


}
