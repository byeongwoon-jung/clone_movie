import { useState } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  // css 적용으로 더보기 버튼 미사용용
  // const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "40%",
        height: "200px",
        margin: "20px 1%",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        overflow: "visible",
        // alignItems: "center",
      }}
    >
      {/* 포스터 이미지 */}
      <div style={{ position: "relative", width: "140px" }}>
        <Link to={`/movie/${id}`}>
          <img
            src={coverImg}
            alt={title}
            style={{
              width: "140px",
              height: "210px",
              objectFit: "cover",
              borderRadius: "10px",
              position: "absolute",
              top: "-40px",
              left: "-40px",
              boxShadow: "4px 6px 12px rgba(0, 0, 0, 0.3)",
            }}
          />
        </Link>
      </div>

      {/* 오른쪽 내용 */}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>
          <Link
            to={`/movie/${id}`}
            style={{ textDecoration: "none", color: "#333" }}
          >
            {title}
          </Link>
        </h2>

        {/* 장르 */}
        <div style={{ marginBottom: "10px" }}>
          {genres &&
            genres.map((genre, index) => (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  padding: "6px 10px",
                  backgroundColor: "#eee",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              >
                {genre}
              </span>
            ))}
        </div>

        {/* 요약 */}
        <p style={{ fontSize: "14px", color: "#444" }}>
          {summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}
        </p>

        {/* 더보기 버튼
        {summary.length > 200 && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              backgroundColor: "#E0E0E0",
              border: "none",
              padding: "6px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "12px",
              marginTop: "10px",
              boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        )} */}
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
