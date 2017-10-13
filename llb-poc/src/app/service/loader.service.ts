import { Injectable } from '@angular/core';

/**
 * Service that tells you if the application is currently loading data from rest.
 *
 * Include to your component and use isLoading() or getTasks()
 */
@Injectable()
export class LoaderService {
  private tasks = 0;

  /**
   * Check if the application is currently loading data from rest
   * @returns {boolean}
   */
  isLoading(): boolean {
    return this.tasks > 0;
  }

  /**
   * Get number of currently running tasks
   * @returns {number}
   */
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
