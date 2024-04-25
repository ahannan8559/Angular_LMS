import { Component } from '@angular/core';
import { DocumentService } from '../../Services/Document.Service';
import { Document } from '../Model/Document.Model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-article.component.html',
  styleUrl: './delete-article.component.css'
})
export class DeleteArticleComponent {
  documents: Document[] = []
  constructor(private documentService:DocumentService){
    
  }

  ngOnInit(): void {
    console.log('hello')
    this.documents = this.documentService.getDocuments().filter(doc => doc.isPublished === false && doc.isDeleted === false)
    console.log(this.documents)
  }
  
  DeleteArticle(id: number){
    //this.documentService.ApproveArticle(id)
    //this.documents.splice(this.documents.findIndex(doc => doc.id === 1), 1);
  }
}
