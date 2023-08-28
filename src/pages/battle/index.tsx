import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Instructions } from "@/components/Instructions";
import { BattleUser } from "@/components/BattleUser";
import { UserCard } from "@/components/UserCard";
import { isTwoUser, getTwoUserInfo } from "@/utils/index";
export default function Battle() {
    const navigate = useNavigate();
    const twoUserInfo = getTwoUserInfo();
    const [githubUserOne, setGithubUserOne] = useState<string>(twoUserInfo.userOne || '');
    const [githubUserTwo, setGithubUserTwo] = useState<string>(twoUserInfo.userTwo || '');
    const [showBattleResult, setShowBattleResult] = useState<boolean>(isTwoUser());
    const [userOneData, setUserOneData] = useState({
        public_repos: 0,
        ...twoUserInfo.userOneData
    });
    const [userTwoData, setUserTwoData] = useState({
        public_repos: 0,
        ...twoUserInfo.userTwoData
    });
    const handleReset = () => {
        localStorage.removeItem(`${githubUserOne}`);
        localStorage.removeItem(`${githubUserTwo}`);
        setGithubUserOne('');
        setGithubUserTwo('');
        setShowBattleResult(false);
        window.history.replaceState({}, "", "/battle");
    }
    useEffect(() => {
        if (!githubUserOne || !githubUserTwo) {
            setShowBattleResult(false);
            window.history.replaceState({}, "", "/battle");
        }
    }, []);
    useEffect(() => {
        if (githubUserOne && githubUserTwo) {
            navigate(`/result?userOne=${githubUserOne}&userTwo=${githubUserTwo}`);
            // setShowBattleResult(true);
            // window.history.replaceState({}, "", `?userOne=${githubUserOne}&userTwo=${githubUserTwo}`);
            // localStorage.setItem('battle-userOne', `${githubUserOne}`);
            // localStorage.setItem('battle-userTwo', `${githubUserTwo}`);
        }
    }, [githubUserOne, githubUserTwo]);

    let content;
    if (!showBattleResult) {
        content = <div className="py-4 h-full flex flex-col items-center">
            < Instructions />
            <div className="w-full mt-20">
                <h3 className="text-xl text-center mb-6">Players</h3>
                <div className="flex items-center justify-between mx-10">
                    <div className="flex-1 w-[50%] mr-10">
                        <BattleUser title="Play One" onSubmitUser={(user, userData) => {
                            setUserOneData(userData);
                            setGithubUserOne(user);
                        }} />
                    </div>
                    <div className="flex-1 w-[50%]">
                        <BattleUser title="Play Two" onSubmitUser={(user, userData) => {
                            setUserTwoData(userData);
                            setGithubUserTwo(user);
                        }} />
                    </div>
                </div>
            </div>
        </div>
    } else {
        content = <div className="py-4 h-full flex flex-col items-center">
        <div className="flex w-full mb-10">
          <div className="w-1/2">
            <UserCard title={userOneData.public_repos > userTwoData.public_repos ? "Winner" : 'Loser'} data={userOneData} />
          </div>
          <div className="w-1/2">
            <UserCard title={!(userOneData.public_repos > userTwoData.public_repos) ? "Winner" : 'Loser'} data={userTwoData} />
          </div>
        </div>
        <button onClick={handleReset} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">reset</button>
      </div>
    }
    return content;
}