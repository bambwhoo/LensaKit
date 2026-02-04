import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ArtikelDetail() {
  const { slug } = useParams();
  const [artikel, setArtikel] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/artikel/slug/${slug}`)
      .then((res) => res.json())
      .then(setArtikel);
  }, [slug]);

  if (!artikel) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h1 className="text-4xl font-bold">{artikel.judul}</h1>
      <p className="text-gray-500 mb-4">{artikel.penulis}</p>
      <img src={artikel.thumbnail} className="mb-6 rounded" />
      <div>{artikel.isi}</div>
    </div>
  );
}
