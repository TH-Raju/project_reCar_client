import React from "react";

const Blog = () => {
  return (
    <div className="lg:w-4/5 lg:mx-auto mb-16">
      <section className="mb-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold ">
              Our Blog
            </h2>
            <p className="font-medium sm:text-xl ">
              Here Are Some Important Question with Answer in Blog Section.
              Which is related to MERN Stack and some functionality of our site
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6  rounded-lg border border-gray-200 shadow-md ">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">
                <a href=" ">
                  🔰 What are the different ways to manage a state in a React
                  application?
                </a>
              </h2>
              <p className="mb-5 font-medium ">
                State represents the value of a dynamic properties of a React
                component at a given instance. React provides a dynamic data
                store for each component. The internal data represents the state
                of a React component and can be accessed using this. state
                member variable of the component.
              </p>
            </article>
            <article className="p-6  rounded-lg border border-gray-200 shadow-md ">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">
                <a href=" ">🔰 How does prototypical inheritance work?</a>
              </h2>
              <p className="mb-5 font-medium ">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object.
              </p>
            </article>
            <article className="p-6  rounded-lg border border-gray-200 shadow-md ">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">
                <a href=" ">
                  🔰 What is a unit test? Why should we write unit tests?
                </a>
              </h2>
              <p className="mb-5 font-medium ">
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages
              </p>
            </article>
            <article className="p-6  rounded-lg border border-gray-200 shadow-md ">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">
                <a href=" ">🔰 React vs. Angular vs. Vue?</a>
              </h2>
              <p className="mb-5 font-medium ">
                Vue provides higher customizability and hence is easier to learn
                than Angular or React. Further, Vue has an overlap with Angular
                and React with respect to their functionality like the use of
                components. Hence, the transition to Vue from either of the two
                is an easy option.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
