// src/Movie.tsx
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase";

interface Movie {
  id?: string;
  title: string;
  year: number;
}

const MovieApp: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newYear, setNewYear] = useState<number>(2023);

  // Tạo tham chiếu đến tập hợp 'movies' trong Firestore
  const moviesCollectionRef = collection(db, "movies");

  const createMovie = async () => {
    // Hàm tạo mới một bộ phim trong Firestore
    await addDoc(moviesCollectionRef, { title: newTitle, year: newYear });
    fetchMovies();
  };

  const fetchMovies = async () => {
    // Hàm lấy danh sách các bộ phim từ Firestore
    const data = await getDocs(moviesCollectionRef);
    setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Movie)));
  };

  const updateMovie = async (id: string, updatedTitle: string) => {
    // Hàm cập nhật một bộ phim cụ thể trong Firestore
    const movieDoc = doc(db, "movies", id);
    await updateDoc(movieDoc, { title: updatedTitle });
    fetchMovies();
  };

  const deleteMovie = async (id: string) => {
    // Hàm xóa một bộ phim cụ thể trong Firestore
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
    fetchMovies();
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies CRUD</h1>
      <input
        placeholder="Movie Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={newYear}
        onChange={(e) => setNewYear(Number(e.target.value))}
      />
      <button onClick={createMovie}>Add Movie</button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <input
              value={movie.title}
              onChange={(e) => updateMovie(movie.id!, e.target.value)}
            />
            <span>{movie.year}</span>
            <button onClick={() => deleteMovie(movie.id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieApp;
