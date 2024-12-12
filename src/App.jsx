import React, { useState } from "react";
import "./styles.css";

const profilesData = [
  {
    id: 1,
    name: "Jaimeen Bhagat",
    location: "Mumbai",
    description:
      "Front-End Developer studying in Mumbai, passionate about creating responsive and interactive web experiences.",
    image: "./src/images/download.png",
    lat: 19.2023,
    lng: 72.8151,
    contact: "jbhagat2005@gmail.com",
    interests: ["Coding", "Design", "Travel"],
  },
  {
    id: 2,
    name: "Aryan Sharma",
    location: "Delhi",
    description:
      "Software Developer working in Delhi, passionate about front-end development and UX design.",
    image: "./src/images/download.png",
    lat: 28.6139,
    lng: 77.209,
    contact: "aryan.sharma@gmail.com",
    interests: ["Coding", "Design", "Travel"],
  },
  {
    id: 3,
    name: "Rohan Desai",
    location: "Bengaluru",
    description:
      "Cloud Engineer working with cutting-edge technologies in Bengaluru.",
    image: "./src/images/download.png",
    lat: 12.9716,
    lng: 77.5946,
    contact: "rohan.desai@cloudmail.com",
    interests: ["Cloud Computing", "AI", "Cycling"],
  },
  {
    id: 4,
    name: "Neha Gupta",
    location: "Chennai",
    description: "Data Scientist creating insights from data in Chennai.",
    image: "./src/images/download.png",
    lat: 13.0827,
    lng: 80.2707,
    contact: "neha.gupta@datascience.com",
    interests: ["Data Analysis", "AI", "Photography"],
  },
  {
    id: 5,
    name: "Amit Patel",
    location: "Ahmedabad",
    description: "Entrepreneur developing sustainable solutions in Ahmedabad.",
    image: "./src/images/download.png",
    lat: 23.0225,
    lng: 72.5714,
    contact: "amit.patel@ecoentrepreneur.com",
    interests: ["Sustainability", "Entrepreneurship", "Travel"],
  },
  {
    id: 6,
    name: "Kavya Nair",
    location: "Kochi",
    description:
      "Graphic Designer specializing in branding and visuals in Kochi.",
    image: "./src/images/download.png",
    lat: 9.9312,
    lng: 76.2673,
    contact: "kavya.nair@designs.com",
    interests: ["Graphic Design", "Art", "Travel"],
  },
  {
    id: 7,
    name: "Siddharth Verma",
    location: "Jaipur",
    description: "Architect designing innovative spaces in Jaipur.",
    image: "./src/images/download.png",
    lat: 26.9124,
    lng: 75.7873,
    contact: "siddharth.verma@architecture.com",
    interests: ["Architecture", "Photography", "Travel"],
  },
  {
    id: 8,
    name: "Ananya Singh",
    location: "Lucknow",
    description: "Content Writer crafting engaging stories in Lucknow.",
    image: "./src/images/download.png",
    lat: 26.8467,
    lng: 80.9462,
    contact: "ananya.singh@writing.com",
    interests: ["Writing", "Blogging", "Music"],
  },
  {
    id: 9,
    name: "Varun Reddy",
    location: "Hyderabad",
    description: "AI Researcher building intelligent systems in Hyderabad.",
    image: "./src/images/download.png",
    lat: 17.385,
    lng: 78.4867,
    contact: "varun.reddy@airesearch.com",
    interests: ["AI", "Machine Learning", "Music"],
  },
  {
    id: 10,
    name: "Ishita Bose",
    location: "Kolkata",
    description: "Event Planner creating unforgettable experiences in Kolkata.",
    image: "./src/images/download.png",
    lat: 22.5726,
    lng: 88.3639,
    contact: "ishita.bose@eventplanner.com",
    interests: ["Event Planning", "Travel", "Art"],
  },
];

