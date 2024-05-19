function logErrorMessage(error: unknown): void {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log('An unknown error occurred');
  }
}

// Usage
try {
  // Some operation that might throw
} catch (error) {
  logErrorMessage(error);
}
