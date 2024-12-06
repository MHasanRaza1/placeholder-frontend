import Center from "../../components/Center"
import Intro from "../../components/Intro"
import Nav from "../../components/Nav"
import TopLine from "../../components/TopLine"

const Home = () => {
    return (
        <div>
            <TopLine />
            <div className="max-w-[1000px] m-auto">
                <Nav />
                <Intro />
                <Center />
            </div>
            <p className="mt-4 bg-blue-600 text-[white] flex justify-center py-2 items-center">Coded and maintained with ❤️ by Hasan.</p>
        </div>
    )
}

export default Home