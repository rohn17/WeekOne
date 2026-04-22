import React from "react";

function Task4() {
  const posts = [
    { id: 1, title: "React Basics", author: "Rohan", comments: 5 },
    { id: 2, title: "JavaScript Guide", author: "Aman", comments: 10 },
    { id: 3, title: "CSS Styling", author: "Neha", comments: 8 },
  ];

  return (
    <div className="card">
      <h2>Blog Posts</h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Comments</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.author}</td>
              <td>{post.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task4;