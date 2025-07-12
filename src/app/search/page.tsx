"use client";

import Link from "next/link";
import { useState } from "react";

// Mock users data
const mockUsers = [
  {
    id: 1,
    name: "Alex Johnson",
    location: "San Francisco, CA",
    skills: ["Python", "Data Science", "Machine Learning"],
    interests: ["JavaScript", "React", "Web Development"],
    rating: 4.8,
    availability: ["Weekends", "Thursday evenings"],
  },
  {
    id: 2,
    name: "Sam Rivera",
    location: "New York, NY",
    skills: ["UI Design", "Figma", "Adobe XD"],
    interests: ["JavaScript", "Web Development", "React Native"],
    rating: 4.5,
    availability: ["Weekday evenings", "Sunday mornings"],
  },
  {
    id: 3,
    name: "Taylor Swift",
    location: "Nashville, TN",
    skills: ["Music Production", "Songwriting", "Guitar"],
    interests: ["UI Design", "Photography"],
    rating: 5.0,
    availability: ["Monday evenings", "Wednesday afternoons"],
  },
  {
    id: 4,
    name: "Jordan Lee",
    location: "Chicago, IL",
    skills: ["Digital Marketing", "SEO", "Content Writing"],
    interests: ["JavaScript", "Web Development", "Python"],
    rating: 4.2,
    availability: ["Weekends", "Friday evenings"],
  },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    skillLevel: "all",
    location: "all",
    availability: "all",
  });
  
  // Filter users based on search query and filters
  const filteredUsers = mockUsers.filter(user => {
    // Search by skill name
    const matchesSearch = searchQuery === "" || 
      user.skills.some(skill => 
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            SkillSwap
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              Dashboard
            </Link>
            <Link href="/messages" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              Messages
            </Link>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              U
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Skills</h1>
        
        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Search Skills
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. JavaScript, Photoshop, Guitar"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-48">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Skill Level
              </label>
              <select
                value={filters.skillLevel}
                onChange={(e) => setFilters({...filters, skillLevel: e.target.value})}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <div className="w-full md:w-48">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Location
              </label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Locations</option>
                <option value="san-francisco">San Francisco</option>
                <option value="new-york">New York</option>
                <option value="chicago">Chicago</option>
                <option value="remote">Remote Only</option>
              </select>
            </div>
            <div className="w-full md:w-48">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Availability
              </label>
              <select
                value={filters.availability}
                onChange={(e) => setFilters({...filters, availability: e.target.value})}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Any Time</option>
                <option value="weekends">Weekends</option>
                <option value="weekdays">Weekdays</option>
                <option value="evenings">Evenings</option>
                <option value="mornings">Mornings</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="space-y-6">
          {filteredUsers.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">No users found matching your search criteria.</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Try adjusting your filters or search for a different skill.</p>
            </div>
          ) : (
            filteredUsers.map(user => (
              <div key={user.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-center md:items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{user.name}</h2>
                      <p className="text-gray-600 dark:text-gray-400">{user.location}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(user.rating) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{user.rating}/5</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {user.skills.map(skill => (
                          <span 
                            key={skill} 
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Learning Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {user.interests.map(interest => (
                          <span 
                            key={interest} 
                            className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-sm"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Availability</h3>
                      <div className="flex flex-wrap gap-2">
                        {user.availability.map(time => (
                          <span 
                            key={time} 
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-sm"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 justify-center">
                    <Link 
                      href={`/profile/${user.id}`}
                      className="px-4 py-2 bg-white border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 text-center"
                    >
                      View Profile
                    </Link>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Request Swap
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}