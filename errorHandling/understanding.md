Point of this Error handling thing is to handle the Unexpected and Unhandled errors properly.
- Its possible to write specific if else blocks, try catch blocks for specifc Scenarios,
- But we can still miss out on some unhandled errors, and for that we need can uses techniques like ErrorBoundaries

---

Keyword is to self-contain the error into a specific component


- Async functions cant be caught inside an error boundary. You would need to explicitly call them using their Hooks


