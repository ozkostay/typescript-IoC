interface book {
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
}

// Пока типы данных не ясны, то ANY
// abstract class BooksRepository {
//   createBook(book: any) {};
//   getBook(id: any) {};
//   getBooks() {};
//   updateBook(id: any) {};
//   deleteBook(id: any) {};
// }

export abstract class BooksRepository {
  abstract createBook(book: any): Promise<any>;
  abstract getBook(id: string): Promise<any>;
  abstract getBooks(): Promise<any>;
  abstract updateBook(id: string, book: any): Promise<any>;
  abstract deleteBook(id: string): Promise<any>;
}
