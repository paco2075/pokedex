import { gen1Pokemon } from "@/data/pokemon";
import { PokemonCard } from "@/components/PokemonCard";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            Gen 1 Pokémon Companion
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Your ultimate resource for the original 151 Pokémon. Build teams, explore the Pokédex, 
            and become a better trainer!
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Link 
              href="/team-builder"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Build Your Team
            </Link>
            <Link 
              href="/pokedex"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Browse Pokédex
            </Link>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Team Building</h3>
              <p className="text-gray-600">Create and customize your perfect Pokémon team composition with our interactive builder.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Gen 1 Collection</h3>
              <p className="text-gray-600">Access comprehensive information about all 151 original Pokémon.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Easy Navigation</h3>
              <p className="text-gray-600">Intuitive interface for seamless exploration of Pokémon data and team management.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