const App = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [editProfile, setEditProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle Profile Management (Add, Edit, Delete)
  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  const handleEditProfileSubmit = (id, updatedProfile) => {
    if (
      !updatedProfile.name ||
      !updatedProfile.location ||
      !updatedProfile.description
    ) {
      setError("All fields are required!");
      return;
    }
    setProfiles(
      profiles.map((profile) => (profile.id === id ? updatedProfile : profile))
    );
    setEditProfile(null); // Close the edit form
    setError(""); // Clear any previous errors
  };

  // Search and Filter profiles
  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Loading Indicator
  const LoadingIndicator = () => <div className="loading">Loading...</div>;

  document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("image");
    const loader = document.getElementById("loading-indicator");
    const content = document.getElementById("content");
  
    image.addEventListener("load", () => {
      loader.style.display = "none"; // Hide loader
      content.style.display = "block"; // Show content
    });
  
    image.addEventListener("error", () => {
      loader.innerHTML = "<p>Failed to load image. Please try again.</p>";
    });
  });
  

  // Profile details view
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const closeProfile = () => {
    setSelectedProfile(null);
  };

  // Edit Profile Form
  const handleEditClick = (profile) => {
    setEditProfile(profile);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Profile Mapping App
      </h1>

      {/* Search Bar */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by Name, Location, or Description"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Admin Panel to Add Profiles */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() =>
            handleAddProfile({
              id: Date.now(),
              name: "New Profile",
              location: "New City",
              description: "Description here",
              image: "./src/images/download.png",
              lat: 0,
              lng: 0,
              contact: "email@example.com",
              interests: ["Interest 1", "Interest 2"],
            })
          }
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Profile
        </button>
      </div>

      {/* Edit Profile Form */}
      {editProfile && (
        <div className="edit-profile-form">
          <h2>Edit Profile</h2>
          {error && <div className="error">{error}</div>}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditProfileSubmit(editProfile.id, editProfile);
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <label style={{ width: "100%" }}>
              Name:
              <input
                type="text"
                name="name"
                value={editProfile.name}
                onChange={handleEditChange}
                style={{
                  padding: "10px",
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </label>
            <label style={{ width: "100%" }}>
              Location:
              <input
                type="text"
                name="location"
                value={editProfile.location}
                onChange={handleEditChange}
                style={{
                  padding: "10px",
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </label>
            <label style={{ width: "100%" }}>
              Description:
              <textarea
                name="description"
                value={editProfile.description}
                onChange={handleEditChange}
                style={{
                  padding: "10px",
                  width: "100%",
                  height: "100px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </label>
            <label style={{ width: "100%" }}>
              Contact:
              <input
                type="email"
                name="contact"
                value={editProfile.contact}
                onChange={handleEditChange}
                style={{
                  padding: "10px",
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </label>
            <label style={{ width: "100%" }}>
              Interests:
              <input
                type="text"
                name="interests"
                value={editProfile.interests.join(", ")}
                onChange={(e) =>
                  handleEditChange({
                    target: {
                      name: "interests",
                      value: e.target.value.split(", "),
                    },
                  })
                }
                style={{
                  padding: "10px",
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditProfile(null)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                marginTop: "10px",
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Profile Detail View */}
      {selectedProfile ? (
        <div className="profile-detail">
          <h1>{selectedProfile.name}</h1>
          <p>{selectedProfile.description}</p>
          <p>
            <strong>Location:</strong> {selectedProfile.location}
          </p>
          <p>
            <strong>Contact:</strong> {selectedProfile.contact}
          </p>
          <p>
            <strong>Interests:</strong> {selectedProfile.interests.join(", ")}
          </p>
          <div className="map-container">
            <iframe
              width="600px"
              height="500px"
              src={`https://www.google.com/maps?q=${selectedProfile.lat},${selectedProfile.lng}&z=15&output=embed`}
              allowFullScreen
            ></iframe>
          </div>
          <button
            onClick={closeProfile}
            style={{
              backgroundColor: "red",
              color: "white",
              marginTop: "20px",
            }}
          >
            Back
          </button>
        </div>
      ) : (
        <div className="home-page">
          {loading ? (
            <LoadingIndicator />
          ) : (
            filteredProfiles.map((profile) => (
              <div key={profile.id} className="profile-card">
                <img src={profile.image} alt={`${profile.name}'s photo`} />
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
                <button
                  onClick={() => handleProfileClick(profile)}
                  style={{ backgroundColor: "green", color: "white" }}
                >
                  Summary
                </button>
                <button
                  onClick={() => handleEditClick(profile)}
                  style={{ backgroundColor: "orange", color: "white" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProfile(profile.id)}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default App;
