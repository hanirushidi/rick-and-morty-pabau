import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_CHARACTERS } from "../queries";
import Card from "../components/Card";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      filter: {
        status: status || undefined,
        species: species || undefined,
      },
    },
  });

  const sortedResults = [...(data?.characters?.results || [])].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "origin") return a.origin.name.localeCompare(b.origin.name);
    return 0;
  });

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-white">
        Loading characters...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-red-500">
        Error: {error.message}
      </div>
    );

  return (
    <div className="min-h-screen px-6 py-10 bg-[url(/background.png)] bg-cover bg-center text-white">
      <h1 className="text-center text-5xl font-luckiest mb-10">Characters</h1>

      {/* Filters + Sorting */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-gray-900 border border-gray-600 rounded px-4 py-2"
        >
          <option value="">All Statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          className="bg-gray-900 border border-gray-600 rounded px-4 py-2"
        >
          <option value="">All Species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-900 border border-gray-600 rounded px-4 py-2"
        >
          <option value="name">Sort by Name</option>
          <option value="origin">Sort by Origin</option>
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortedResults.map((char) => (
          <Card
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={!data?.characters?.info?.prev}
          className="bg-gray-800 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={!data?.characters?.info?.next}
          className="bg-gray-800 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
