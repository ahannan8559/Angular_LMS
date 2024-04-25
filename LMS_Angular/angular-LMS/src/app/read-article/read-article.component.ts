import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../Services/Document.Service';
import { Document } from '../Model/Document.Model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-article.component.html',
  styleUrl: './read-article.component.css'
})
export class ReadArticleComponent implements OnInit{

  documents: Document[] = []
  constructor(private documentService:DocumentService){}

  // ngOnInit(): void {
  //   this.documents = this.documentService.getDocuments().filter(doc => doc.isPublished === true && doc.isDeleted === false)
  // }

  ngOnInit(): void {
    this.documentService.getAllDocuments().subscribe({
      next: (response: Document[]) => {
        console.log(response)
        this.documents = response.filter((document: Document) => document.isPublished && !document.isDeleted);;
      },
      error: (error) => {
        // If an error occurs, assign the error message
        //this.errorMessage = error.message; // Accessing error message
      }
    });
  }
}
