export function PokemonCardSkeleton() {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center gap-2 shadow animate-pulse bg-gray-100">
      <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
      <div className="h-6 w-32 bg-gray-200 rounded"></div>
      <div className="flex gap-2">
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <PokemonCardSkeleton key={i} />
      ))}
    </div>
  );
}
