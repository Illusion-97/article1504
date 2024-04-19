import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
//import {HotToastService} from "@ngneat/hot-toast";

@Injectable({
    providedIn: 'root'
})
export class DarkmodeService {
    private dark$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    dark: Observable<boolean> = this.dark$.asObservable();

    constructor(/*toast: HotToastService*/) {
        this.dark$.next(document.documentElement.classList.contains("dark") || window.matchMedia('(prefers-color-scheme: dark)').matches)
        this.dark$.subscribe(darkMode => {
            if (darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark')
            }
            //toast.defaultConfig.theme = darkMode ? "snackbar" : "toast";
        })
    }

    toggleDarkMode() {
        this.dark$.next(!this.dark$.value)
    }
}
