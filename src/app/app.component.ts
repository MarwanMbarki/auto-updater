import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><br>
  Version: <span id="version">v0.1.9</span>
      <!-- the button onClick sends a quitAndInstall message to the electron main process -->
  <button id="ready" onClick="ipcRenderer.send('quitAndInstall')">no updates ready</button>
  `,
})
export class AppComponent  {
   name = 'Marwan';
 }
