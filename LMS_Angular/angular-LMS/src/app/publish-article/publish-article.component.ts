import { AuthService } from './../../Services/Auth.Service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Document } from '../Model/Document.Model';
import { FormsModule } from '@angular/forms';
import { DocumentService } from '../../Services/Document.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './publish-article.component.html',
  styleUrl: './publish-article.component.css'
})
export class PublishArticleComponent {
  
  document: Document = new Document(); 
  @ViewChild('fileInput') fileInput!: ElementRef

  
  constructor(private documentService: DocumentService,
     private authService: AuthService,
     private router: Router) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
      if (file) {
        const reader: FileReader = new FileReader();

        reader.onload = (e: any) => {
          this.document.file = btoa(e.target.result);
          console.log(this.document.file);
          // Here you can use the base64String as needed, such as uploading to a server or storing in local storage
        };
        reader.readAsBinaryString(file);
      }
  }

  upload(): void{
    console.log(this.authService.getCurrentUserRoleType())
    if(this.authService.getCurrentUserRoleType()+1 === 1){
      this.document.isPublished = true
    }

    this.documentService.addDocument(this.document);
    console.log(this.documentService.getDocuments())
    this.document = new Document(); // Reset the document object
  }
}
