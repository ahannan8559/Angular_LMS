import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../Services/Document.Service';
import { Document } from '../Model/Document.Model';
import { CommonModule } from '@angular/common';

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
    console.log('hello')
    this.documents = this.documentService.getDocuments().filter(doc => doc.isPublished === false && doc.isDeleted === false)
    console.log(this.documents)
  }
  
  ApproveArticle(id: number){
    this.documentService.ApproveArticle(id)
    this.documents.splice(this.documents.findIndex(doc => doc.id === 1), 1);
  }
}
