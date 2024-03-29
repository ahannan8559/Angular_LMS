
export class Document {
    id: number;
    title: string;
    authorId: number; // Assuming AuthorId is the ID of the user who created the document
    isPublished: boolean;
    isDeleted: boolean;
    file: string;

    constructor(
        id: number = 0,
        title: string = '',
        authorId: number = 0,
        isPublished: boolean = false,
        isDeleted: boolean = false,
        file: string = ''
      ) {
            this.id = id;
            this.title = title;
            this.authorId = authorId;
            this.isPublished = isPublished;
            this.isDeleted = isDeleted;
            this.file = file;
      }
  }
  