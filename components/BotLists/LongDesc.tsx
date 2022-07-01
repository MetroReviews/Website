import { NoDesc } from "@/root/components/Lists/NoDesc";

export default function List_LongDescription({ value }) {
  return (
    <div className="h-full w-full col-span-9">
      <div className="w-full text-white rounded-lg">
        <div className="mt-5">
          <div
            className="text-center w-full h-auto bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg p-6 shadow-md mx-auto"
            id="widgets"
          >
            <div className="px-4 mx-auto w-auto sm:px-6 lg:px-8 lg:text-center">
              {!value ? (
                <NoDesc />
              ) : (
                <div
                  className="col-span-9 pt-5 lg:pt-0 w-auto"
                  dangerouslySetInnerHTML={{ __html: value }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
