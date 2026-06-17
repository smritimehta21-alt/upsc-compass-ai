# UPSC Compass AI - API Documentation

## Health Check

### Endpoint
```
GET /api/health
```

### Response
```json
{
  "status": "ok",
  "message": "API is running",
  "timestamp": "2024-06-17T09:23:20Z"
}
```

### Status Codes
- `200` - API is healthy
- `500` - API error

## Authentication

### Headers
```
Authorization: Bearer <token>
Content-Type: application/json
```

## Error Handling

All API errors follow this format:
```json
{
  "success": false,
  "error": "Error message",
  "timestamp": "2024-06-17T09:23:20Z"
}
```

## Rate Limiting

- Limit: 100 requests per minute per IP
- Headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`

## Endpoints to Implement

### User Management
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Study Topics
- `GET /api/topics` - Get all topics
- `GET /api/topics/:id` - Get topic details
- `POST /api/topics` - Create new topic (admin)
- `PUT /api/topics/:id` - Update topic (admin)

### User Progress
- `GET /api/progress` - Get user progress
- `POST /api/progress/:topicId` - Update topic progress
- `GET /api/progress/stats` - Get progress statistics

### AI Integration
- `POST /api/ai/generate-content` - Generate study content
- `POST /api/ai/ask-question` - Ask AI questions
- `GET /api/ai/recommendations` - Get learning recommendations

---

**API Version**: 1.0
**Last Updated**: 2024
