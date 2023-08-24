import {Icon} from '@/components/Icon';

export function Instructions() {
    return (
        <>
            <div className="w-full">
                <h2 className="text-2xl text-center">Instructions</h2>
                <div className="mt-4 flex items-center justify-around">
                    <div className="flex-1 flex-col flex items-center justify-center">
                        <h4 className="mb-2">Enter Two Github Users</h4>
                        <div className="bg-[rgba(235,235,235,1)] w-[150px] h-[150px] flex items-center justify-center">
                            <Icon className="fa-solid fa-user-group text-orange-400 text-5xl"></Icon>
                        </div>
                    </div>

                    <div className="flex-1 flex-col flex items-center justify-center">
                        <h4 className="mb-2">Battle</h4>
                        <div className="bg-[rgba(235,235,235,1)] w-[150px] h-[150px] flex items-center justify-center">
                            <Icon className="fa-solid fa-jet-fighter text-gray-600 text-5xl"></Icon>
                        </div>
                    </div>

                    <div className="flex-1 flex-col flex items-center justify-center">
                        <h4 className="mb-2">See the winner</h4>
                        <div className="bg-[rgba(235,235,235,1)] w-[150px] h-[150px] flex items-center justify-center">
                            <Icon className="fa-solid fa-trophy text-yellow-300 text-5xl"></Icon>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}