const loadCommentsBtn = document.getElementById("load-comment");
const commentsSectionElement = document.getElementById("comments");
const commentsFormElement = document.querySelector("#comments-form form");
const commentTitleElement = document.getElementById("title");
const commentTextElement = document.getElementById("text");

function createCommentList(comments) {
  const commentListElement = document.createElement("ol"); //creates an element in HTML using DOM

  for (const commentloop of comments) {
    const commentElement = document.createElement("li");
    commentElement.innerHTML = `
        <article class="comment-item">
        <h2>${commentloop.title}</h2>
        <p>${commentloop.text}</p>
      </article>
      `;

    commentListElement.appendChild(commentElement);
  }
  return commentListElement;
}

async function fetchCommentsforPost() {
  const postId = loadCommentsBtn.dataset.postid;
  const response = await fetch(`/posts/${postId}/comments`);
  const responseData = await response.json();
  //   console.log(responseData);
  if (responseData && responseData.length > 0) {
    const commentListElement = createCommentList(responseData);
    commentsSectionElement.innerHTML = " ";
    commentsSectionElement.appendChild(commentListElement);
  } else {
    commentsSectionElement.firstElementChild.textContent = `No comments are started for this post. Maybe add one comment?`;
  }
}

async function saveComment(event) {
  event.preventDefault();

  const commentTitle = commentTitleElement.value;
  const commentText = commentTextElement.value;

  const postid = commentsFormElement.dataset.postid;
  const comments = { title: commentTitle, text: commentText };
  const response = await fetch(`/posts/${postid}/comments`, {
    method: "POST",
    body: JSON.stringify(comments),
    headers: {
      "Content-Type": "application/json",
    },
  });
  fetchCommentsforPost();
}

loadCommentsBtn.addEventListener("click", fetchCommentsforPost);
commentsFormElement.addEventListener("submit", saveComment);
