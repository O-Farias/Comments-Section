import { useState } from "react";
import "./index.css";

export default function App() {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date(),
    };

    setComments((state) => [newComment, ...state]);
    setAuthor("");
    setContent("");
    setShowConfirmation(true);

    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      {showConfirmation && (
        <div className="confirmation-message">
          Comentário enviado com sucesso!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">
          <i className="fas fa-envelope"></i> Email
        </label>
        <div className="input-group">
          <input
            type="email"
            id="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <label htmlFor="content">
          <i className="fas fa-comment-dots"></i> Comentário
        </label>
        <div className="input-group">
          <textarea
            id="content"
            cols="30"
            rows="5"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button>
          <i className="fas fa-paper-plane"></i> Enviar comentário
        </button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <h3>{comment.author}</h3>
              <span>Em {comment.createdAt.toLocaleString()}</span>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </section>
    </div>
  );
}
