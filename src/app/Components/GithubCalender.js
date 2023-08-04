import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalender = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-4xl font-bold mb-4">Github Contribution</h2>
      <GitHubCalendar
        username="souravbandyopadhyay"
        colorScheme="dark"
        blockMargin={5}
        blockRadius={10}
        fontSize={16}
        blockSize={16}
      />
    </section>
  );
};

export default GithubCalender;
