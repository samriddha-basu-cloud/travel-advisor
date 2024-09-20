const CabOptions = ({ options }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Available Cabs</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index} className="mb-2">{option.name} - ₹{option.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default CabOptions;