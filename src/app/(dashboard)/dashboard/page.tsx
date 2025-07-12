"use client";

import Link from "next/link";
import { useState } from "react";

// Mock data for the prototype
const mockSkills = [
  { id: 1, name: "JavaScript", level: "Advanced", category: "Programming" },
  { id: 2, name: "UI Design", level: "Intermediate", category: "Design" },
];

const mockLearningInterests = [
  { id: 1, name: "Python", level: "Beginner", category: "Programming" },
  { id: 2, name: "Public Speaking", level: "Intermediate", category: "Soft Skills" },
];

const mockMatches = [
  {
    id: 1,
    name: "Alex Johnson",
    skills: ["Python", "Data Science"],
    interests: ["JavaScript", "React"],
    matchPercentage: 85,
  },
  {
    id: 2,
    name: "Sam Rivera",
    skills: ["UI Design", "Figma"],
    interests: ["JavaScript", "Web Development"],
    matchPercentage: 72,
  },
];

// New mock data for profile details
const mockProfile = {
  name: "Jamie Smith",
  location: "San Francisco, CA",
  bio: "Full-stack developer with 5 years of experience. Passionate about teaching and learning new technologies.",
  profilePhoto: "/profile-placeholder.jpg",
  availability: {
    monday: ["evening"],
    wednesday: ["morning", "evening"],
    friday: ["afternoon"],
    saturday: ["morning", "afternoon"],
  },
  isPublic: true,
};

// New mock data for swap requests
const mockSwapRequests = [
  {
    id: 1,
    from: "Alex Johnson",
    status: "pending",
    skillOffered: "Python",
    skillRequested: "JavaScript",
    message: "I'd love to exchange Python knowledge for JavaScript help!",
    date: "2023-11-15",
  },
  {
    id: 2,
    from: "Taylor Wong",
    status: "accepted",
    skillOffered: "UX Research",
    skillRequested: "UI Design",
    message: "Let's swap UX and UI skills!",
    date: "2023-11-10",
  },
  {
    id: 3,
    from: "Jordan Lee",
    status: "completed",
    skillOffered: "Data Visualization",
    skillRequested: "JavaScript",
    message: "Thanks for the JavaScript help!",
    date: "2023-11-05",
  },
];

