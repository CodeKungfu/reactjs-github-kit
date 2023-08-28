import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Load } from "@/components/Load";
import { UserCard } from "@/components/UserCard";
import { getTwoUserName } from "@/utils/index";

function fetchPlayer(username: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(data => {
        resolve(data);
      })
      .catch((error) => {
        error.json().then((err: any) => {
          reject(err?.message || "Something went wrong")
        });
      });
  });
}
export default function Result() {
  const navigate = useNavigate();
  const {githubUserOne, githubUserTwo} = getTwoUserName();
  const [playerOneData, setPlayerOneData] = useState<any | null>(null);
  const [playerTwoData, setPlayerTwoData] = useState<any | null>(null);

  useEffect(() => {
    if (githubUserOne) {
      fetchPlayerOne()
    }
    if (githubUserTwo) {
      fetchPlayerTwo();
    }
  }, [githubUserOne, githubUserTwo]);

  const fetchPlayerOne = async () => {
    try {
      const user = await fetchPlayer(githubUserOne);
      setPlayerOneData(user);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchPlayerTwo = async () => {
    try {
      const user = await fetchPlayer(githubUserTwo);
      setPlayerTwoData(user);
    } catch (error) {
      console.log(error);
    }
  }

  const handleReset = () => {
    navigate('/battle')
  }

  if (!githubUserOne || !githubUserTwo) {
    return (
      <div className="py-4 h-full flex flex-col items-center">
        <h1 className="pb-4">Battle计算无法完成，因为用户输入有误</h1>
        <button onClick={handleReset} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">reset</button>
      </div>
    );
  }

  if (!playerOneData || !playerTwoData) {
    return (
      <div className="py-4 h-full flex flex-col items-center">
        <Load load={true}/>
      </div>
    );
  }

  const winner = playerOneData.public_repos > playerTwoData.public_repos ? githubUserOne : githubUserTwo;

  return (
    <div className="py-4 h-full flex flex-col items-center">
      <div className="flex w-full mb-10">
        <div className="w-1/2">
          <UserCard title={winner === githubUserOne ? "Winner" : 'Loser'} data={playerOneData} />
        </div>
        <div className="w-1/2">
          <UserCard title={winner === githubUserTwo ? "Winner" : 'Loser'} data={playerTwoData} />
        </div>
      </div>
      <button onClick={handleReset} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">reset</button>
    </div>
  );
}
