import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();

  const getMovieDetails = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>
            {detail.title} (★{detail.rating})
          </h1>

          {/* 장르 표시 */}
          <div style={{ marginBottom: "20px" }}>
            {detail.genres?.map((genre, index) => (
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

          {/* 이미지 중앙 정렬 & 클릭 시 모달 열기 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <img
              src={detail.large_cover_image}
              alt={detail.title}
              style={{
                cursor: "pointer",
                maxWidth: "500px",
                borderRadius: "10px",
              }}
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          {/* 모달 창 */}
          {isModalOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setIsModalOpen(false)}
            >
              <div
                style={{
                  backgroundColor: "#F0F0F0",
                  padding: "20px",
                  borderRadius: "10px",
                  maxWidth: "600px",
                  textAlign: "center",
                }}
              >
                <h2>{detail.title}</h2>
                <p style={{ fontSize: "18px" }}>{detail.description_full}</p>
                <button
                  style={{
                    marginTop: "20px",
                    padding: "10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#333",
                    color: "white",
                  }}
                  onClick={() => setIsModalOpen(false)}
                >
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Detail;
