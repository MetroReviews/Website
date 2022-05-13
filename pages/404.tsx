import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Hang on chief, You seem lost!',
        'Whoops, Looks like you hit a dead end!',
        'Hmm, Seems like my Dev Team forgot to put something here ;)'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;