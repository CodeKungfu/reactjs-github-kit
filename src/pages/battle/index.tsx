import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Instructions } from "@/components/Instructions";
import { BattleUser } from "@/components/BattleUser";
export default function Battle() {
    const navigate = useNavigate();
    const [githubUserOne, setGithubUserOne] = useState<string>('');
    const [githubUserTwo, setGithubUserTwo] = useState<string>('');
    useEffect(() => {
        if (githubUserOne && githubUserTwo) {
            navigate(`/result?userOne=${githubUserOne}&userTwo=${githubUserTwo}`);
        }
    }, [githubUserOne, githubUserTwo]);
    return (
        <div className="py-4 h-full flex flex-col items-center">
            < Instructions />
            <div className="w-full mt-20">
                <h3 className="text-xl text-center mb-6">Players</h3>
                <div className="flex items-center justify-between mx-10">
                    <div className="flex-1 w-[50%] mr-10">
                        <BattleUser title="Play One" onSubmitUser={(user) => {
                            setGithubUserOne(user);
                        }} />
                    </div>
                    <div className="flex-1 w-[50%]">
                        <BattleUser title="Play Two" onSubmitUser={(user) => {
                            setGithubUserTwo(user);
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
}