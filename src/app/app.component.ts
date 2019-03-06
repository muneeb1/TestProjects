import { Component } from '@angular/core';
import {Document, Paragraph, Packer} from 'docx';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public person = {
    firstname:"",
    lastname:""
  }
  submit(){
    const document = new Document();
    document.addParagraph(new Paragraph("First Name: "+ this.person.firstname));
    document.addParagraph(new Paragraph("Last Name: "+ this.person.lastname));
    const packer = new Packer();
    packer.toBlob(document).then(blob => {
      FileSaver.saveAs(blob,"test.docx");
    });
  }
}
