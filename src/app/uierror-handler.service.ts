import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class UierrorHandlerService extends ErrorHandler {

  constructor() {
    super();
   }

   handleError(error) {
     super.handleError(error);
     alert('Fehler: ' + error.message);
   }

}
