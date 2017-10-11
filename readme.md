# Angular 4 + spin.js

Not long ago I was working on a project using Angular 4 and as with many applications I needed a loading indicator.  After doing a bit of searching I decided to use Spin.js, a really cool JavaScript library that can be used to render a 'spinner' without using external images/css.  I then started thinking, how do I do this with Angular 4... do I need a component that I put in every page, is there a way to share a single root level component with my app, etc.  I then came across a really good blog by Tom Buyse explaining how to setup an observable subscription in order to control a single component using a service that you pass around your application (Thanks Tom!).  I think this can be a really useful pattern of development for a number of purposes, but here's a look at how I created an Angular2 spinner component with Spin.js.

(Note: I eventually found better aesthetics using @angular/material's progress indicator and abandoned this, but it was still a good learning effort)
    
### The spinner component
First of all I created the component that I'll put an instance of in my root application view.

```
@Component({
   selector: 'ng2-spinner',
   templateUrl: './app/spinner/spinner.component.html'
})
export class SpinnerComponent implements OnInit, OnDestroy {
.
```
In the component I exposed the Spin.js options as Angular2 component inputs

```
@Input() lines: number = 12; // The number of lines to draw
@Input() length: number = 20; // The length of each line
@Input() width: number = 12; // The line thickness
@Input() radius: number = 50; // The radius of the inner circle
@Input() scale: number = 1.0; // Scales overall size of the spinner
. 
.
.
```

Then on the component's ngOnInit callback I initialize the component with a setup of inputs from the view specifying spin.js options.  It's important to do
so in the ngOnInit callback as in the constructor would be too early and the inputs are not passed from the parent view element.

```
ngOnInit() {
    this.initSpinner();
    this.createServiceSubscription();
}

private initSpinner() {
    let options = {
        lines: this.lines,
        length: this.length,
        width: this.width,
        radius: this.radius,
        scale: this.scale,
        corners: this.corners,
        color: this.color,
        opacity: this.opacity,
        rotate: this.rotate,
        direction: this.direction,
        speed: this.speed,
        trail: this.trail,
        fps: this.fps,
        zIndex: 2e9, // Artificially high z-index to keep on top
        className: this.className,
        top: this.top,
        left: this.left,
        shadow: this.shadow,
        hwaccel: this.hwaccel,
        position: this.position
    };
    console.log('Creating spinner with options:');
    console.log(JSON.stringify((options)));
    this.spinner = new Spinner(options);
}

```

Now we've got an instance of the spin.js object created than we can show and hide as needed. Next comes the magic, we create a service that holds a shared observable in order to control the spinner component from other components within the application.  Note: it's important to import the Rxjs 'share' operator in order to create the shared observable, I did so in a file called rxjs-operators.ts that I've imported into my main application component.

```
@Injectable()
export class SpinnerService {
    private spinnerObserver: Observer<boolean>;
    public spinnerObservable: Observable<boolean>;

    constructor() {
        this.spinnerObservable = new Observable<boolean>(observer => {
                this.spinnerObserver = observer;
            }
        ).share();
    }
}
```

The spinner component can then subscribe to this observable and receive notifications from the service as whether it should show or hide the spinner.  I've also called this subscription code from within the ngOnInit callback, though it'd be fine to do so within the component constructor as well.

```
private createServiceSubscription() {
        this.subscription = this.spinnerService.spinnerObservable.subscribe(show => {
            if (show) {
                this.startSpinner();
            } else {
                this.stopSpinner();
            }
        });
    }
```

The service can use the observable in order to trigger the show and hide states in the component.

```
show() {
    if (this.spinnerObserver) {
        this.spinnerObserver.next(true);
    }
}

hide() {
    if (this.spinnerObserver) {
        this.spinnerObserver.next(false);
    }
}
```

Now I can drop an instance of my spinner component in my main app component specifying it's view options:

```
<ng2-spinner [radius]="25" [lines]="15" [width]="8" [length]="15" [opacity]="0.1" [shadow]="true"></ng2-spinner>
```

And pass around the spinner service to control showing/hiding it everywhere else in my application

```
constructor(private spinnerService: SpinnerService) {
}

public spin(event: MouseEvent): void {
    event.preventDefault();
    this.spinnerService.show();
    setTimeout(() => {
        this.spinnerService.hide();
    }, 1000);
}        
```    
    

I think this is a really useful pattern and can imagine it'll come in handy on my current and future projects. So far I really like Angular2, I think it brings some sanity back to client side web application development.  I can only imagine I'll get more than 1 grumble about that comment, but so far I've found it to be a great development experience.  


http://tombuyse.com/creating-a-loading-indicator-in-angular-2-ionic-2/

http://spin.js.org/