import { useEffect, useState } from "react";
import Repositories from "./Repositories"
import Pagination from "./Pagination";
import axios from 'axios';
import "../App.css"
import github from "../../src/github.png"


const FetchCall = () => {

  const [mainData, setMainData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const REPOS_PER_PAGE = 20;
  const URL =
  "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100";

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const errHandler = (error) => {
    console.error(`An error occured:\n${error}`);
    setErrorMessage(JSON.stringify(error.message));
    setTimeout(() => {
      setErrorMessage("");
    }, 8000);
  };


  const indexOfLastRepo = currentPage * REPOS_PER_PAGE;
  const indexOffirstRepo = indexOfLastRepo - REPOS_PER_PAGE;
  const currentRepos = mainData.slice(indexOffirstRepo, indexOfLastRepo);

  const content = loading ? (
    <img src={github} id="spinner-loading" alt="loading" />
  ) : (
    <>
    <Repositories
    reposPerPage={REPOS_PER_PAGE}
    currentPage={currentPage}
    mainData={currentRepos}
  />
  <Pagination
    currentPage={currentPage}
    reposPerPage={REPOS_PER_PAGE}
    totalRepos={mainData.length}
    paginate={paginate}
    
  />
  </>
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(URL);
        setMainData(result.data.items);
        setLoading(false);
      } catch (error){
        errHandler(error);
      }
    };
      fetchData();
  }, []);


  return (
    <div>
      {errorMessage && <h4 id="errorMessage">{errorMessage}</h4>}
      {content}
    </div>
    
  );
};


export default FetchCall;
