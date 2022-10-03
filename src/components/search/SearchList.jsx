import React, { useEffect } from "react";
import Spinner from "components/common/Spinner";
import SearchMovie from "./SearchMovie";
import { api } from "shared/api";
// 무한스크롤
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

const SearchList = () => {
  // const getSearchList = () => {
  //   return api.get(`/movie/1`);
  // };

  // const searchListQuery = useQuery("searchList", getSearchList, {
  //   onSuccess: (data) => {
  //     console.log(data.data.data);
  //   },
  // });

  // if (searchListQuery.isLoading) {
  //   return <Spinner />;
  // }
  const getSearchList = async (pageParam) => {
    const res = await api.get(`/movie/${pageParam}`);
    const { results, page } = res.data.data;
    console.log(results);
    console.log(page);

    return { results, page };
  };

  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    "results",
    ({ pageParam = 1 }) => getSearchList(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.results.length === 0) {
          return undefined;
        } else {
          return lastPage.page + 1;
        }
      },
    }
  );
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <Spinner />;

  return (
    <div className="mt-10">
      <div className="items-center justify-center pt-0 pb-4 rounded-3xl bg-mGray container mx-auto flex px-2 py-22 md:flex-row flex-col">
        <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 p-14">
          {/* {searchListQuery?.data.data.data.results.map((movie) => (
            <SearchMovie {...movie} key={movie.movieId} />
          ))} */}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((movie) => (
                <SearchMovie {...movie} key={movie.movieId} />
              ))}
            </React.Fragment>
          ))}
        </section>
      </div>
      {isFetchingNextPage ? <Spinner /> : <div ref={ref}></div>}
    </div>
  );
};

export default SearchList;
