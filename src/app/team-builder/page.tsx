import { TeamBuilder } from "@/components/TeamBuilder";

export default function TeamBuilderPage() {
  return (
    <main className="p-8 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 drop-shadow-sm">Team Builder</h1>
        <p className="text-lg text-gray-600 mb-8">Create and customize your perfect Gen 1 Pokémon team.</p>
        <TeamBuilder />
      </div>
    </main>
  );
}
