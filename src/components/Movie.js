import { useState } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  const [expanded, setExpanded] = useState(false); // 요약 확장 상태 관리
  const handleReadMore = (movieId) => {
    // 해당 영화의 요약을 확장/축소하는 상태 변경
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [movieId]: !prevExpanded[movieId],
    }));
  };

  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      {/* 포스터 이미지 */}
      <Link to="/movie">
        <img
          src={coverImg}
          alt={title}
          style={{ width: "200px", height: "300px", marginRight: "20px" }}
        />
      </Link>
      <div>
        <h2>
          <Link to="/movie">{title}</Link>
        </h2>
        {/* 장르를 한 줄로 표시 */}
        <div style={{ marginBottom: "10px" }}>
          {genres.map((genre, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                marginRight: "10px",
                padding: "5px",
                backgroundColor: "#f0f0f0",
                borderRadius: "5px",
              }}
            >
              {genre}
            </span>
          ))}
        </div>

        {/* 요약 텍스트 */}
        <p>
          {expanded[id]
            ? summary
            : summary.length > 200
            ? `${summary.slice(0, 200)}...`
            : summary}
        </p>

        {/* 더보기 버튼 */}
        {summary.length > 200 && (
          <button
            style={{
              borderRadius: "5px",
              backgroundColor: "white",
              border: "1px solid #dcdcdc",
              boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
            }}
            onClick={() => handleReadMore(id)}
          >
            {expanded[id] ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
