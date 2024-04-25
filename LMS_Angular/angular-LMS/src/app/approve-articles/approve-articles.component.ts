import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../Services/Document.Service';
import { Document } from '../Model/Document.Model';
import { CommonModule } from '@angular/common';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-approve-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approve-articles.component.html',
  styleUrl: './approve-articles.component.css'
})
export class ApproveArticlesComponent implements OnInit{
  documents: Document[] = []
  constructor(private documentService:DocumentService){
    
  }

  ngOnInit(): void {
    this.documentService.getAllDocuments().subscribe({
      next: (response: Document[]) => {
        console.log(response)
        this.documents = response.filter((document: Document) => !document.isPublished && !document.isDeleted);
        console.log('Thiiissssssssssss');
        console.log(this.documents);
      },
      error: (error) => {
        //this.errorMessage = error.message;
      }
    });
  }
  
  ApproveArticle(id: number){
    console.log('Before Approving......')
    console.log(id)
    this.documentService.ApproveDocument(id)
      .pipe(
        tap(() => {
          console.log('Document approved successfully');0
          this.documents.splice(this.documents.findIndex(doc => doc.documentID === id), 1);
        }),
        catchError((error) => {
          console.error('Error:', error);
          throw error;
        })
      )
      .subscribe();
  }
}