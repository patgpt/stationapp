import { Card } from "./ui/card";
const DUMMY_TEST = [
    {
        id: 1,
        host: "test",
        topic: "test",
        when: "2021-10-10",
        link: "https://www.twitter.com",
    },
    {
        id: 2,
        host: "test2",
        topic: "test2",
        when: "2021-12-10",
        link: "https://www.twitter.com",
    },
];

//TODO: Achitect API to retrieve spaces data from twitter
export default function SpacesSchedule() {
    return (
        <Card>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl p-4">
                Upcoming Spaces
            </h2>

            <div className="grid gap-6 max-w-[700px]">
                {DUMMY_TEST.map((show) => (
                    <div
                        key={show.id}
                        className="p-6 rounded-lg shadow-md bg-gradient-to-r from-purple-400 to-pink-400"
                    >
                        <h2 className="text-xl font-semibold text-white">Host: {show.host}</h2>
                        <p className="text-white">Topic: {show.topic}</p>
                        <p className="text-white">When: {show.when}</p>
                        {show.link && (
                            <a
                                href={show.link}
                                className="text-white underline hover:text-opacity-80 transition-colors"
                            >
                                Join the Show
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </Card>
    );
}
