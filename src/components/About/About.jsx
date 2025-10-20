import React from 'react'
import { Link } from 'react-router-dom' 
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://invozone.com/static/06ea5a35b6ed5a51e27fca1c207028d4/introducation_to_react_programming_language_9568c6971d.webp"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React is a popular JavaScript library for building user interfaces. It encourages a component-based architecture, which helps teams break complex UIs into small, reusable pieces. With a declarative approach and a virtual DOM for efficient updates, React makes it easier to reason about state and render consistent, predictable views across your application.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Modern React embraces hooks for managing state and side effects, powerful tooling like React Router for navigation, and an extensive ecosystem for testing, styling, and performance optimization. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}