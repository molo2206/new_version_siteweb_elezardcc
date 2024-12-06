/* eslint-disable @typescript-eslint/no-explicit-any */
interface props {
  partner?: any;
}
const CardPartner = ({ partner }: props) => {
  return (
    <div>
      <div
        key={partner.id}
        className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={partner?.image}
          alt={partner?.name}
          className="h-24 w-24 mx-auto mb-4 object-contain"
        />
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          {partner?.name}
        </h2>
        <p className="text-gray-600 text-sm mt-2 text-center">
          {partner?.description}
        </p>
      </div>
    </div>
  );
};

export default CardPartner;
