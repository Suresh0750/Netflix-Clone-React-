import { SavedShows } from "../components/SavedShows"

 const Account = () => {
    return (
        < >
            <div className="w-full text-white  ">
                <img className="sm:block w-full  object-cover h-[250px] md:h-[400px]" src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-[250px] md:h-[400px]"></div>
                <div className="absolute top-[15%] md:top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text:5xl font-bold">My Shows</h1>
                </div>
            </div>
            <SavedShows />
        </>
    )
}

export default Account