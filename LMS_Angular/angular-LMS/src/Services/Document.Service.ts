import { Injectable } from '@angular/core';
import { Document } from '../app/Model/Document.Model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = 'https://localhost:7034/api/Document';

  constructor(private http: HttpClient) { 
    this.documents = [
      new Document(1, 'Document 1', 1, false, false, 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
      new Document(2, 'Document 2', 2, false, false, 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
      new Document(3, 'Document 3', 2, true, false, 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
      new Document(2, 'Document 4', 2, true, false, 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
      new Document(3, 'Document 5', 1, true, false, 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
    ];
  }

  
  private documents: Document[] = [];
  getAllDocuments(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/getdocuments', {
      headers: new HttpHeaders({
        'accept': '*/*'
      })
    }).pipe(
      catchError(error => {
        if (error.status === 400) {
          throw new Error('Document not found');
        } else {
          throw new Error('An error occurred while fetching documents.');
        }
      })
    );
  }

  // Method to get all documents
  getDocuments(): Document[] {
    return this.documents;
  }

  // Method to get a document by ID
  getDocumentById(id: number): Document | undefined {
    return this.documents.find(doc => doc.documentID === id);
  }

  // Method to add a new document
  addDocument(document: Document): void {
    console.dir(document)
    this.documents.push(document);
  }

  // Method to update an existing document
  updateDocument(updatedDocument: Document): void {
    const index = this.documents.findIndex(doc => doc.documentID === updatedDocument.documentID);
    if (index !== -1) {
      this.documents[index] = updatedDocument;
    } else {
      console.error('Document not found');
    }
  }

  // Method to delete a document
  deleteDocument(id: number): void {
    const index = this.documents.findIndex(doc => doc.documentID === id);
    if (index !== -1) {
      this.documents.splice(index, 1);
    } else {
      console.error('Document not found');
    }
  }

  ApproveDocument(documentId: number): Observable<any> {
    console.log(documentId)
    const url = `${this.apiUrl}/approvedocument/${documentId}?documentID=${documentId}`;
    const headers = new HttpHeaders({
      'accept': '*/*'
    });

    return this.http.put(url, {}, { headers });
    //.pipe(
      //catchError(this.handleError)
    //);
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      if (error.status === 400) {
        errorMessage = 'Document was not approved successfully';
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    console.error(errorMessage);
    return new Observable((observer) => {
      observer.error(errorMessage);
    });
  }


  DeleteArticle(id: number){
    const index = this.documents.findIndex(doc => doc.documentID === id);
    console.log(this.documents[index])
    if (index !== -1) {
      this.documents[index].isDeleted = true;
    } else {
      console.error('Document not found');
    }
  }
}
