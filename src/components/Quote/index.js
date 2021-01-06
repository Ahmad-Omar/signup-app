import React from "react";
import "./style.css";
function Quote(props) {
  return (
    <div className={`quote ${props.location === "login" ? `quote-login` : ``}`}>
      <blockquote>
        I always observe the people who pass by when I ride an escalator. I'll
        never see most of them again, so I imagine a lot of things about their
        lives... about the day ahead of them.
      </blockquote>
      <p className="author">Hideo Kojima</p>
    </div>
  );
}

export default Quote;
