/* eslint-disable @typescript-eslint/no-explicit-any */
import useAsync from "../../hooks/useAsync";
import TeamsServices from "../../services/TeamsServices";
import BlogCardLoad from "./cards/BlogCardLoad";

const EditorialTeam = () => {
  const { data: team, loading } = useAsync(() => TeamsServices.getTeam());
  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogCardLoad />)
      ) : (
        <div className="bg-gray-50 min-h-screen md:py-10 lg:py-10 dark:bg-slate-900  ">
          {/* Section principale */}
          <section className="flex flex-col md:flex-row items-center p-8 md:p-16">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white uppercase tracking-wide mb-4">
                Qui sommes-nous ?
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Eleza RDC. <br />
                Le média global 100% vidéo.
              </h1>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src="/src/assets/img7.jpg"
                alt="Équipe"
                className="rounded-lg shadow-lg h-full w-full"
              />
            </div>
          </section>

          {/* Section chiffres clés */}
          <section className="bg-white dark:bg-slate-900  py-2 px-8 md:px-8">
            <div className="min-h-screen mx-auto  shadow-md rounded-lg p-8 py-2">
              <h1 className="text-3xl font-bold text-gray-800 mb-6 dark:text-white">
                Équipe éditoriale
              </h1>
              <ul className="space-y-4">
                {team.map((member: any, index: any) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-50 dark:bg-slate-800 p-4 rounded-md shadow-sm"
                  >
                    <span className="text-lg font-semibold text-gray-700 dark:text-white">
                      {member?.fonction} :
                    </span>
                    <span className="text-lg text-gray-600 dark:text-white">
                      {member?.full_name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default EditorialTeam;
