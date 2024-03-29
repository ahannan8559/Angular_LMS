import { Injectable } from '@angular/core';
import { Document } from '../app/Model/Document.Model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documents: Document[] = [];

  constructor() {
    this.documents = [
      new Document(1, 'Document 1', 1, false, false, 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
      new Document(2, 'Document 2', 2, false, false, 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
      new Document(3, 'Document 3', 2, true, false, 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
      new Document(2, 'Document 4', 2, true, false, 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
      new Document(3, 'Document 5', 1, true, false, 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
    ];
  }

  // Method to get all documents
  getDocuments(): Document[] {
    return this.documents;
  }

  // Method to get a document by ID
  getDocumentById(id: number): Document | undefined {
    return this.documents.find(doc => doc.id === id);
  }

  // Method to add a new document
  addDocument(document: Document): void {
    console.dir(document)
    this.documents.push(document);
  }

  // Method to update an existing document
  updateDocument(updatedDocument: Document): void {
    const index = this.documents.findIndex(doc => doc.id === updatedDocument.id);
    if (index !== -1) {
      this.documents[index] = updatedDocument;
    } else {
      console.error('Document not found');
    }
  }

  // Method to delete a document
  deleteDocument(id: number): void {
    const index = this.documents.findIndex(doc => doc.id === id);
    if (index !== -1) {
      this.documents.splice(index, 1);
    } else {
      console.error('Document not found');
    }
  }

  ApproveArticle(id: number){
    const index = this.documents.findIndex(doc => doc.id === id);
    console.log(this.documents[index])
    if (index !== -1) {
      this.documents[index].isPublished = true;
    } else {
      console.error('Document not found');
    }
  }
  DeleteArticle(id: number){
    const index = this.documents.findIndex(doc => doc.id === id);
    console.log(this.documents[index])
    if (index !== -1) {
      this.documents[index].isDeleted = true;
    } else {
      console.error('Document not found');
    }
  }
}
