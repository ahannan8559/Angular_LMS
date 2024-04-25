
export class Document {
    documentID: number;
    title: string;
    authorId: number;
    isPublished: boolean;
    isDeleted: boolean;
    filename: string;
    description: string;

    constructor(
        documentID: number = 0,
        title: string = '',
        authorId: number = 0,
        isPublished: boolean = false,
        isDeleted: boolean = false,
        filename: string = '',
        description: string = ''
      ) {
            this.documentID = documentID;
            this.title = title;
            this.authorId = authorId;
            this.isPublished = isPublished;
            this.isDeleted = isDeleted;
            this.filename = filename;
            this.description = description;
      }
  }
  