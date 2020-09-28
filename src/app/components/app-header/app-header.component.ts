import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
    PREFIX = 'AppHeaderComponent';

    log(module: string, line: string = '') {
        console.log(this.PREFIX + '|' + module + '::' + line);
    }

    constructor(
        private matDialog: MatDialog,
        private matSnackbar: MatSnackBar
    ) {
        this.log('constructor');
    }

    ngOnInit() {}
}
