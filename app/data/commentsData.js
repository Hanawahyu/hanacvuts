// In-memory storage for comments (replace with database in production)
let comments = [];

export function getComments() {
  return comments;
}

export function addComment(comment) {
  const newComment = {
    id: Date.now().toString(),
    ...comment,
    createdAt: new Date().toISOString()
  };
  comments.unshift(newComment); // Add to beginning of array
  return newComment;
} 