// app/api/ratings/route.js
// In-memory storage (replace with database in production)
let ratings = [];
let totalRating = 0;

export async function GET() {
  const average = ratings.length > 0 ? totalRating / ratings.length : 0;
  return Response.json({
    average: Number(average.toFixed(1)),
    count: ratings.length
  });
}

export async function POST(request) {
  try {
    const { value } = await request.json();
    
    if (typeof value !== 'number' || value < 1 || value > 5) {
      return Response.json(
        { error: 'Invalid rating value' },
        { status: 400 }
      );
    }

    ratings.push(value);
    totalRating += value;

    return Response.json({
      message: 'Rating submitted successfully',
      average: Number((totalRating / ratings.length).toFixed(1)),
      count: ratings.length
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to process rating' },
      { status: 500 }
    );
  }
}