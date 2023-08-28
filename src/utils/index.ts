export function getUrlLanguage() {
    return new URLSearchParams(window.location.search).get('language') || 'All';
}
export function getRequestUrl(language = 'All', page = 1) {
    if (language === 'All') {
        return `https://api.github.com/search/repositories?q=stars%3A%3E1&sort=stars&order=desc&type=Repositories&page=${page}&per_page=10`
    }
    return `https://api.github.com/search/repositories?q=stars%3A%3E1%20language%3A${language}&sort=stars&order=desc&type=Repositories&page=${page}&per_page=10`
}

export function isTwoUser() {
    const userOne = new URLSearchParams(window.location.search).get('userOne') || '';
    const userTwo = new URLSearchParams(window.location.search).get('userTwo') || '';
    if (userOne && userTwo) { // 两个用户存在并且localstorage 有数据
        const storageOne = localStorage.getItem(`${userOne}`) || '';
        const storageTwo = localStorage.getItem(`${userTwo}`) || '';
        if (storageOne && storageTwo) {
            return true;
        }
    }
    return false;
}

export const getTwoUserName = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const githubUserOne = searchParams.get("userOne") || "";
    const githubUserTwo = searchParams.get("userTwo") || "";
    return { githubUserOne, githubUserTwo };
};

export function getTwoUserInfo() {
    const userOne = new URLSearchParams(window.location.search).get('userOne') || '';
    const userTwo = new URLSearchParams(window.location.search).get('userTwo') || '';
    if (userOne && userTwo) { // 两个用户存在并且localstorage 有数据
        try {
            const storageOne = localStorage.getItem(`${userOne}`) || '';
            const storageTwo = localStorage.getItem(`${userTwo}`) || '';
            return {
                userOne,
                userTwo,
                userOneData: storageOne ? JSON.parse(storageOne) : {},
                userTwoData: storageOne ? JSON.parse(storageTwo) : {}
            }
        } catch (error) {
            return {
                userOne,
                userTwo,
                userOneData: {},
                userTwoData: {}
            }
        }
    }
    return {
        userOne,
        userTwo,
        userOneData: {},
        userTwoData: {}
    }
}