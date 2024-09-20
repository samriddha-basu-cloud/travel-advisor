const PlaceCard = ({ place }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={place.image} alt={place.name} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{place.name}</h2>
        <p className="text-gray-700 text-base">{place.description}</p>
      </div>
    </div>
  );
};

export default PlaceCard;