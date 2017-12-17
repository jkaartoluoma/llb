import { Injectable } from '@angular/core';

/**
 * Service that tells you if the application is currently loading data from rest.
 *
 * Include to your component and use isLoading() or getTasks()
 */
@Injectable()
export class LoaderService {
  private tasks = 0;

  getTasks(): number {
    return this.tasks;
  }

  addTask(): void {
    ++this.tasks;
  }

  removeTask(): void {
    --this.tasks;
  }
}
