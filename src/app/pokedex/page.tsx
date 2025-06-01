'use client';

import { Suspense, useState } from "react";
import { gen1Pokemon } from "@/data/pokemon";
import { PokemonCard } from "@/components/PokemonCard";
import { Button } from "@/components/ui/button";
import { LoadingGrid } from "@/components/PokemonCardSkeleton";

const ITEMS_PER_PAGE = 20;

export default function Pokedex() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(gen1Pokemon.length / ITEMS_PER_PAGE);
  
  const paginatedPokemon = gen1Pokemon.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <main className="p-8 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 drop-shadow-sm">Gen 1 Poketmon Collection</h1>
        
        {/* Pagination Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            Showing {((page - 1) * ITEMS_PER_PAGE) + 1} - {Math.min(page * ITEMS_PER_PAGE, gen1Pokemon.length)} of {gen1Pokemon.length}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>

        {/* Pokemon Grid with Suspense */}
        <Suspense fallback={<LoadingGrid />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedPokemon.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </Suspense>

        {/* Bottom Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="px-4 py-2 text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
}
