import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  //https://angular.io/start/start-routing#view-product-details
  title = 'Post title'
  content = 'Loading post... ⏳'

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postId = routeParams.get('id');
    console.log('Trying to find post with id of ' + postId);

    const lorem = "<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum dui elit, sit amet condimentum tortor imperdiet quis. Duis eu diam sed lorem convallis posuere ac vitae leo. Aliquam ullamcorper mi non quam tincidunt, at fermentum mauris fringilla. Fusce porttitor felis vel congue sollicitudin. Donec quis ante suscipit, consequat erat gravida, feugiat risus. Donec in mauris facilisis, tristique lacus et, dictum mauris. Suspendisse malesuada, odio sed consectetur imperdiet, arcu diam consectetur ipsum, elementum dapibus dui sem posuere mauris. Curabitur sit amet purus sit amet purus pellentesque consequat. Duis congue sem ut ipsum aliquet congue. Proin ullamcorper dapibus blandit. Sed nec bibendum urna, ut vulputate velit. Maecenas gravida nulla mi."

    // Service for loading goes here?
    setTimeout(() => {this.content = 'Post finally loaded after requesting from server!' + lorem}, 3000)
    // Another block could go here saying 404 in case post is not found?
  }

  goBack() {
    this.router.navigate(['projects']);
  }
}
