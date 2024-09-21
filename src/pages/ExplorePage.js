import PlaceCard from '../components/PlaceCard';

const ExplorePage = () => {
  const places = [
    { name: 'Darjeeling', description: 'Beautiful hill station', image: '/images/darjeeling.jpg' },
    { name: 'Kalimpong', description: 'Stunning landscape', image: '/images/kalimpong.jpg' },
  ];

  return (
    <div className="mt-20 p-8">
      <h1 className="text-2xl font-bold mb-8">Explore North Bengal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;