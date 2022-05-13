import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Whoops, Something went wrong here chief. Please screenshot your browser console and copy the page url before you send this off to my Dev Team in a GitHub Issue."} />
}

export default UnkownPage;