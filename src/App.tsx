import React, { cloneElement, isValidElement, ReactNode } from "react";
import { Icon, ThemeToggle } from "./components";
import clsx from "clsx";

type Props = {
  children?: ReactNode;
};
function Card({ children }: Props) {
  if (!isValidElement(children)) return <></>;

  return cloneElement(children, {
    className: clsx(
      children.props.className,
      "bg-gray-lightest shadow-sm rounded-2xl"
    ),
  });
}

function Search() {
  return (
    <label
      className={clsx(
        "flex items-center",
        "bg-gray-lightest shadow rounded-2xl p-1"
      )}
    >
      <span className="w-5 text-blue-light mx-3 my-4">
        <Icon.Search />
      </span>

      <input
        type="search"
        name="search"
        placeholder="Search GitHub username..."
        className="placeholder-blue-dark text-xs flex-1 px-2 py-3 truncate"
      />

      <button
        type="button"
        className="bg-blue-light text-white text-sm h-full p-3 rounded-xl"
      >
        Search
      </button>
    </label>
  );
}

function App() {
  return (
    <main className="p-6 flex flex-col gap-8">
      <header className="flex justify-between items-center">
        <h1>devfinder</h1>

        <ThemeToggle />
      </header>

      <form className="flex flex-col gap-4">
        <Search />

        <Card>
          <output className="flex flex-col gap-6 text-blue-dark px-6 py-8">
            <div className="flex gap-5">
              <img
                className="rounded-full w-1/4"
                src="https://avatars.githubusercontent.com/u/583231?v=4"
                alt="The Octocat's avatar"
              />

              <div className="flex-1">
                <h2>The Octocat</h2>

                <p className="text-sm text-blue-light">@octocat</p>

                <p className="text-sm text-gray-light">
                  Joined <time>25 Jan 2011</time>
                </p>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>

            <div className="flex justify-between bg-gray-lighter p-5 rounded-xl">
              {[
                { key: "Repos", value: 8 },
                { key: "Followers", value: 3938 },
                { key: "Following", value: 9 },
              ].map(({ key, value }) => (
                <div key={key} className="flex flex-col items-center">
                  <span className="text-xs text-blue-dark">{key}</span>

                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <ul className="flex flex-col gap-4">
              {[
                {
                  key: "location",
                  icon: <Icon.Location />,
                  value: "San Francisco",
                },
                {
                  key: "website",
                  icon: <Icon.Website />,
                  value: "https://github.blog",
                },
                {
                  key: "twitter",
                  icon: <Icon.Twitter />,
                  value: "Not Available",
                },
                {
                  key: "company",
                  icon: <Icon.Company />,
                  value: "@github",
                },
              ].map(({ key, icon, value }) => (
                <li key={key} className="flex gap-4 items-center">
                  <span className="w-5">{icon}</span>

                  <a>{value}</a>
                </li>
              ))}
            </ul>
          </output>
        </Card>
      </form>
    </main>
  );
}

export default App;
