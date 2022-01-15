import React from "react";
import moment from "moment";
import { RichText } from "@graphcms/rich-text-react-renderer";

/**
 * Helps tracking the props changes made in a react functional component.
 *
 * Prints the name of the properties/states variables causing a render (or re-render).
 * For debugging purposes only.
 *
 * @usage You can simply track the props of the components like this:
 *  useRenderingTrace('MyComponent', props);
 *
 * @usage You can also track additional state like this:
 *  const [someState] = useState(null);
 *  useRenderingTrace('MyComponent', { ...props, someState });
 *
 * @param componentName Name of the component to display
 * @param propsAndStates
 * @param level
 *
 * @see https://stackoverflow.com/a/51082563/2391795
 */

const PostDetail = ({ post }) => {
  return (
    <>
      <div className="bg-yellow-100 shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url}
            alt=""
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                {post.author.name}
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-2xl font-semibold">{post.title}</h1>
          <div>
            <RichText
              content={post.content.raw}
              renderers={{
                p: ({ children }) => (
                  <p className="text-lg mt-2 mb-2">{children}</p>
                ),

                h1: ({ children }) => <h1 className="text-2xl ">{children}</h1>,
                h2: ({ children }) => <h2 className="text-xl ">{children}</h2>,
                bold: ({ children }) => (
                  <strong className="text-gray-600">{children}</strong>
                ),
                table: ({ children }) => (
                  <table className="text-gray-600 table-auto mt-2 mb-2">
                    {children}
                  </table>
                ),

                ul: ({ children }) => (
                  <ul className="list-disc text-lg ml-4 mt-2 mb-2 italic">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal text-lg ml-4 mt-2 mb-2 italic">
                    {children}
                  </ol>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="text-gray-600  blockquote text-lg mt-2 mb-2">
                    <p>"{children}"</p>
                  </blockquote>
                ),
                a: ({ children, openInNewTab, href, rel, ...rest }) => (
                  <a
                    className="text-blue-500 italic"
                    href={href}
                    target={openInNewTab ? "_blank" : "_self"}
                    rel={rel || "noopener noreferrer"}
                    {...rest}
                  >
                    {children}
                  </a>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
console.log(RichText);

export default PostDetail;