// New mock data for ratings and feedback
const mockRatings = [
  {
    id: 1,
    from: "Alex Johnson",
    rating: 5,
    comment: "Great teacher! Explained JavaScript concepts clearly and patiently.",
    date: "2023-11-12",
  },
  {
    id: 2,
    from: "Jordan Lee",
    rating: 4,
    comment: "Very helpful session on JavaScript fundamentals.",
    date: "2023-11-07",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("matches");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            SkillSwap
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/messages" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              Messages
            </Link>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              J
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl">
                  J
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{mockProfile.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{mockProfile.location}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">Profile Completion</div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-1">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                </div>
                <div className="text-xs text-right mt-1 text-gray-600 dark:text-gray-400">70%</div>
              </div>
            </div>

            <nav className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              {[
                { id: "matches", label: "Skill Matches" },
                { id: "skills", label: "My Skills" },
                { id: "learning", label: "Learning Interests" },
                { id: "requests", label: "Swap Requests" },
                { id: "profile", label: "Profile" },
                { id: "ratings", label: "Ratings & Feedback" },
                { id: "settings", label: "Settings" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-6 py-3 ${activeTab === tab.id
                    ? "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 text-blue-600"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="w-full md:w-3/4">
            {activeTab === "matches" && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-6">Your Skill Matches</h2>
                <div className="space-y-6">
                  {mockMatches.map((match) => (
                    <div key={match.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
                      <div className="md:w-12 w-full flex md:flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">
                          {match.name.charAt(0)}
                        </div>
                        <div className="md:mt-2 font-semibold text-blue-600">{match.matchPercentage}%</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{match.name}</h3>
                        <div className="mt-2 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Skills:</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {match.skills.map((skill) => (
                                <span key={skill} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Learning:</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {match.interests.map((interest) => (
                                <span key={interest} className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                                  {interest}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                          Connect
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">My Skills</h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Add Skill
                  </button>
                </div>
                <div className="space-y-4">
                  {mockSkills.map((skill) => (
                    <div key={skill.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{skill.name}</h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                          <span>{skill.level}</span>
                          <span>•</span>
                          <span>{skill.category}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-600 hover:text-blue-600">
                          Edit
                        </button>
                        <button className="p-2 text-gray-600 hover:text-red-600">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "learning" && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Learning Interests</h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Add Interest
                  </button>
                </div>
                <div className="space-y-4">
                  {mockLearningInterests.map((interest) => (
                    <div key={interest.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{interest.name}</h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                          <span>{interest.level}</span>
                          <span>•</span>
                          <span>{interest.category}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-600 hover:text-blue-600">
                          Edit
                        </button>
                        <button className="p-2 text-gray-600 hover:text-red-600">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* New Profile Details Section */}
            {activeTab === "profile" && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Profile Details</h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Edit Profile
                  </button>
                </div>
                
                <div className="space-y-6">
                  {/* Profile Photo */}
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl">
                      J
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{mockProfile.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{mockProfile.location}</p>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <div>
                    <h3 className="text-lg font-medium mb-2">Bio</h3>
                    <p className="text-gray-700 dark:text-gray-300">{mockProfile.bio}</p>
                  </div>
                  
                  {/* Privacy Settings */}
                  <div>
                    <h3 className="text-lg font-medium mb-2">Profile Privacy</h3>
                    <div className="flex items-center gap-2">
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input 
                          type="checkbox" 
                          id="toggle" 
                          checked={mockProfile.isPublic}
                          readOnly
                          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        />
                        <label 
                          htmlFor="toggle" 
                          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {mockProfile.isPublic ? "Public Profile" : "Private Profile"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {mockProfile.isPublic 
                        ? "Your profile is visible to all SkillSwap users" 
                        : "Your profile is only visible to connections"}
                    </p>
                  </div>
                  
                  {/* Availability */}
                  <div>
                    <h3 className="text-lg font-medium mb-2">Availability</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {Object.entries(mockProfile.availability).map(([day, times]) => (
                        <div key={day} className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
                          <div className="font-medium capitalize">{day}</div>
                          <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {times.map((time) => (
                              <span key={time} className="capitalize">{time} </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* New Swap Requests Section */}
            {activeTab === "requests" && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-6">Swap Requests</h2>
                
                {/* Tabs for different request statuses */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                  <nav className="-mb-px flex space-x-8">
                    {["All", "Pending", "Accepted", "Completed"].map((tab) => (
                      <button
                        key={tab}
                        className={`py-2 px-1 border-b-2 ${tab === "All" 
                          ? "border-blue-500 text-blue-600" 
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </nav>
                </div>
                
                <div className="space-y-6">
                  {mockSwapRequests.map((request) => (
                    <div key={request.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                            {request.from.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-semibold">{request.from}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{request.date}</p>
                          </div>
                        </div>
                        <div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${request.status === "pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                              request.status === "accepted" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" :
                              "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"}`}
                          >
                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Offering:</p>
                          <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded inline-block mt-1">
                            {request.skillOffered}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Requesting:</p>
                          <span className="text-sm bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded inline-block mt-1">
                            {request.skillRequested}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-700 dark:text-gray-300">"{request.message}"</p>
                      </div>
                      
                      {request.status === "pending" && (
                        <div className="mt-4 flex gap-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Accept
                          </button>
                          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Decline
                          </button>
                        </div>
                      )}
                      
                      {request.status === "accepted" && (
                        <div className="mt-4">
                          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                            Mark as Completed
                          </button>
                        </div>
                      )}
                      
                      {request.status === "completed" && (
                        <div className="mt-4">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Leave Feedback
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* New Ratings & Feedback Section */}
            {activeTab === "ratings" && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-6">Ratings & Feedback</h2>
                
                <div className="mb-8">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-blue-600">4.5</div>
                    <div>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star}
                            className={`w-5 h-5 ${star <= 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Based on {mockRatings.length} reviews</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {mockRatings.map((rating) => (
                    <div key={rating.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                            {rating.from.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-semibold">{rating.from}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{rating.date}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg 
                              key={star}
                              className={`w-5 h-5 ${star <= rating.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-gray-700 dark:text-gray-300">"{rating.comment}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}