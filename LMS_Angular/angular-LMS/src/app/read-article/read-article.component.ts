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

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments()
    console.log(this.documents)
  }

}