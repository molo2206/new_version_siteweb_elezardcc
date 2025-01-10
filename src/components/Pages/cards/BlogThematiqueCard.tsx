/* eslint-disable @typescript-eslint/no-explicit-any */
import { limittext, showingTranslateValue } from "../../../utils/heleprs";
import { useAuthContext } from "../../../context";

interface props {
  cat?: any;
}

const BlogThematiqueCard = ({ cat }: props) => {
  const { lang } = useAuthContext();
  return (
    <div className=" bg-white  ">
      <a
        href={
          `/blog/detail/` + showingTranslateValue(cat?.translations, lang)?.slug
        }
        key={cat?.index}
        className=" dark:bg-slate-900 overflow-hidden
               w-[100px]"
      >
        <div className="bg-white shadow rounded-lg border overflow-hidden">
          <img src={cat?.image} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xs font-bold text-blue-600">
              {showingTranslateValue(cat?.category.translations, lang)?.name}
            </h3>
            <p
              className="mt-2 text-gray-800 text-sm font-bold"
              dangerouslySetInnerHTML={{
                __html: limittext(
                  showingTranslateValue(cat?.translations, lang)?.title,
                  30
                ),
              }}
            ></p>
            <div className=" flex justify-between py-2 text-slate-600">
              <p className="text-sm">{cat?.publication_date}</p>
              <p className="text-sm">{cat?.author.full_name}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogThematiqueCard;
