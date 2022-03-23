import { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async() => {
    const results = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setComments(results.data);
  };

  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>
  })
  return (
    <ul>{renderedComments}</ul>
  );
}

export default CommentList;