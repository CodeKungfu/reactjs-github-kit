import { Avatar } from './Avatar';

export function UserCard(props) {
    return (
        <div className="flex-1 p-2">
            <div className="bg-[rgba(235,235,235,1)] py-4 max-w-[200px] mx-auto">
                <div className="px-4 mb-2 text-center">{props.title}</div>
                <div className="mb-4">
                    <Avatar url={props.data.avatar_url} />
                </div>

                <div className="px-4">
                    <div className="mb-2 flex items-center justify-center font-bold text-center text-sm">
                        Scores: {props.data.public_repos}
                    </div>
                    <div className="mb-4 flex items-center justify-center">
                        <a
                            href={props.data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-red-500 text-center text-sm truncate hover:text-purple-600"
                            title={props.data.login}
                        >
                            {props.data.login}
                        </a>
                    </div>
                    <div className="flex items-center mb-2">
                        {/* <MyIcon name="location" /> */}
                        <div className="ml-2 flex-auto text-xs truncate">
                            {props.data.location}
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        {/* <MyIcon name="users" /> */}
                        <div className="ml-2 flex-auto text-xs truncate">
                            {props.data.followers}
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        {/* <MyIcon name="following" /> */}
                        <div className="ml-2 flex-auto text-xs truncate">
                            {props.data.following}
                        </div>
                    </div>
                    <div className="flex items-center">
                        {/* <MyIcon name="code" /> */}
                        <div className="ml-2 flex-auto text-xs truncate">
                            {props.data.public_repos}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}