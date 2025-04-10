import { getComments, addComment } from '../../data/commentsData';

export async function GET() {
  try {
    const comments = getComments();
    return Response.json({ comments });
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    
    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Add comment
    const newComment = addComment({ name, email, message });
    
    return Response.json({
      message: 'Comment added successfully',
      comment: newComment
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to add comment' },
      { status: 500 }
    );
  }
}
