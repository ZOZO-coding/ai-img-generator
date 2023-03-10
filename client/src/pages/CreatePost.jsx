import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {

  const fetchURL = "https://ai-image-generator-ftfu.onrender.com/api/v1/dalle"
  const postURL = "https://ai-image-generator-ftfu.onrender.com/api/v1/post"

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  // * function to generate image
  const generateImg = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(fetchURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt })
        })

        const data = await response.json();

        setForm({
          ...form,
          photo: `data:image/jpeg;base64,${data.photo}`
        })
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please enter a prompt')
    }
  }

  // handler when submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch(postURL, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })

        await response.json();
        navigate('/');
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a prompt to generate an image.')
    }
  }

  // handler when typing
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // handler to display ai generated image based on dummy prompts
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({
      ...form,
      prompt: randomPrompt
    })
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px] dark:text-white">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[18px] max-w[500px] dark:text-white">
          Create imaginative and visually stuning images
          generated by DALL-E AI and share them with the community.
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          {/* normal field when you can type in */}
          <FormField 
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="For example: John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          {/* pre filled with dummpy prompt so that you can randomly generate an image */}
          <FormField 
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="a sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          {/* image container */}
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-128 p-3 h-128 flex justify-center items-center">
            {form.photo ? (
              <img 
                src={form.photo} 
                alt={form.prompt}
                className="w-full h-full object-contain" 
              />
            ) : (
              <img 
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                  <Loader />
              </div>
            )}
          </div>
        </div>

        {/* button to generate image */}
        <div className="mt-5 flex gap-5">
              <button
                type="button"
                onClick={generateImg}
                className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {generatingImg ? 'Generating...' : "Generate"}
              </button>
        </div>
        
        {/*  button to submit in order to share */}
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px] dark:text-white">
            You just created your image! You can share it with others in the communitiy!
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>

      </form>
    </section>
  );
};

export default CreatePost;
