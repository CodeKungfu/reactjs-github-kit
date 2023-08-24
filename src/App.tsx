import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Nav } from "./components/Nav";
import { List } from "./components/List";
import { Modal } from "./components/Modal";
import { getUrlLanguage, getRequestUrl } from "./utils/index";

export default function App() {
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const [hotGithubRes, setHotGithubRes] = useState([]);
    const [queryParams, setQueryParams] = useState({
      page: 1,
      language: getUrlLanguage()
    });
    const cacheGithubRes = useRef({});
  
    const [error, setError] = useState('');
    const getHotGithubRes = async (language, page) => {
      const url = getRequestUrl(language, page);
      try {
        const res = await axios.get(url)
        if (page === 1) {
          setHotGithubRes(res.data.items);
          if (cacheGithubRes.current) {
            cacheGithubRes.current[language]=res.data.items;
          }
        } else {
          setHotGithubRes([...hotGithubRes, ...res.data.items]);
        }
        setTotal(res.data.total_count);
      } catch (error) {
        // console.log(error);
        setError(error.message);
      }
    };
  
    const onChange = (language) => {
      setError(null);
      setLoading(true);
      setHotGithubRes([]);
      setQueryParams({
        language,
        page: 1,
      });
      window.history.replaceState({}, "", `index.html?language=${language}`);
    };
  
    const fetchNext = () => {
      if (loading) {
        return;
      }
      if (error) {
        return;
      }
      console.log(queryParams.page);
      const thisQueryParams = {
        ...queryParams
      };
      setQueryParams({
        ...queryParams,
        page: thisQueryParams.page + 1,
      });
      console.log(queryParams.page);
    }
  
    useEffect(() => {
      async function fetchData() {
        const cache = cacheGithubRes.current && (cacheGithubRes.current[queryParams.language] || []);
        if (queryParams.page === 1 && cache && cache.length > 0) {
          setHotGithubRes(cache);
        } else {
          await getHotGithubRes(queryParams.language, queryParams.page);
          setLoading(false);
        }
      }
      fetchData();
    }, [queryParams]);
    return (
      <>
          <Nav
            language={queryParams.language}
            change={onChange}
          />
          <Modal
            error={error}
          />
          <List
            load={loading}
            items={hotGithubRes}
            total={total}
            loadMore={() => {
              fetchNext();
            }}
          ></List>
      </>
    );
}