import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getEvent, getPosts, createPost } from "../services/ApiService";
import Sidebar from "../components/Sidebar";
import PostFromEvent from "../components/PostFromEvent";
import { PlusOutlined } from '@ant-design/icons';
import { message, Input, Button } from 'antd';
import { UserContext } from "../context/UserContext";

const SingleEvent = () => {
  const { eventId } = useParams();
  const { user } = useContext(UserContext); 
  const [event, setEvent] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState();
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const fetchedEvent = await getEvent(eventId);
        setEvent(fetchedEvent);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event:", error);
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        const eventPosts = fetchedPosts.filter(post => post.eventId === parseInt(eventId));
        setPosts(eventPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [eventId]);

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile || !description) {
      message.error("Please upload an image and add a description.");
      return;
    }

    const formData = new FormData();
    formData.append("PosterId", user.id); 
    formData.append("Description", description);
    formData.append("Image", imageFile);
    formData.append("EventId", eventId);

    try {
      const newPost = await createPost(formData);
      setPosts([...posts, newPost]); // Update the posts state with the new post
      // Reset the fields after upload
      setImageUrl(null);
      setImageFile(null);
      setDescription("");
      message.success("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
      message.error("Error creating post!");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>Error loading event data</div>;
  }

  return (
    <div>
      <Sidebar currentView="SingleEvent" />
      <div className="mt-16 sm:ml-60 sm:mt-0 p-5">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={event.imageURL}
            alt={event.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="font-Montserrat text-2xl font-bold text-gray-800">
              {event.name}
            </h1>
            <p className="mt-4 text-gray-600">{event.description}</p>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Date:</span> {new Date(event.dateTime).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Time:</span> {new Date(event.dateTime).toLocaleTimeString()}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Location:</span> {event.location}
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-10 font-Montserrat text-xl font-bold text-gray-800">Posts from this Event</h2>
        <div className="mt-5 ml-5 flex flex-wrap justify-start gap-7">
          {posts.map((post, index) => (
            <PostFromEvent key={index} post={post} />
          ))}

          <div className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-gray-400 rounded-lg p-4">
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageChange}
              className="hidden"
              id="uploadImage"
            />
            <label htmlFor="uploadImage" className="cursor-pointer">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="uploaded"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <PlusOutlined className="text-xl text-[#B684DD] " />
                  <p className="text-sm mt-1 text-[#B684DD]">Upload Picture</p>
                </div>
              )}
            </label>
            <Input.TextArea
              value={description}
              onChange={handleChange}
              placeholder="Description"
              className="my-3"
            />
            <Button onClick={handleSubmit} className='mt-2 rounded-md bg-[#ba90db] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#B684DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B684DD]'>
              Upload Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
