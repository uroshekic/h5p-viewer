declare var require: any;

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

// import { H5P } from 'h5p-standalone';
const { H5P } = require('h5p-standalone');
// const { H5P } = 'H5PStandalone';

const h5pFiles = {
  'das-verb-brauchen': {
    'name': 'Das Verb brauchen'
  },
  'das-verb-mogen': {
    'name': 'Das Verb mögen'
  },
  'imperativ-mit-sie-form': {
    'name': 'Imperativ mit Sie-Form'
  },
  'konjunktion-falls': {
    'name': 'Konjuktion "falls"'
  },
  'konjunktionen': {
    'name': 'Konjunktionen' 
  },
  'nomen': {
    'name': 'Nomen'
  },
  'relativpronomen-im-akkusativ': {
    'name': 'Relativpronomen im Akkusativ'
  },
  'relativpronomen-im-nominativ': {
    'name': 'Relativpronomen im Nominativ'
  },
  'satze-mit-quot-es-quot': {
    'name': 'Sätze mit "es"'
  },
}

@Component({
  selector: 'app-h5p-viewer',
  templateUrl: './h5p-viewer.component.html',
  styleUrls: ['./h5p-viewer.component.css']
})
export class H5pViewerComponent implements OnInit {

  h5pPath: string | undefined;

  h5pFiles: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.h5pFiles = h5pFiles;

    this.route.params.subscribe(params => {
      this.loadViewer(params.id);
    });
  }

  loadViewer(h5pPath: string) {
    // var h5pPath = this.route.snapshot.paramMap.get('id');
    if (h5pPath != null) {
      // TODO Check if H5P file actually exists!
      this.h5pPath = h5pPath;
    }
    console.log("H5P Path: ", h5pPath);

    if (h5pPath != null) {
      const el = document.getElementById('h5p-container');
      const h5pLocation = '/assets/alenka-h5p/' + h5pPath;

      const options = {
        frameJs: '/assets/h5p/frame.bundle.js',
        frameCss: '/assets/h5p/styles/h5p.css'
      };

      const h5pa = new H5P(el, h5pLocation, options);
    }
  }

  h5pFilesKeys(): Array<string> {
    return Object.keys(h5pFiles);
  }

}
