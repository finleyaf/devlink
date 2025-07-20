import { useState } from "react";
import LivePreview from "./LivePreview";

const InputForm = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [skills, setSkills] = useState('');

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 shadow rounded">
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded"
          />
        </div>
  
        <div>
          <label htmlFor="role" className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Role:</label>
          <input
            id="role"
            name="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded"
          />
        </div>
  
        <div>
          <label htmlFor="bio" className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Bio:</label>
          <input
            id="bio"
            name="bio"
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded"
          />
        </div>
  
        <div>
          <label htmlFor="github" className="block mb-1 font-medium text-gray-800 dark:text-gray-200">GitHub:</label>
          <input
            id="github"
            name="github"
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded"
          />
        </div>
  
        <div>
          <label htmlFor="linkedin" className="block mb-1 font-medium text-gray-800 dark:text-gray-200">LinkedIn:</label>
          <input
            id="linkedin"
            name="linkedin"
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded"
          />
        </div>
  
        <div>
          <label htmlFor="skills" className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Skills (comma separated):</label>
          <input
            id="skills"
            name="skills"
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded"
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 dark:hover:bg-purple-500 transition"
        >
          Generate Preview
        </button>
      </form>
  
      <LivePreview 
        name={name}
        role={role}
        bio={bio}
        github={github}
        linkedin={linkedin}
        skills={skills}
      />
    </div>
  );
};

export default InputForm;