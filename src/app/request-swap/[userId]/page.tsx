// "use client";

// import Link from "next/link";
// import { useState } from "react";

// // Mock user data
// const mockUsers = {
//   "1": {
//     id: 1,
//     name: "Alex Johnson",
//     skills: ["Python", "Data Science", "Machine Learning"],
//   },
//   "2": {
//     id: 2,
//     name: "Sam Rivera",
//     skills: ["UI Design", "Figma", "Adobe XD"],
//   },
// };

// // Mock user skills
// const mockMySkills = [
//   { id: 1, name: "JavaScript", level: "Advanced" },
//   { id: 2, name: "UI Design", level: "Intermediate" },
//   { id: 3, name: "React", level: "Advanced" },
// ];

// export default function RequestSwap({ params }: { params: { userId: string } }) {
//   const userId = params.userId;
//   const user = mockUsers[userId as keyof typeof mockUsers];
  
//   const [formData, setFormData] = useState({
//     mySkill: "",
//     theirSkill: "",
//     proposedSchedule: "",
//     message: "",
//   });
  
//   const [submitted, setSubmitted] = useState(false);
  
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Swap request submitted:", formData);
//     setSubmitted(true)