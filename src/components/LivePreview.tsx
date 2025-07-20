
type LivePreviewProps = {
    name: string;
    role: string;
    bio: string;
    github: string;
    linkedin: string;
    skills: string;
};

const LivePreview = ({name, role, bio, github, linkedin, skills}: LivePreviewProps) => {
    const skillList = skills.split(',').map(s => s.trim()).filter(Boolean);

    return (
        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded shadow-md border border-gray-200 dark:border-gray-600">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {name || "Your Name"}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
            {role || "Your Role"}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
            {bio || "Short bio about yourself."}
            </p>
        
            <div className="mt-4 flex gap-4">
            {github && (
                <a
                href={github}
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                GitHub
                </a>
            )}
            {linkedin && (
                <a
                href={linkedin}
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                LinkedIn
                </a>
            )}
            </div>
        
            <div className="mt-4">
            <h2 className="font-semibold text-gray-800 dark:text-gray-200">Skills:</h2>
            <ul className="flex flex-wrap gap-2 mt-2">
                {skillList.length > 0 ? (
                skillList.map((skill, i) => (
                    <li
                    key={i}
                    className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm"
                    >
                    {skill}
                    </li>
                ))
                ) : (
                <span className="text-gray-400 dark:text-gray-500">No skills listed</span>
                )}
            </ul>
            </div>
        </div>
    );
};

export default LivePreview;